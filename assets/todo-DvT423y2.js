import"./main-B3jpmAP_.js";import{r as n,$ as f,T as a,a as d}from"./todos-Bc_gTOjG.js";(()=>{var r;n(),(r=f.filterGroup)==null||r.addEventListener("click",s=>{var i,o;const c=s.target,e=c.closest("button");if(e){const T=c.dataset.action;a.STATE=T,console.log(a.STATE),(o=(i=s.currentTarget)==null?void 0:i.querySelectorAll("button"))==null||o.forEach(t=>{var l;t.classList.contains("active")&&((l=t==null?void 0:t.classList)==null||l.remove("active"))}),e==null||e.classList.add("active")}switch(e==null?void 0:e.dataset.action){case"completed":return d();case"created":return n();default:return d(a.STATE)}})})();
