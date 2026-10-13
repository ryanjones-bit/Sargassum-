# Is Now a Good Time to Go? — widget

Destination checker for wanderingincreativity.com (Ryan Jones, Fora Travel).

- `widget.html` — paste into Wix (Add → Embed Code → Embed HTML).
- `data/destinations.json` — sargassum ratings, hurricane/crowd patterns and advisor tips. The widget reads this file live, so updating it updates the site.
- `widget.src.html` + `build.py` — source; run `python3 build.py` to rebuild `widget.html`.

Sargassum data courtesy of the Optical Oceanography Lab, USF College of Marine Science, used with permission.
