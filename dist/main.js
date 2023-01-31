(()=>{"use strict";const e=[];function t(e,t,n){this.name=e,this.unit=t,this.total=n,this.startTimes=[],this.endTimes=[],this.timeDurations=[],this.startTimer=()=>{this.startTimes.push(new Date)},this.endTimer=()=>{this.endTimes.push(new Date)},this.getDuration=()=>{let e=this.startTimes[this.startTimes.length-1].getTime(),t=this.endTimes[this.endTimes.length-1].getTime();this.timeDurations.push((t-e)/1e3)},this.getTotal=function(){let e=0;return this.timeDurations.length&&(e=this.timeDurations.reduce(((e,t)=>e+t))),this.total+e}}const n=e;function i(n,i,d){const l=new t(n,i,d);e.push(l),a()}function d(e){const t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.setAttribute("height","48"),t.setAttribute("width","48"),t.setAttribute("class","goBack");const n=document.createElementNS("http://www.w3.org/2000/svg","path");n.setAttribute("d","M24 40 8 24 24 8l2.1 2.1-12.4 12.4H40v3H13.7l12.4 12.4Z"),t.appendChild(n),e.appendChild(t),document.querySelector(".goBack").addEventListener("click",(e=>{e.stopPropagation(),a()}))}function a(){const e=document.querySelector("#content");e.textContent="";const t=document.createElement("div");t.classList.add("header"),t.innerHTML="Skills",e.appendChild(t);const a=document.createElement("div");a.classList.add("main"),e.appendChild(a);const l=document.createElement("button");l.classList.add("addNew"),l.innerHTML="+",a.appendChild(l),document.querySelector(".addNew").addEventListener("click",(e=>{e.stopPropagation(),function(){let e=document.querySelector(".header");e.textContent="Add a skill";let t=document.querySelector(".main");t.textContent="",d(e);const n=document.createElement("form");n.setAttribute("action","");const a=document.createElement("input");a.setAttribute("type","text"),a.setAttribute("placeholder","Name"),a.setAttribute("required",""),n.appendChild(a);const l=document.createElement("div");l.setAttribute("class","input-container");const s=document.createElement("label");s.setAttribute("for","unit-select");const o=document.createTextNode("Measurement Unit:");s.appendChild(o),l.appendChild(s);const c=document.createElement("select");c.setAttribute("id","unit-select"),c.setAttribute("name","unit-select");const r=document.createElement("option");r.setAttribute("value","hours");const u=document.createTextNode("Hours");r.appendChild(u),c.appendChild(r);const m=document.createElement("option");m.setAttribute("value","kilometers");const p=document.createTextNode("Kilometers");m.appendChild(p),c.appendChild(m);const h=document.createElement("option");h.setAttribute("value","times");const T=document.createTextNode("Times");h.appendChild(T),c.appendChild(h),l.appendChild(c),n.appendChild(l);const C=document.createElement("input");C.setAttribute("type","number"),C.setAttribute("placeholder","Total number of hours of practice"),C.setAttribute("required",""),C.setAttribute("min","0"),n.appendChild(C);const b=document.createElement("button");b.setAttribute("class","submit");const v=document.createTextNode("Save");b.appendChild(v),n.appendChild(b),t.appendChild(n),document.querySelector(".submit").addEventListener("click",(e=>{e.preventDefault(),i(n.querySelector("input[placeholder='Name']").value,n.querySelector("select#unit-select").value,n.querySelector("input[placeholder='Total number of hours of practice']").value)}))}()})),function(e){const t=document.querySelector(".main");let n=0;e.forEach((function(e){const i=document.createElement("div");i.classList.add("skill"),i.classList.add("skill-"+n.toString()),t.appendChild(i);const a=document.createElement("h3");a.innerHTML=e.name,i.appendChild(a);const l=document.createElement("div");l.classList.add("group"),i.appendChild(l);const s=document.createElement("p");s.innerHTML=`${e.getTotal()} ${e.unit}`,l.appendChild(s);const o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.setAttribute("height","48"),o.setAttribute("width","48"),l.appendChild(o);const c=document.createElementNS("http://www.w3.org/2000/svg","path");c.setAttribute("d","M20 34V14l10 10Z"),o.appendChild(c),function(e,t){document.querySelector(".skill-"+t.toString()).addEventListener("click",(t=>{t.stopPropagation(),function(e){let t=document.querySelector(".header");t.textContent=e.name,d(t);let n=document.querySelector(".main");n.classList.add("mainIndividualSkill"),n.innerHTML="";let i=document.createElement("div");i.classList.add("timer");let a=document.createElement("div");a.classList.add("timeTracker");let l=document.createElement("div");l.classList.add("last7Days"),l.innerHTML="\n      <p>Last 7 days</p>\n      <h4>24h 48m</h4>\n    ";let s=document.createElement("div");s.classList.add("totalTime");let o=document.createElement("p");o.innerHTML="Total time";let c=document.createElement("h4");c.className="totalTimeValue",c.innerHTML=e.getTotal(),s.appendChild(o),s.appendChild(c);let r=document.createElement("button");r.classList.add("startTimer"),r.textContent="Start timer";let u=document.createElement("button");u.classList.add("stopTimer"),u.textContent="Stop timer";let m=document.createElement("button");m.classList.add("addTimeManually"),m.textContent="Add time manually";let p=document.createElement("div");p.classList.add("liveTimer"),p.innerHTML='\n      <h4>Tracking</h4>\n      <h4 class="timerValue">00:00</h4>\n    ';let h=document.createElement("div");h.classList.add("goalProgress"),h.innerHTML='\n      <h4>Daily goal: 2h 2m / 8h</h4>\n      <div class="progressBar">\n        -----------------============================\n      </div>\n    ';let T=document.createElement("div");T.classList.add("statistics");let C=document.createElement("div");C.classList.add("timePick"),C.innerHTML="\n      <button>Days</button><button>Weeks</button><button>Months</button><button>Years</button>\n    ";let b=document.createElement("div");b.classList.add("chart"),a.appendChild(l),a.appendChild(s),i.appendChild(a),i.appendChild(r),i.appendChild(u),i.appendChild(m),i.appendChild(p),i.appendChild(h),T.appendChild(C),T.appendChild(b),n.appendChild(i),n.appendChild(T);let v,E=document.querySelector(".startTimer"),g=document.querySelector(".stopTimer"),L=document.querySelector(".timerValue"),y=0;E.addEventListener("click",(function(){E.style.display="none",g.style.display="block",e.startTimer(),v=setInterval((function(){y++;let e=`${Math.floor(y/60)}:${(y%60).toString().padStart(2,"0")}`;L.textContent=e}),1e3)})),g.addEventListener("click",(function(){var t;E.style.display="block",g.style.display="none",e.endTimer(),e.getDuration(),t=e.getTotal(),console.log("ok"),document.querySelector(".totalTimeValue").textContent=t,clearInterval(v)}))}(e)}))}(e,n),n++}))}(n)}i("The Odin Project","hours",110),console.log("lolll"),a()})();