(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function l(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=l(t);fetch(t.href,i)}})();let d=document.querySelector("canvas"),a=d.getContext("2d");function p(r,e){let l=new Array(r),o=0;for(;o<l.length;)l[o]=new Array(e),o++;return l}let f,n=5,s,c,h=5;function m(){s=d.width/n,c=d.height/n,f=p(s,c);for(let r=0;r<s;r++)for(let e=0;e<c;e++)f[r][e]=Math.floor(Math.random()*2)}m();function g(){for(let r=0;r<s;r++)for(let e=0;e<c;e++)if(f[r][e]==1){let l=r*n,o=e*n;a.fillStyle="#000000",a.fillRect(l,o,n-1,n-1)}else{let l=r*n,o=e*n;a.fillStyle="#0b5338",a.fillRect(l,o,n,n)}}setInterval(()=>{let r=p(s,c);for(let e=0;e<s;e++)for(let l=0;l<c;l++){let o=f[e][l],t=w(f,e,l);o==0&&t==3?r[e][l]=1:o==1&&(t<2||t>3)?r[e][l]=0:r[e][l]=o}f=r,g()},h);function w(r,e,l){let o=0;for(let t=-1;t<2;t++)for(let i=-1;i<2;i++){let u=(e+t+s)%s,y=(l+i+c)%c;o+=r[u][y]}return o-=r[e][l],o}