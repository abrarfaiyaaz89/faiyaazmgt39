/* MGT-39 app link for the Faiyaaz MGT 39 website.
   1) Adds an "App" link in your navigation, cloned from your existing About link so it matches your style.
   2) Adds a small "Get the app" button (dismissible). Both open app.html. */
(function(){
  var PAGE="app.html";
  var st=document.createElement("style");
  st.textContent=".mgt39-pill{position:fixed;right:14px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:60;display:flex;align-items:center;gap:6px;background:linear-gradient(135deg,#6d5dfc,#8b7dff);color:#fff;border-radius:99px;padding:4px 4px 4px 14px;box-shadow:0 8px 24px rgba(109,93,252,.35);font:600 13.5px/1 Inter,system-ui,sans-serif;animation:mgt39in .5s .8s both}"
   +".mgt39-pill a{color:#fff;text-decoration:none;display:flex;align-items:center;gap:7px;height:34px}"
   +".mgt39-pill button{width:30px;height:30px;border:0;border-radius:50%;background:rgba(255,255,255,.18);color:#fff;font-size:13px;cursor:pointer;padding:0;line-height:1;-webkit-tap-highlight-color:transparent}"
   +"@keyframes mgt39in{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}@media (prefers-reduced-motion:reduce){.mgt39-pill{animation:none}}";
  document.head.appendChild(st);

  function nav(){
    document.querySelectorAll('a[href="#/about"]').forEach(function(a){
      var host=a.parentNode&&a.parentNode.tagName==="LI"?a.parentNode:a;
      var nx=host.nextElementSibling;
      if(!host.parentNode||(nx&&nx.getAttribute("data-mgt39")))return;
      var c=host.cloneNode(true),ca=c.tagName==="A"?c:c.querySelector("a");
      if(!ca)return;
      [c,ca].forEach(function(el){
        el.removeAttribute("aria-current");
        el.className=(el.className||"").replace(/\b(active|current|is-active|selected|on)\b/g,"").replace(/\s+/g," ").trim();
      });
      ca.setAttribute("href",PAGE);ca.removeAttribute("target");ca.textContent="App";
      c.setAttribute("data-mgt39","1");
      host.parentNode.insertBefore(c,host.nextSibling);
    });
  }
  function pill(){
    if(document.querySelector(".mgt39-pill"))return;
    try{if(sessionStorage.getItem("mgt39_pill")==="x")return}catch(e){}
    var p=document.createElement("div");p.className="mgt39-pill";
    p.innerHTML='<a href="'+PAGE+'"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M11 18.5h2"/></svg>Get the app</a><button aria-label="Dismiss">\u2715</button>';
    p.querySelector("button").onclick=function(){p.remove();try{sessionStorage.setItem("mgt39_pill","x")}catch(e){}};
    document.body.appendChild(p);
  }
  var t;function run(){clearTimeout(t);t=setTimeout(function(){nav();pill()},150)}
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",run);else run();
  new MutationObserver(run).observe(document.documentElement,{childList:true,subtree:true});
  window.addEventListener("hashchange",run);
})();
