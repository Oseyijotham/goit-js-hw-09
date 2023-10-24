const e=document.querySelectorAll("button")[0],t=document.querySelectorAll("button")[1];let l;e.addEventListener("click",(()=>{l=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e.disabled=!0})),t.addEventListener("click",(()=>{e.disabled=!1,clearInterval(l)}));
//# sourceMappingURL=01-color-switcher.b60589fd.js.map
