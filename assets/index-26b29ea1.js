(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const l=document.getElementById("burger-icon"),s=document.querySelector("nav"),d=document.querySelectorAll("li"),u=document.getElementById("header"),f=document.getElementById("about-me");u.addEventListener("click",()=>{a(f)});d.forEach(o=>{o.addEventListener("click",()=>{s.classList.toggle("closed-menu")})});l.addEventListener("click",()=>{s.classList.toggle("closed-menu")});function a(o){window.scrollTo({behavior:"smooth",top:o.offsetTop})}window.onload=()=>{console.log("Welcome, friend :)")};
