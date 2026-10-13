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
style_raw = re.search(r"<style>(.*?)</style>", src, re.S).group(1)
style = style_raw.replace(":root{", ":host{display:block;")
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

# ---- Full page versions (hero + tracker + FAQ + call to action) ----
import html as _h
faq = json.loads((root / "data" / "faq.json").read_text())
faq_html = "\n    ".join(
    f'<details><summary>{_h.escape(q["q"])}</summary><p>{_h.escape(q["a"])}</p></details>' for q in faq)
faq_ld = json.dumps({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
    {"@type": "Question", "name": q["q"], "acceptedAnswer": {"@type": "Answer", "text": q["a"]}} for q in faq]})
# In the page, the page header replaces the widget's own title and subtitle.
widget_markup = re.sub(r'\s*<h2>.*?</h2>\s*<p class="sub">.*?</p>', "", markup, count=1, flags=re.S)
page = (root / "page.src.html").read_text()
page = (page.replace("{{FAQ_JSONLD}}", faq_ld).replace("{{FAQ_HTML}}", faq_html)
            .replace("{{WIDGET_STYLE}}", style_raw).replace("{{WIDGET_MARKUP}}", widget_markup)
            .replace("{{WIDGET_SCRIPT}}", re.search(r"<script>(.*)</script>", src, re.S).group(1)))
(root / "page.html").write_text(page)
print("page.html built,", len(page), "bytes")

page_style = re.search(r"/\*PAGE_STYLE_START\*/(.*?)/\*PAGE_STYLE_END\*/", page, re.S).group(1)
page_style = page_style.replace(":root{", ":host{display:block;")
page_body = re.search(r"<!--PAGE_BODY_START-->(.*?)<!--PAGE_BODY_END-->", page, re.S).group(1)
pjs = f"""/* "Is Now a Good Time to Go?" full page — Wix Custom Element (tag: good-time-page). Built from page.src.html. */
(function(){{
  if (customElements.get("good-time-page")) return;
  var FONT = {json.dumps(font_href)};
  if (!document.querySelector('link[href="' + FONT + '"]')) {{
    var l = document.createElement("link"); l.rel = "stylesheet"; l.href = FONT; document.head.appendChild(l);
  }}
  if (!document.getElementById("gtc-faq-ld")) {{
    var s = document.createElement("script"); s.type = "application/ld+json"; s.id = "gtc-faq-ld";
    s.textContent = {json.dumps(faq_ld)}; document.head.appendChild(s);
  }}
  var STYLE = {json.dumps(page_style + style)};
  var MARKUP = {json.dumps(page_body)};
  class GoodTimePage extends HTMLElement {{
    connectedCallback() {{
      if (this.shadowRoot) return;
      var ROOT = this.attachShadow({{mode: "open"}});
      ROOT.innerHTML = "<style>" + STYLE + "</style>" + MARKUP;
      {script}
    }}
  }}
  customElements.define("good-time-page", GoodTimePage);
}})();
"""
(root / "page.js").write_text(pjs)
print("page.js built,", len(pjs), "bytes")
