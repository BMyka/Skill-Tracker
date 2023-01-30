(()=>{"use strict";const e=[];function t(e,t,n){this.name=e,this.unit=t,this.total=n,this.startTimes=[],this.endTimes=[],this.startTimer=function(){this.startTimes.push(new Date)},this.endTimer=function(){this.endTimes.push(new Date)}}const n=e;function d(n,d,i){const c=new t(n,d,i);e.push(c),a()}function i(e){const t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.setAttribute("height","48"),t.setAttribute("width","48"),t.setAttribute("class","goBack");const n=document.createElementNS("http://www.w3.org/2000/svg","path");n.setAttribute("d","M24 40 8 24 24 8l2.1 2.1-12.4 12.4H40v3H13.7l12.4 12.4Z"),t.appendChild(n),e.appendChild(t),document.querySelector(".goBack").addEventListener("click",(e=>{e.stopPropagation(),a()}))}function a(){const e=document.querySelector("#content");e.textContent="";const t=document.createElement("div");t.classList.add("header"),t.innerHTML="Skills",e.appendChild(t);const a=document.createElement("div");a.classList.add("main"),e.appendChild(a);const c=document.createElement("button");c.classList.add("addNew"),c.innerHTML="+",a.appendChild(c),document.querySelector(".addNew").addEventListener("click",(e=>{e.stopPropagation(),function(){let e=document.querySelector(".header");e.textContent="Add a skill";let t=document.querySelector(".main");t.textContent="",i(e);const n=document.createElement("form");n.setAttribute("action","");const a=document.createElement("input");a.setAttribute("type","text"),a.setAttribute("placeholder","Name"),a.setAttribute("required",""),n.appendChild(a);const c=document.createElement("div");c.setAttribute("class","input-container");const l=document.createElement("label");l.setAttribute("for","unit-select");const s=document.createTextNode("Measurement Unit:");l.appendChild(s),c.appendChild(l);const o=document.createElement("select");o.setAttribute("id","unit-select"),o.setAttribute("name","unit-select");const r=document.createElement("option");r.setAttribute("value","hours");const u=document.createTextNode("Hours");r.appendChild(u),o.appendChild(r);const m=document.createElement("option");m.setAttribute("value","kilometers");const p=document.createTextNode("Kilometers");m.appendChild(p),o.appendChild(m);const h=document.createElement("option");h.setAttribute("value","times");const C=document.createTextNode("Times");h.appendChild(C),o.appendChild(h),c.appendChild(o),n.appendChild(c);const b=document.createElement("input");b.setAttribute("type","number"),b.setAttribute("placeholder","Total number of hours of practice"),b.setAttribute("required",""),b.setAttribute("min","0"),n.appendChild(b);const v=document.createElement("button");v.setAttribute("class","submit");const E=document.createTextNode("Save");v.appendChild(E),n.appendChild(v),t.appendChild(n),document.querySelector(".submit").addEventListener("click",(e=>{e.preventDefault(),d(n.querySelector("input[placeholder='Name']").value,n.querySelector("select#unit-select").value,n.querySelector("input[placeholder='Total number of hours of practice']").value)}))}()})),function(e){const t=document.querySelector(".main");let n=0;e.forEach((function(e){const d=document.createElement("div");d.classList.add("skill"),d.classList.add("skill-"+n.toString()),t.appendChild(d);const a=document.createElement("h3");a.innerHTML=e.name,d.appendChild(a);const c=document.createElement("div");c.classList.add("group"),d.appendChild(c);const l=document.createElement("p");l.innerHTML=`${e.total} ${e.unit}`,c.appendChild(l);const s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.setAttribute("height","48"),s.setAttribute("width","48"),c.appendChild(s);const o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("d","M20 34V14l10 10Z"),s.appendChild(o),function(e,t){document.querySelector(".skill-"+t.toString()).addEventListener("click",(t=>{t.stopPropagation(),function(e){let t=document.querySelector(".header");t.textContent=e.name,i(t);let n=document.querySelector(".main");n.classList.add("mainIndividualSkill"),n.innerHTML="";let d=document.createElement("div");d.classList.add("timer");let a=document.createElement("div");a.classList.add("timeTracker");let c=document.createElement("div");c.classList.add("last7Days"),c.innerHTML="\n      <p>Last 7 days</p>\n      <h4>24h 48m</h4>\n    ";let l=document.createElement("div");l.classList.add("totalTime"),l.innerHTML="\n      <p>Total time</p>\n      <h4>110h 42m</h4>\n    ";let s=document.createElement("button");s.classList.add("startTimer"),s.textContent="Start timer";let o=document.createElement("button");o.classList.add("stopTimer"),o.textContent="Stop timer";let r=document.createElement("button");r.classList.add("addTimeManually"),r.textContent="Add time manually";let u=document.createElement("div");u.classList.add("liveTimer"),u.innerHTML='\n      <h4>Tracking</h4>\n      <h4 class="timerValue">00:00</h4>\n    ';let m=document.createElement("div");m.classList.add("goalProgress"),m.innerHTML='\n      <h4>Daily goal: 2h 2m / 8h</h4>\n      <div class="progressBar">\n        -----------------============================\n      </div>\n    ';let p=document.createElement("div");p.classList.add("statistics");let h=document.createElement("div");h.classList.add("timePick"),h.innerHTML="\n      <button>Days</button><button>Weeks</button><button>Months</button><button>Years</button>\n    ";let C=document.createElement("div");C.classList.add("chart"),a.appendChild(c),a.appendChild(l),d.appendChild(a),d.appendChild(s),d.appendChild(o),d.appendChild(r),d.appendChild(u),d.appendChild(m),p.appendChild(h),p.appendChild(C),n.appendChild(d),n.appendChild(p);let b,v=document.querySelector(".startTimer"),E=document.querySelector(".stopTimer"),T=document.querySelector(".timerValue"),L=0;v.addEventListener("click",(function(){v.style.display="none",E.style.display="block",e.startTimer(),b=setInterval((function(){L++;let e=`${Math.floor(L/60)}:${(L%60).toString().padStart(2,"0")}`;T.textContent=e}),1e3)})),E.addEventListener("click",(function(){v.style.display="block",E.style.display="none",e.endTimer(),clearInterval(b)}))}(e)}))}(e,n),n++}))}(n)}d("The Odin Project","hours",110),console.log("lolll"),a()})();