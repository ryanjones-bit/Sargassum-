/* "Is Now a Good Time to Go?" full page — Wix Custom Element (tag: good-time-page). Built from page.src.html. */
(function(){
  if (customElements.get("good-time-page")) return;
  var FONT = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300;1,600&display=swap";
  if (!document.querySelector('link[href="' + FONT + '"]')) {
    var l = document.createElement("link"); l.rel = "stylesheet"; l.href = FONT; document.head.appendChild(l);
  }
  if (!document.getElementById("gtc-faq-ld")) {
    var s = document.createElement("script"); s.type = "application/ld+json"; s.id = "gtc-faq-ld";
    s.textContent = "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"When is hurricane season in the Caribbean?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"June 1 through November 30. The real peak is mid-August through October. I always recommend travel insurance with hurricane coverage for trips in that window, and I'll tell you which rates are refundable before you book.\"}}, {\"@type\": \"Question\", \"name\": \"When is sargassum season?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"It usually builds in spring, peaks in summer, and is lowest from about November through February. It changes a lot from year to year and beach to beach, so I check current conditions before recommending a resort.\"}}, {\"@type\": \"Question\", \"name\": \"Which beaches get less sargassum?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Usually the ones facing away from the open Atlantic. Barbados' west coast, Isla Mujeres and the west side of Cozumel tend to stay clearer than east-facing beaches. Many resorts also clear their beaches every morning, and I know which ones do it well.\"}}, {\"@type\": \"Question\", \"name\": \"What's the best time to visit Turks & Caicos?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"December through April is the driest and most popular stretch. September and October are quieter, but some resorts close or renovate then, so ask me before you book those months.\"}}, {\"@type\": \"Question\", \"name\": \"How accurate is this checker?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"It's a starting point, not a guarantee. Sargassum ratings are regional outlooks, not beach forecasts. Hurricane risk is based on historical odds, not a forecast. For trips more than two months out, the sargassum rating uses the typical pattern for that month.\"}}, {\"@type\": \"Question\", \"name\": \"Does it cost anything to plan with you?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"No. I don't charge planning fees. Hotels and suppliers pay my commission, and booking through me can add perks like breakfast, resort credits and upgrades when available.\"}}]}"; document.head.appendChild(s);
  }
  var STYLE = "\n  :host{display:block;--bg:#FFEFE3;--card:#FFFAF5;--ink:#000;--muted:#5E554C;--accent:#94A372;--accent-dk:#6F7D52;--line:#EAD9C8;\n        --serif:\"Cormorant Garamond\",Georgia,serif;--sans:\"Helvetica Neue\",Helvetica,Arial,sans-serif}\n  .pg{font-family:var(--sans);font-size:18px;line-height:1.6;color:var(--ink);background:var(--bg)}\n  .pg *{box-sizing:border-box}\n  .pg section{padding:0 24px}\n  .pg .wrap{max-width:820px;margin:0 auto}\n  .pg .hero{padding-top:72px;padding-bottom:40px;text-align:center}\n  .pg .eyebrow{font-family:var(--serif);font-weight:600;font-style:italic;font-size:17px;line-height:1.4;color:var(--accent-dk);margin:0 0 12px}\n  .pg h1{font-family:var(--serif);font-weight:300;font-size:clamp(49px,10vw,96px);line-height:1.05;margin:0 0 20px}\n  .pg h1 em{font-style:italic}\n  .pg .lede{max-width:640px;margin:0 auto;font-size:18px;line-height:1.6}\n  .pg .chips{display:flex;flex-wrap:wrap;justify-content:center;gap:8px;margin:28px 0 0;padding:0;list-style:none}\n  .pg .chips li{font-size:13px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;border:1px solid var(--accent);color:var(--accent-dk);border-radius:999px;padding:6px 14px}\n  .pg .rule{width:64px;height:2px;background:var(--accent);border:0;margin:0 auto}\n  .pg .tool{padding-top:40px;padding-bottom:24px}\n  .pg h2{font-family:var(--serif);font-weight:300;font-style:italic;font-size:clamp(40px,7vw,64px);line-height:1.1;margin:0 0 8px;text-align:center}\n  .pg .tool .intro{text-align:center;color:var(--muted);margin:0 auto 4px;max-width:600px}\n  .pg .tool .gtc{padding-top:16px}\n  .pg .how{padding-top:40px;padding-bottom:40px}\n  .pg .steps{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));gap:12px;margin-top:24px}\n  .pg .step{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:18px}\n  .pg .step h3{font-family:var(--serif);font-weight:300;font-size:28px;line-height:1.3;margin:0 0 6px}\n  .pg .step p{margin:0;font-size:18px}\n  .pg .faq{padding-top:40px;padding-bottom:48px}\n  .pg details{background:var(--card);border:1px solid var(--line);border-radius:14px;margin-top:10px}\n  .pg summary{cursor:pointer;list-style:none;padding:18px 52px 18px 20px;position:relative;font-family:var(--serif);font-weight:300;font-size:22px;line-height:1.3}\n  .pg summary::-webkit-details-marker{display:none}\n  .pg summary::after{content:\"+\";position:absolute;right:20px;top:50%;transform:translateY(-50%);font-family:var(--sans);font-size:24px;color:var(--accent-dk)}\n  .pg details[open] summary::after{content:\"\u2013\"}\n  .pg details p{margin:0;padding:0 20px 18px;font-size:18px}\n  .pg details a,.pg .how a{color:var(--accent-dk)}\n  .pg .close{padding-bottom:72px}\n  .pg .closebox{background:var(--accent);color:#fff;border-radius:18px;padding:40px 28px;text-align:center}\n  .pg .closebox h2{color:#fff;margin-bottom:12px}\n  .pg .closebox p{max-width:560px;margin:0 auto 24px}\n  .pg .btns{display:flex;flex-wrap:wrap;justify-content:center;gap:12px}\n  .pg .btn{display:inline-block;font-weight:700;font-size:18px;text-decoration:none;border-radius:10px;padding:13px 22px;min-height:52px}\n  .pg .btn.solid{background:#fff;color:var(--accent-dk)}\n  .pg .btn.ghost{border:1.5px solid #fff;color:#fff}\n  @media (max-width:520px){\n    .pg section{padding:0 16px}\n    .pg .hero{padding-top:48px;padding-bottom:28px}\n    .pg .lede,.pg .step p,.pg details p,.pg .closebox p{font-size:16px}\n    .pg summary{font-size:20px;padding:16px 46px 16px 16px}\n    .pg details p{padding:0 16px 16px}\n    .pg .closebox{padding:32px 18px}\n    .pg .btn{width:100%}\n  }\n\n  /* Brand type, matched to the Wix site theme:\n     H2  Cormorant Garamond Light italic   H3/H4 Cormorant Garamond Light\n     H5  Helvetica Bold                    H6 Cormorant Garamond Semi Bold italic\n     P1/P2 Helvetica 18px, 1.6             P3 Helvetica 13px, 1.6 */\n  :host{display:block;--bg:#FFEFE3;--card:#FFFAF5;--ink:#000;--muted:#5E554C;--accent:#94A372;--accent-dk:#6F7D52;--line:#EAD9C8;\n        --low:#94A372;--mod:#C9922E;--high:#B9533E;\n        --serif:\"Cormorant Garamond\",Georgia,serif;--sans:\"Helvetica Neue\",Helvetica,Arial,sans-serif}\n  *{box-sizing:border-box}\n  html,body{margin:0;padding:0;background:var(--bg);-webkit-text-size-adjust:100%}\n  .gtc{font-family:var(--sans);font-size:18px;line-height:1.6;color:var(--ink);background:var(--bg);max-width:820px;margin:0 auto;padding:32px 24px 40px}\n  .gtc h2{font-family:var(--serif);font-weight:300;font-style:italic;font-size:clamp(40px,9vw,64px);line-height:1.1;margin:0 0 10px}\n  .gtc .sub{font-size:18px;line-height:1.6;margin:0 0 24px;color:var(--muted)}\n  .form{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr));gap:12px;margin-bottom:14px}\n  .form label{display:flex;flex-direction:column;gap:6px;font-size:13px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--muted)}\n  .form select,.form input{font-family:var(--sans);font-size:16px;line-height:1.3;text-transform:none;letter-spacing:0;color:var(--ink);background:var(--card);\n        border:1px solid var(--line);border-radius:10px;padding:12px;min-height:48px;min-width:0;width:100%;-webkit-appearance:none;appearance:none}\n  .form select{background-image:linear-gradient(45deg,transparent 50%,var(--muted) 50%),linear-gradient(135deg,var(--muted) 50%,transparent 50%);\n        background-position:calc(100% - 18px) 21px,calc(100% - 13px) 21px;background-size:5px 5px;background-repeat:no-repeat;padding-right:34px}\n  .go{font-family:var(--sans);font-weight:700;font-size:18px;background:var(--accent);color:#fff;border:0;border-radius:10px;padding:14px 18px;min-height:52px;cursor:pointer;width:100%}\n  .go:hover{background:var(--accent-dk)}\n  .err{color:var(--high);font-size:13px;margin:8px 0 0;min-height:1em}\n  .results{margin-top:28px;display:none}\n  .results.show{display:block}\n  .head{display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap;gap:4px 12px;margin-bottom:14px}\n  .head h3{font-family:var(--serif);font-weight:300;font-size:28px;line-height:1.3;margin:0}\n  .head .dates{color:var(--muted);font-size:13px}\n  .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:12px}\n  .card{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:16px 18px}\n  .card .top{display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:8px}\n  .card .t{font-family:var(--sans);font-weight:700;font-size:20px;line-height:1.3}\n  .pill{font-size:13px;font-weight:700;border-radius:999px;padding:3px 11px;color:#fff;white-space:nowrap}\n  .pill.low{background:var(--low)}.pill.moderate{background:var(--mod)}.pill.high{background:var(--high)}.pill.na,.pill.info{background:#9C9084}\n  .card p{margin:0;font-size:18px;line-height:1.6;color:var(--ink)}\n  .card p+p{margin-top:8px}\n  .card a{color:var(--accent-dk)}\n  .card p.credit{font-size:13px;font-style:italic;color:var(--muted)}\n  .note{margin-top:12px;background:var(--card);border-left:4px solid var(--accent);border-radius:8px;padding:14px 16px;font-size:18px;line-height:1.6}\n  .note b{font-family:var(--serif);font-weight:600;font-style:italic;font-size:19px}\n  .cta{margin-top:18px;background:var(--accent);color:#fff;border-radius:14px;padding:20px;display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap}\n  .cta p{margin:0;font-size:18px;line-height:1.6;flex:1 1 280px}\n  .cta a{background:#fff;color:var(--accent-dk);font-weight:700;font-size:18px;text-decoration:none;border-radius:10px;padding:12px 20px;white-space:nowrap;text-align:center}\n  .fine{font-size:13px;color:var(--muted);margin-top:16px;line-height:1.6}\n  @media (max-width:520px){\n    .gtc{padding:24px 16px 32px}\n    .gtc .sub,.card p,.note,.cta p{font-size:16px}\n    .card .t{font-size:18px}\n    .head h3{font-size:24px}\n    .card{padding:14px}\n    .cta{padding:18px 16px}\n    .cta a{width:100%}\n  }\n";
  var MARKUP = "\n<div class=\"pg\">\n  <section class=\"hero\"><div class=\"wrap\">\n    <p class=\"eyebrow\">Caribbean & Hawaii trip checker</p>\n    <h1>Is now a <em>good time</em> to go?</h1>\n    <p class=\"lede\">I get asked \"is that a good time to go?\" more than almost anything else. So I built this. Pick a destination and your dates, and you'll see the sargassum outlook, hurricane odds, typical weather, local holidays, and how busy it'll be. The one thing it can't tell you is what's happening at your specific hotel. That part's on me.</p>\n    <ul class=\"chips\"><li>Sargassum</li><li>Hurricanes</li><li>Weather</li><li>Holidays</li><li>Crowds</li></ul>\n  </div></section>\n\n  <hr class=\"rule\">\n\n  <section class=\"tool\"><div class=\"wrap\">\n    <h2>Check your dates</h2>\n    <p class=\"intro\">Weather, holidays and storm alerts update live. The sargassum outlook updates as soon as a new one is published.</p>\n  </div>\n  <div class=\"gtc\">\n  <div class=\"form\">\n    <label>Destination<select id=\"gtc-dest\"></select></label>\n    <label>Arrive<input type=\"date\" id=\"gtc-start\"></label>\n    <label>Depart<input type=\"date\" id=\"gtc-end\"></label>\n  </div>\n  <button class=\"go\" id=\"gtc-go\">Check my dates</button>\n  <p class=\"err\" id=\"gtc-err\"></p>\n  <div class=\"results\" id=\"gtc-results\"></div>\n</div>\n  </section>\n\n  <section class=\"how\"><div class=\"wrap\">\n    <h2>What this can't see</h2>\n    <div class=\"steps\">\n      <div class=\"step\"><h3>Your hotel</h3><p>Pool closures, construction, a restaurant shut for renovation. None of it shows up in public data. I ask the hotel directly.</p></div>\n      <div class=\"step\"><h3>Your beach</h3><p>Seaweed depends on which way a beach faces and the wind that week. I know which resorts tend to stay clear.</p></div>\n      <div class=\"step\"><h3>Your perks</h3><p>Booking through me can add breakfast, resort credits and upgrades when available, at no extra cost to you.</p></div>\n    </div>\n  </div></section>\n\n  <section class=\"faq\"><div class=\"wrap\">\n    <h2>Questions I get a lot</h2>\n    <details><summary>When is hurricane season in the Caribbean?</summary><p>June 1 through November 30. The real peak is mid-August through October. I always recommend travel insurance with hurricane coverage for trips in that window, and I&#x27;ll tell you which rates are refundable before you book.</p></details>\n    <details><summary>When is sargassum season?</summary><p>It usually builds in spring, peaks in summer, and is lowest from about November through February. It changes a lot from year to year and beach to beach, so I check current conditions before recommending a resort.</p></details>\n    <details><summary>Which beaches get less sargassum?</summary><p>Usually the ones facing away from the open Atlantic. Barbados&#x27; west coast, Isla Mujeres and the west side of Cozumel tend to stay clearer than east-facing beaches. Many resorts also clear their beaches every morning, and I know which ones do it well.</p></details>\n    <details><summary>What&#x27;s the best time to visit Turks &amp; Caicos?</summary><p>December through April is the driest and most popular stretch. September and October are quieter, but some resorts close or renovate then, so ask me before you book those months.</p></details>\n    <details><summary>How accurate is this checker?</summary><p>It&#x27;s a starting point, not a guarantee. Sargassum ratings are regional outlooks, not beach forecasts. Hurricane risk is based on historical odds, not a forecast. For trips more than two months out, the sargassum rating uses the typical pattern for that month.</p></details>\n    <details><summary>Does it cost anything to plan with you?</summary><p>No. I don&#x27;t charge planning fees. Hotels and suppliers pay my commission, and booking through me can add perks like breakfast, resort credits and upgrades when available.</p></details>\n  </div></section>\n\n  <section class=\"close\"><div class=\"wrap\"><div class=\"closebox\">\n    <h2>Want me to check your trip?</h2>\n    <p>Tell me where and when. I'll look at your exact dates and hotel, and find a room with perks. There's no planning fee.</p>\n    <div class=\"btns\">\n      <a class=\"btn solid\" href=\"https://secure.foratravel.com/intake/iORHzWHAGQ\" target=\"_blank\" rel=\"noopener\">Plan my trip</a>\n      <a class=\"btn ghost\" href=\"https://trips.foratravel.com/ryan-jones/book\" target=\"_blank\" rel=\"noopener\">Browse hotels with perks</a>\n    </div>\n  </div></div></section>\n</div>\n";
  class GoodTimePage extends HTMLElement {
    connectedCallback() {
      if (this.shadowRoot) return;
      var ROOT = this.attachShadow({mode: "open"});
      ROOT.innerHTML = "<style>" + STYLE + "</style>" + MARKUP;
      
(function(){
  var DATA_URL = "https://raw.githubusercontent.com/ryanjones-bit/sargassum-/main/data/destinations.json";
  var INTAKE = "https://secure.foratravel.com/intake/iORHzWHAGQ";
  var FALLBACK = {"updated":"2026-10-13","sargassum":{"source":"USF Optical Oceanography Lab, Sargassum Outlook","bulletinDate":"2026-09-30","bulletinUrl":"https://optics.marine.usf.edu/projects/SaWS/pdf/Sargassum_outlook_2026_bulletin09_USF.pdf","regions":{"wcarib":{"label":"Western Caribbean","rating":"high","trend":"easing","note":"Amounts held steady in September and are still above typical levels, but the outlook calls for a decline through the fall."},"ecarib":{"label":"Eastern Caribbean","rating":"moderate","trend":"declining","note":"Amounts dropped sharply in September. Still above typical levels, with beaching expected to be milder than summer."},"atlantic":{"label":"Atlantic-facing islands","rating":"moderate","trend":"declining","note":"The windward (east) coasts catch the most seaweed. Overall amounts are falling heading into late fall."},"bahamas":{"label":"Turks & Caicos / Bahamas","rating":"low","trend":"steady","note":"Outside the main bulletin regions. These islands usually see less sargassum than the Caribbean Sea, though east-facing beaches can still get some."}},"seasonal":["low","low","moderate","moderate","high","high","high","high","moderate","moderate","low","low"]},"destinations":[{"id":"punta-cana","name":"Punta Cana, Dominican Republic","lat":18.58,"lon":-68.4,"holidayCountry":"DO","basin":"atlantic","sargassumRegion":"ecarib","hurricane":["low","low","low","low","low","moderate","moderate","high","high","high","moderate","low"],"crowds":["high","high","high","moderate","low","moderate","high","moderate","low","low","moderate","high"],"note":""},{"id":"cancun","name":"Canc\u00fan & Riviera Maya, Mexico","lat":21.16,"lon":-86.85,"holidayCountry":"MX","basin":"atlantic","sargassumRegion":"wcarib","hurricane":["low","low","low","low","low","moderate","moderate","high","high","high","moderate","low"],"crowds":["high","high","high","high","moderate","moderate","high","high","low","low","moderate","high"],"note":"Isla Mujeres and Cozumel's west side tend to get less seaweed than the main Riviera Maya coast."},{"id":"turks-caicos","name":"Turks & Caicos","lat":21.77,"lon":-72.27,"holidayCountry":"TC","basin":"atlantic","sargassumRegion":"bahamas","hurricane":["low","low","low","low","low","moderate","moderate","high","high","high","moderate","low"],"crowds":["high","high","high","high","moderate","moderate","moderate","moderate","low","low","moderate","high"],"note":"Several resorts close or renovate in September and October. Ask me before booking those months."},{"id":"barbados","name":"Barbados","lat":13.1,"lon":-59.61,"holidayCountry":"BB","basin":"atlantic","sargassumRegion":"atlantic","hurricane":["low","low","low","low","low","moderate","moderate","moderate","high","moderate","moderate","low"],"crowds":["high","high","high","high","moderate","low","moderate","moderate","low","low","moderate","high"],"note":"The calm west coast (Platinum Coast) gets far less seaweed than the east coast."},{"id":"puerto-rico","name":"Puerto Rico","lat":18.47,"lon":-66.11,"holidayCountry":"PR","holidayFallback":"US","basin":"atlantic","sargassumRegion":"ecarib","hurricane":["low","low","low","low","low","moderate","moderate","high","high","high","moderate","low"],"crowds":["high","high","high","moderate","low","moderate","high","moderate","low","low","moderate","high"],"note":""},{"id":"maui","name":"Maui, Hawaii","lat":20.69,"lon":-156.44,"holidayCountry":"US","basin":"pacific","sargassumRegion":null,"hurricane":["low","low","low","low","low","low","moderate","moderate","moderate","low","low","low"],"crowds":["high","high","high","moderate","low","high","high","high","low","low","moderate","high"],"note":"No sargassum in Hawaii. Winter (Dec to Apr) is whale season and books up early."}]};
  var DATA = null;
  var MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  var LABEL = {low:"Low",moderate:"Moderate",high:"High"};
  var $ = function(id){return ROOT.getElementById(id)};

  function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
  function pill(level,text){return '<span class="pill '+esc(level)+'">'+esc(text||LABEL[level]||level)+'</span>'}
  function iso(d){return d.toISOString().slice(0,10)}
  function parse(s){var p=s.split("-");return new Date(Date.UTC(+p[0],+p[1]-1,+p[2]))}
  function fmt(d){return d.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",timeZone:"UTC"})}
  function months(a,b){var out=[],d=new Date(Date.UTC(a.getUTCFullYear(),a.getUTCMonth(),1));while(d<=b){out.push(d.getUTCMonth());d.setUTCMonth(d.getUTCMonth()+1)}return out}
  var RANK={low:0,moderate:1,high:2};
  function worst(arr,ms){return ms.map(function(m){return arr[m]}).reduce(function(a,b){return RANK[b]>RANK[a]?b:a},"low")}
  function card(title,level,body,levelText){return '<div class="card"><div class="top"><span class="t">'+title+'</span>'+pill(level,levelText)+'</div>'+body+'</div>'}

  function init(data){
    DATA=data;
    $("gtc-dest").innerHTML=data.destinations.map(function(d){return '<option value="'+esc(d.id)+'">'+esc(d.name)+'</option>'}).join("");
    var t=new Date(),s=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate()+30)),e=new Date(s);e.setUTCDate(e.getUTCDate()+6);
    $("gtc-start").value=iso(s);$("gtc-end").value=iso(e);
    $("gtc-start").min=iso(new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate())));
    syncEnd(false);
  }

  // Departure can only be picked after arrival. If arrival moves past the
  // current departure, departure shifts to keep the same trip length (min 1 night).
  var tripLen=6;
  function syncEnd(moved){
    var sv=$("gtc-start").value;if(!sv)return;
    var a=parse(sv),minEnd=new Date(a);minEnd.setUTCDate(minEnd.getUTCDate()+1);
    $("gtc-end").min=iso(minEnd);
    var ev=$("gtc-end").value;
    if(moved&&(!ev||parse(ev)<=a)){var e=new Date(a);e.setUTCDate(e.getUTCDate()+tripLen);$("gtc-end").value=iso(e)}
    $("gtc-err").textContent="";
  }
  $("gtc-start").addEventListener("change",function(){syncEnd(true)});
  $("gtc-end").addEventListener("change",function(){
    var sv=$("gtc-start").value,ev=$("gtc-end").value;if(!sv||!ev)return;
    var n=Math.round((parse(ev)-parse(sv))/864e5);if(n>=1)tripLen=n;
    else syncEnd(true);
  });

  fetch(DATA_URL,{cache:"no-store"}).then(function(r){if(!r.ok)throw 0;return r.json()}).then(init).catch(function(){
    if(FALLBACK) init(FALLBACK); else $("gtc-err").textContent="The checker couldn't load right now. Please try again shortly.";
  });

  // ---- live data ----
  function weather(dest,a,b){
    var today=new Date(),soon=(a-today)/864e5<=14&&b>=today;
    var base="&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&temperature_unit=fahrenheit&precipitation_unit=inch&timezone=auto";
    var calls=[],len=Math.min(Math.round((b-a)/864e5),30);
    for(var y=1;y<=3;y++){
      var s=new Date(a);s.setUTCFullYear(a.getUTCFullYear()-y);
      if(s>=today) s.setUTCFullYear(today.getFullYear()-y);
      var e=new Date(s);e.setUTCDate(e.getUTCDate()+len);
      calls.push(fetch("https://archive-api.open-meteo.com/v1/archive?latitude="+dest.lat+"&longitude="+dest.lon+"&start_date="+iso(s)+"&end_date="+iso(e)+base).then(function(r){return r.json()}));
    }
    var fc=soon?fetch("https://api.open-meteo.com/v1/forecast?latitude="+dest.lat+"&longitude="+dest.lon+"&forecast_days=16"+base).then(function(r){return r.json()}).catch(function(){return null}):Promise.resolve(null);
    return Promise.all([Promise.all(calls),fc]).then(function(res){
      var hi=[],lo=[],wet=0,days=0;
      res[0].forEach(function(j){if(!j.daily)return;j.daily.temperature_2m_max.forEach(function(v,i){if(v==null)return;hi.push(v);lo.push(j.daily.temperature_2m_min[i]);days++;if(j.daily.precipitation_sum[i]>=0.1)wet++})});
      if(!days) throw 0;
      var avg=function(x){return Math.round(x.reduce(function(p,c){return p+c},0)/x.length)};
      var pct=Math.round(wet/days*100),level=pct>=50?"high":pct>=30?"moderate":"low";
      var body='<p>Typical highs around <b>'+avg(hi)+'°F</b>, lows around '+avg(lo)+'°F. In the last three years, about <b>'+pct+'%</b> of days in this window had meaningful rain (usually short showers in the tropics).</p>';
      var f=res[1];
      if(f&&f.daily){var mx=[],rn=0;f.daily.time.forEach(function(t,i){var d=parse(t);if(d>=a&&d<=b){mx.push(f.daily.temperature_2m_max[i]);if(f.daily.precipitation_sum[i]>=0.1)rn++}});
        if(mx.length)body+='<p><b>Live forecast:</b> highs near '+avg(mx)+'°F, rain likely on '+rn+' of '+mx.length+' forecast days.</p>'}
      return card("Weather",level,body,pct+"% rainy days");
    }).catch(function(){return card("Weather","info",'<p>Weather data is unavailable right now.</p>',"—")});
  }

  function holidays(dest,a,b){
    var years=[a.getUTCFullYear()];if(b.getUTCFullYear()!==years[0])years.push(b.getUTCFullYear());
    function get(cc){return Promise.all(years.map(function(y){return fetch("https://date.nager.at/api/v3/PublicHolidays/"+y+"/"+cc).then(function(r){if(!r.ok||r.status===204)throw 0;return r.json()})})).then(function(x){return [].concat.apply([],x)})}
    var p=get(dest.holidayCountry);
    if(dest.holidayFallback) p=p.catch(function(){return get(dest.holidayFallback)});
    return p.then(function(list){
      var hits=list.filter(function(h){var d=parse(h.date);return d>=a&&d<=b});
      var seen={};hits=hits.filter(function(h){var k=h.date+h.name;if(seen[k])return false;seen[k]=1;return true});
      if(!hits.length) return card("Local holidays","low",'<p>No public holidays fall during your dates.</p>',"None");
      var body='<p>'+hits.map(function(h){return '<b>'+esc(fmt(parse(h.date)))+'</b>: '+esc(h.localName===h.name?h.name:h.name+' ('+h.localName+')')}).join('<br>')+'</p><p>Expect busier beaches and restaurants, and some local businesses may close.</p>';
      return card("Local holidays",hits.length>1?"moderate":"low",body,hits.length+(hits.length>1?" holidays":" holiday"));
    }).catch(function(){return card("Local holidays","info",'<p>Holiday data isn\'t available for this destination yet. I can check for you.</p>',"—")});
  }

  function storms(dest,ms){
    var level=worst(dest.hurricane,ms);
    var txt={low:"Outside the riskiest stretch of the season.",moderate:"Within hurricane season, but not at its peak.",high:"Peak hurricane season. Storms are more likely, so travel insurance with hurricane coverage is a must."}[level];
    if(dest.basin==="pacific") txt={low:"Hurricanes rarely affect Hawaii, especially this time of year.",moderate:"Central Pacific season is active, though direct hits on Hawaii are rare.",high:txt}[level];
    var body='<p>'+txt+' This is based on historical odds, not a forecast.</p>';
    return fetch("https://www.nhc.noaa.gov/CurrentStorms.json").then(function(r){return r.json()}).then(function(j){
      var st=(j.activeStorms||[]).filter(function(s){return dest.basin==="pacific"?/^CP|^EP/.test(s.id.toUpperCase()):/^AL/.test(s.id.toUpperCase())});
      body+=st.length?'<p><b>Active right now:</b> '+st.map(function(s){return esc(s.classification+" "+s.name)}).join(", ")+'. <a href="https://www.nhc.noaa.gov/" target="_blank" rel="noopener">See NHC</a></p>':'<p>No active storms in this basin right now.</p>';
      return card("Hurricane risk",level,body);
    }).catch(function(){return card("Hurricane risk",level,body+'<p><a href="https://www.nhc.noaa.gov/" target="_blank" rel="noopener">Live storm tracker (NHC)</a></p>')});
  }

  function sargassum(dest,a,ms){
    var S=DATA.sargassum;
    if(!dest.sargassumRegion) return card("Sargassum","low",'<p>Sargassum isn\'t a concern here.</p>',"Not a factor");
    var r=S.regions[dest.sargassumRegion],seas=worst(S.seasonal,ms),soon=(a-new Date())/864e5<=60,level=soon?r.rating:seas;
    var bd=parse(S.bulletinDate);
    var body=soon?'<p><b>Current outlook ('+esc(r.label)+'):</b> '+esc(r.note)+' Trend: '+esc(r.trend)+'.</p>'
      :'<p>Your trip is more than two months out, so this rating uses the <b>typical pattern</b> for '+esc(MONTHS[ms[0]])+'. Seaweed usually peaks May to August and is lowest November to February.</p><p><b>Today\'s outlook ('+esc(r.label)+'):</b> '+esc(r.note)+'</p>';
    body+='<p class="credit">Sargassum data courtesy of the Optical Oceanography Lab, USF College of Marine Science, used with permission. Ratings are general regional outlooks, not beach-specific forecasts. <a href="'+esc(S.bulletinUrl)+'" target="_blank" rel="noopener">See the full outlook</a> (published '+esc(fmt(bd))+').</p>';
    return Promise.resolve(card("Sargassum",level,body,(soon?"":"Typically ")+LABEL[level]));
  }

  function crowds(dest,ms){
    var level=worst(dest.crowds,ms);
    var txt={low:"Quieter season. Better availability and often better rates.",moderate:"Moderately busy. Book good rooms a few months ahead.",high:"Peak travel time. Popular resorts and upgraded rooms sell out early, so book well ahead."}[level];
    return Promise.resolve(card("Crowds",level,'<p>'+txt+'</p>'));
  }

  $("gtc-go").addEventListener("click",function(){
    $("gtc-err").textContent="";
    if(!DATA){$("gtc-err").textContent="Still loading. Try again in a second.";return}
    var dest=DATA.destinations.filter(function(d){return d.id===$("gtc-dest").value})[0];
    if(!$("gtc-start").value||!$("gtc-end").value){$("gtc-err").textContent="Please choose both dates.";return}
    var a=parse($("gtc-start").value),b=parse($("gtc-end").value);
    if(b<=a){$("gtc-err").textContent="Please pick a departure date after your arrival date.";return}
    var ms=months(a,b),out=$("gtc-results");
    out.className="results show";
    out.innerHTML='<p class="sub">Checking your dates…</p>';
    Promise.all([sargassum(dest,a,ms),storms(dest,ms),weather(dest,a,b),holidays(dest,a,b),crowds(dest,ms)]).then(function(cards){
      var nights=Math.round((b-a)/864e5);
      out.innerHTML='<div class="head"><h3>'+esc(dest.name)+'</h3><span class="dates">'+esc(fmt(a))+' – '+esc(fmt(b))+' · '+nights+' night'+(nights===1?'':'s')+'</span></div>'
        +'<div class="grid">'+cards.join("")+card("Your hotel","info",'<p>Renovations, construction and closed restaurants don\'t show up in any database. I check those directly with hotels before my clients book.</p>',"Ask me")+'</div>'
        +(dest.note?'<div class="note"><b>Advisor tip:</b> '+esc(dest.note)+'</div>':'')
        +'<div class="cta"><p>Want me to check your specific hotel and find one with perks like breakfast, resort credits and upgrades? There\'s no planning fee.</p><a href="'+INTAKE+'" target="_blank" rel="noopener">Plan my trip</a></div>'
        +'<p class="fine">General guidance only, not a guarantee. Ratings are by region and season and can\'t predict conditions on a specific beach or day. Data last updated '+esc(fmt(parse(DATA.updated)))+'. Weather by Open-Meteo · Holidays by Nager.Date · Storms by NOAA NHC.</p>';
    });
  });
})();

    }
  }
  customElements.define("good-time-page", GoodTimePage);
})();
