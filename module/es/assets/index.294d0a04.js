(function(){
  const r=document.createElement("link").relList;
  if(r&&r.supports&&r.supports("modulepreload"))return;
  for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);
  new MutationObserver(
    e=>{
      for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});
      function i(e){const o={};
      return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const l=t=>String(t),c="hello world",u=[1,2,3],f={age:20,name:"TinssonTai"},d=()=>{console.log(c),console.log(f),console.log(...u.map(t=>l(t)))};d();
