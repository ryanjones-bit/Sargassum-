"""Builds widget.html (the code to paste into Wix) from widget.src.html,
inlining the current data file as a backup in case GitHub is unreachable."""
import json, pathlib

root = pathlib.Path(__file__).parent
data = json.loads((root / "data" / "destinations.json").read_text())
src = (root / "widget.src.html").read_text()
out = src.replace("/*FALLBACK_DATA*/null", json.dumps(data, separators=(",", ":")))
(root / "widget.html").write_text(out)
print("widget.html built,", len(out), "bytes")
