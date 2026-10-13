"""Builds two versions of the widget from widget.src.html:

- widget.html: paste into Wix "Embed HTML" (fixed-height box).
- widget.js:   load as a Wix "Custom Element" (tag: good-time-checker). It sits
               directly on the page, so the section grows when results load.

Both inline the current data file as a backup in case GitHub is unreachable."""
import json, pathlib, re

root = pathlib.Path(__file__).parent
data = json.loads((root / "data" / "destinations.json").read_text())
src = (root / "widget.src.html").read_text()
src = src.replace("/*FALLBACK_DATA*/null", json.dumps(data, separators=(",", ":")))
(root / "widget.html").write_text(src)
print("widget.html built,", len(src), "bytes")

# ---- Custom element version ----
font_href = re.search(r'<link href="(https://fonts\.googleapis\.com/css2[^"]+)"', src).group(1)
style = re.search(r"<style>(.*?)</style>", src, re.S).group(1)
style = style.replace(":root{", ":host{display:block;")
markup = re.search(r'(<div class="gtc">.*?</div>)\s*<script>', src, re.S).group(1)
script = re.search(r"<script>(.*)</script>", src, re.S).group(1)
script = script.replace("return document.getElementById(id)", "return ROOT.getElementById(id)")
assert "ROOT.getElementById" in script

js = f"""/* "Is Now a Good Time to Go?" — Wix Custom Element (tag: good-time-checker). Built from widget.src.html. */
(function(){{
  if (customElements.get("good-time-checker")) return;
  var FONT = {json.dumps(font_href)};
  if (!document.querySelector('link[href="' + FONT + '"]')) {{
    var l = document.createElement("link"); l.rel = "stylesheet"; l.href = FONT; document.head.appendChild(l);
  }}
  var STYLE = {json.dumps(style)};
  var MARKUP = {json.dumps(markup)};
  class GoodTimeChecker extends HTMLElement {{
    connectedCallback() {{
      if (this.shadowRoot) return;
      var ROOT = this.attachShadow({{mode: "open"}});
      ROOT.innerHTML = "<style>" + STYLE + "</style>" + MARKUP;
      {script}
    }}
  }}
  customElements.define("good-time-checker", GoodTimeChecker);
}})();
"""
(root / "widget.js").write_text(js)
print("widget.js built,", len(js), "bytes")
