var P=Object.defineProperty;var G=(o,t,e)=>t in o?P(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var u=(o,t,e)=>G(o,typeof t!="symbol"?t+"":t,e);const d={TODOS:"todos",FILTER:"filter",STATE:"state",MAP_TODO:"mapTodo"},z={STATE:"all"},s={inputForm:document.querySelector("#input-form"),addButton:document.querySelector("#add-button"),filterGroup:document.getElementById("filter-group"),todos:document.querySelector("#todos"),filterCreatedButton:document.querySelector(".filter-button.created"),filterCompletedButton:document.querySelector(".filter-button.completed"),filterImportButton:document.querySelector(".filter-button.import"),filterStudyButton:document.querySelector(".filter-button.study"),filterPromiseButton:document.querySelector(".filter-button.promises")},$=class ${constructor(t){u(this,"content");u(this,"completed");u(this,"id");u(this,"label");u(this,"label_state");this.label=t.label,this.label_state=t.label_state,this.content=t.content,this.completed=!1,this.id=`todo-${++$.index}`}};u($,"index",0);let T=$;const K=o=>{o.preventDefault();const t=o.target,e=(t==null?void 0:t.elements).todo.value,c=(t==null?void 0:t.elements).todo_label.value;if(!e.trim()||!c.trim())return;t.elements.todo.value="";const r=new T({content:e,label:c});l.todos.push(r);const m=JSON.stringify(l);localStorage.setItem(d.STATE,m),v()},w=(o,t)=>{l.todos=l.todos.filter(e=>e.id!==o),localStorage.setItem(d.STATE,JSON.stringify(l)),t?F():v()},D=(o,t)=>{l.todos=l.todos.map(e=>({...e,completed:e.id===o?!e.completed:e.completed})),localStorage.setItem(d.STATE,JSON.stringify(l)),t?F():v()};let l={todos:[],mapTodo:new Map};var N,x;if(localStorage.getItem(d.STATE)){l=JSON.parse(localStorage.getItem(d.STATE)??"{}");const o=((x=(N=l.todos)==null?void 0:N.slice(-1)[0])==null?void 0:x.id.split("-")[1])||"0";T.index=Number(o)}function g(o,t){var h,q,I,O,B,k;const e=document.createDocumentFragment();let c=null;t?c=t.length:c=o.length;const r=o.filter(n=>n.completed),m=t?t.filter(n=>n.label==="중요한일").length:o.filter(n=>n.label==="중요한일").length,i=t?t.filter(n=>n.label==="공부").length:o.filter(n=>n.label==="공부").length,y=t?t.filter(n=>n.label==="약속").length:o.filter(n=>n.label==="약속").length,f=(h=s.filterCompletedButton)==null?void 0:h.querySelector(".count"),S=(q=s.filterCreatedButton)==null?void 0:q.querySelector(".count"),E=(I=s.filterImportButton)==null?void 0:I.querySelector(".count"),p=(O=s.filterStudyButton)==null?void 0:O.querySelector(".count"),b=(B=s.filterPromiseButton)==null?void 0:B.querySelector(".count");!f||!S||(f.textContent=`${r.length} / ${c}`,S.textContent=c.toString(),E.textContent=`${r.filter(n=>n.label==="중요한일").length} / ${m}`,p.textContent=`${r.filter(n=>n.label==="공부").length} / ${i}`,b.textContent=`${r.filter(n=>n.label==="약속").length} / ${y}`,o.forEach(n=>{const a=document.createElement("li"),R=`todo-item ${n.completed?"complete ":""}`;switch(a.className=R,n.label){case"중요한일":a.className+="import";break;case"공부":a.className+="study";break;case"약속":a.className+="promise";break}a.dataset.id=n.id,a.onclick=function(A){const _=A.currentTarget,J=A.target,C=_.dataset.id,L=J.closest("button"),M=L==null?void 0:L.dataset.action;if(!(!M||!C))switch(M){case"remove":return w(C);case"complete":return D(C)}},a.innerHTML=`
            <button class="complete-button ${n.completed?"completed":""}" data-action="complete">
              <i class="fa-solid fa-check"></i>
            </button>
            <span class="todo_inn_label">${n.label}</span>
            <span class="content">${n.content}</span>
            <button class="remove-button" data-action="remove">
              <i class="fa-regular fa-trash-can"></i>
            </button>
    `,e.appendChild(a)}),(k=s.todos)==null||k.appendChild(e))}function Q(o){if(!s.todos)return;if(s.todos.innerHTML="",l[d.TODOS].length===0){s.todos.innerHTML=`<li class="empty-item">
            <h2>필터된 할일이 없습니다.</h2>
          </li>`;return}switch(o){case"import":g(l.todos.filter(e=>e.label==="중요한일"),l.todos);break;case"study":g(l.todos.filter(e=>e.label==="공부"),l.todos);break;case"promis":g(l.todos.filter(e=>e.label==="약속"),l.todos);break}o??g(l.todos.filter(e=>!!e.completed),l.todos)}function v(){if(!s.todos)return;if(s.todos.innerHTML="",l.todos.length===0){s.todos.innerHTML=`<li class="empty-item">
            <h2>할일이 없습니다.</h2>
          </li>`;return}g(l.todos)}function F(o){if(!s.todos)return;if(s.todos.innerHTML="",l.todos.length===0){s.todos.innerHTML=`<li class="empty-item">
            <h2>할일이 없습니다.</h2>
          </li>`;return}if(l.todos.length>0){const e=l.todos;e.reverse(),Y(e,o)}}function Y(o,t){var c;const e=document.createDocumentFragment();o.forEach((r,m)=>{if(!t)return t=3;if(m>t)return;const i=document.createElement("li"),y=`todo-item ${r.completed?"complete ":""}`;i.className=y,i.dataset.id=r.id,i.onclick=function(f){const S=f.currentTarget,E=f.target,p=S.dataset.id,b=E.closest("button"),h=b==null?void 0:b.dataset.action;if(!(!h||!p))switch(h){case"remove":return w(p,"home");case"complete":return D(p,"home")}},i.innerHTML=`
            <button class="complete-button ${r.completed?"completed":""}" data-action="complete">
              <i class="fa-solid fa-check"></i>
            </button>
            <span class="todo_inn_label">${r.label}</span>
            <span class="content">${r.content}</span>
            <button class="remove-button" data-action="remove">
              <i class="fa-regular fa-trash-can"></i>
            </button>
    `,e.appendChild(i)}),(c=s.todos)==null||c.appendChild(e)}var H;(H=s.inputForm)==null||H.addEventListener("submit",K);export{s as $,z as T,Q as a,F as h,v as r};
