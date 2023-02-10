(()=>{"use strict";const e=[];function t(e,t,n){this.name=e,this.unit=t,this.total=n||0,this.startTimes=[],this.endTimes=[],this.timeDurations=[],this.startTimer=()=>{this.startTimes.push(new Date)},this.endTimer=()=>{this.endTimes.push(new Date)},this.getDuration=()=>{console.log("lol");let e=this.startTimes[this.startTimes.length-1].getTime(),t=this.endTimes[this.endTimes.length-1].getTime();this.timeDurations.push((t-e)/1e3),console.log(this.timeDurations[this.timeDurations.length-1])},this.pushUnitValue=e=>{this.timeDurations.push(e)},this.getEndTimeFromDuration=e=>{let t=this.startTimes[this.startTimes.length-1],n=new Date(t.getTime()+6e4*e);this.endTimes.push(n)},this.getTotal=function(){let e=0;return this.timeDurations.length&&(e=this.timeDurations.reduce(((e,t)=>e+t))),Number(this.total)+e},this.getTotalPastWeek=function(){let e=0,t=(new Date).getTime()-6048e5;if(this.timeDurations.length)for(let n=0;n<this.startTimes.length;n++)this.startTimes[n].getTime()>=t&&(e+=this.timeDurations[n],console.log("TEST"),console.log(this.timeDurations[n]));return Number(this.total)+e},this.getTotalForDate=function(e){let t=0,n=e.getTime(),a=n-864e5;if(this.timeDurations.length)for(let e=0;e<this.startTimes.length;e++){let i=this.startTimes[e].getTime();i>=a&&i<n&&(t+=this.timeDurations[e])}return"hours"===this.unit?(t/3600).toFixed(2):t}}const n=e;function a(n,a,i){"hours"==a&&(i=60*i*60);const l=new t(n,a,i);e.push(l),p()}function i(e){const t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.setAttribute("height","48"),t.setAttribute("width","48"),t.setAttribute("class","goBack");const n=document.createElementNS("http://www.w3.org/2000/svg","path");n.setAttribute("d","M24 40 8 24 24 8l2.1 2.1-12.4 12.4H40v3H13.7l12.4 12.4Z"),t.appendChild(n),e.appendChild(t),document.querySelector(".goBack").addEventListener("click",(e=>{e.stopPropagation(),p()}))}function l(e){const t=document.createElement("div");t.classList.add("time-picker"),t.setAttribute("data-time","00:00"),t.style.display="none";const n=document.createElement("div");n.classList.add("time-picker-header"),"times"==e.unit?n.textContent="Add times":"hours"==e.unit?n.textContent="Add time":"kilometers"==e.unit&&(n.textContent="Add km"),t.appendChild(n);const a=document.createElement("div");a.classList.add("time-picker-main"),t.appendChild(a);const i=document.createElement("div");i.classList.add("hour"),a.appendChild(i);const l=document.createElement("div");l.classList.add("hr-up"),i.appendChild(l);const o=document.createElement("input");o.setAttribute("type","number"),o.classList.add("hr"),o.setAttribute("value","00"),i.appendChild(o);const d=document.createElement("div");if(d.classList.add("hr-down"),i.appendChild(d),"hours"==e.unit){const e=document.createElement("div");e.classList.add("separator"),e.textContent=":",a.appendChild(e);const t=document.createElement("div");t.classList.add("minute"),a.appendChild(t);const n=document.createElement("div");n.classList.add("min-up"),t.appendChild(n);const i=document.createElement("input");i.setAttribute("type","number"),i.classList.add("min"),i.setAttribute("value","00"),t.appendChild(i);const l=document.createElement("div");l.classList.add("min-down"),t.appendChild(l)}const s=document.createElement("div");s.classList.add("time-picker-buttons"),t.appendChild(s);const r=document.createElement("button");r.classList.add("cancel"),r.textContent="Cancel",s.appendChild(r);const c=document.createElement("button");return c.classList.add("continue"),c.textContent="Ok",s.appendChild(c),t}function o(e,t){let n=document.querySelector(".animated-progress span");n.setAttribute("data-progress",`${e}`),n.style.width=`${e}%`,n.textContent=`${e}%`;let a=document.querySelector(".goalProgress").querySelector("h4");"hours"===t.unit?a.textContent=`Weekly goal: ${(t.getTotalPastWeek()/3600).toFixed(0)} / 40 ${t.unit}`:a.textContent=`Weekly goal: ${t.getTotalPastWeek()} / 40 ${t.unit}`}function d(e,t,n){let a;a="kilometers"===n?"km":n,document.querySelector(".totalTimeValue").textContent=`${e} ${a}`,document.querySelector(".weekTimeValue").textContent=`${t} ${a}`}function s(e,t){document.querySelector(".totalTimeValue").textContent=r(e),document.querySelector(".weekTimeValue").textContent=r(t)}function r(e){let t=Math.floor(e/3600),n=Math.floor(e%3600/60),a=Math.floor(e%60);return t?`${t}h ${n}m`:`${n}m ${a}s`}function c(e){let t=[],n=[],a=864e5;for(let i=1;i<8;i++){let l=new Date;a=864e5*(7-i),l.setTime(l.getTime()-a),t.push(e.getTotalForDate(l)),n.push(l.toLocaleDateString("default",{month:"short",day:"numeric"}))}return{past7Days:t,days:n}}a("The Odin Project","hours",110),a("Running","kilometers",10),e[1].startTimes[0]=new Date((new Date).getTime()-18144e5),e[1].endTimes[0]=new Date((new Date).getTime()-18144e5),e[1].pushUnitValue(5),e[0].startTimes[0]=new Date((new Date).getTime()-18144e5),e[0].endTimes[0]=new Date((new Date).getTime()-12096e5),e[0].getDuration(),e[0].startTimes[1]=new Date((new Date).getTime()-5184e5),e[0].endTimes[1]=new Date((new Date).getTime()-509760000.0000001),e[0].getDuration(),e[0].startTimes[2]=new Date((new Date).getTime()-864e5),e[0].endTimes[2]=new Date((new Date).getTime()-7344e4),e[0].getDuration();let u=0;function m(e,t){u>0&&window.myChart.destroy(),u++;var n,a=document.getElementById("myChart").getContext("2d");window.myChart=new Chart(a,{type:"bar",data:{labels:t.days,datasets:[{label:`${n=e.unit,n.charAt(0).toUpperCase()+n.slice(1)}`,data:t.past7Days,backgroundColor:["#ffc51f","#ffc51f","#ffc51f","#ffc51f","#ffc51f","#ffc51f","#ffc51f"]}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})}function p(){const e=document.querySelector("#content");e.textContent="";const t=document.createElement("div");t.classList.add("header"),t.innerHTML="Skills",e.appendChild(t);const u=document.createElement("div");u.classList.add("main"),e.appendChild(u);const p=document.createElement("button");p.classList.add("addNew"),p.innerHTML="+",u.appendChild(p),document.querySelector(".addNew").addEventListener("click",(e=>{e.stopPropagation(),function(){let e=document.querySelector(".header");e.textContent="Add a skill";let t=document.querySelector(".main");t.textContent="",i(e);const n=document.createElement("form");n.setAttribute("action","");const l=document.createElement("input");l.setAttribute("type","text"),l.setAttribute("placeholder","Name"),l.setAttribute("required",""),n.appendChild(l);const o=document.createElement("div");o.setAttribute("class","input-container");const d=document.createElement("label");d.setAttribute("for","unit-select");const s=document.createTextNode("Measurement Unit:");d.appendChild(s),o.appendChild(d);const r=document.createElement("select");r.setAttribute("id","unit-select"),r.setAttribute("name","unit-select");const c=document.createElement("option");c.setAttribute("value","hours");const u=document.createTextNode("Hours");c.appendChild(u),r.appendChild(c);const m=document.createElement("option");m.setAttribute("value","kilometers");const p=document.createTextNode("Kilometers");m.appendChild(p),r.appendChild(m);const h=document.createElement("option");h.setAttribute("value","times");const g=document.createTextNode("Times");h.appendChild(g),r.appendChild(h),o.appendChild(r),n.appendChild(o);const v=document.createElement("input");v.setAttribute("class","skillType"),v.setAttribute("type","number"),v.setAttribute("placeholder","Total number of hours of practice"),v.setAttribute("required",""),v.setAttribute("min","0"),n.appendChild(v);const T=document.createElement("button");T.setAttribute("class","submit");const C=document.createTextNode("Save");T.appendChild(C),n.appendChild(T),t.appendChild(n),n.querySelector("select#unit-select").addEventListener("change",(function(){const e=this.value;"times"===e?v.setAttribute("placeholder","Total number of times"):"hours"===e?v.setAttribute("placeholder","Total number of hours of practice"):"kilometers"===e&&v.setAttribute("placeholder","Total number of kilometers")})),document.querySelector(".submit").addEventListener("click",(e=>{e.preventDefault();let t=n.querySelector("input[placeholder='Name']").value,i=n.querySelector("select#unit-select"),l=n.querySelector(".skillType").value;a(t,i.value,l)}))}()})),function(e){const t=document.querySelector(".main");let n=0;e.forEach((function(e){const a=document.createElement("div");a.classList.add("skill"),a.classList.add("skill-"+n.toString()),t.appendChild(a);const u=document.createElement("h3");u.innerHTML=e.name,a.appendChild(u);const p=document.createElement("div");p.classList.add("group"),a.appendChild(p);const h=document.createElement("p");console.log(e.unit),"hours"==e.unit&&(h.innerHTML=`${r(e.getTotal())}`),"kilometers"==e.unit&&(h.innerHTML=`${e.getTotal()} km`),"times"==e.unit&&(h.innerHTML=`${e.getTotal()} times`),p.appendChild(h);const g=document.createElementNS("http://www.w3.org/2000/svg","svg");g.setAttribute("height","48"),g.setAttribute("width","48"),p.appendChild(g);const v=document.createElementNS("http://www.w3.org/2000/svg","path");v.setAttribute("d","M20 34V14l10 10Z"),g.appendChild(v),function(e,t){document.querySelector(".skill-"+t.toString()).addEventListener("click",(t=>{t.stopPropagation(),"hours"==e.unit?function(e){let t=document.querySelector(".header");t.textContent=e.name,i(t);let n=document.querySelector(".main");n.classList.add("mainIndividualSkill"),n.innerHTML="";let a=document.createElement("div");a.classList.add("timer");let u=document.createElement("div");u.classList.add("timeTracker");let p=document.createElement("div");p.classList.add("last7Days");let h=document.createElement("p");h.textContent="Last 7 days";let g=document.createElement("h4");g.classList.add("weekTimeValue"),g.textContent=r(e.getTotalPastWeek()),p.appendChild(h),p.appendChild(g);let v=document.createElement("div");v.classList.add("totalTime");let T=document.createElement("p");T.textContent="Total time";let C=document.createElement("h4");C.className="totalTimeValue",C.textContent=r(e.getTotal()),v.appendChild(T),v.appendChild(C);let y=document.createElement("button");y.classList.add("startTimer"),y.textContent="Start timer";let E=document.createElement("button");E.classList.add("stopTimer"),E.textContent="Stop timer";let k=document.createElement("button");k.classList.add("addTimeManually"),k.textContent="Add time manually";let b=document.createElement("div");b.classList.add("liveTimer"),b.innerHTML='\n      <h4>Tracking</h4>\n      <h4 class="timerValue">00:00</h4>\n    ';let f=document.createElement("div");f.classList.add("goalProgress");let L=document.createElement("h4");L.textContent=`Weekly goal: ${(e.getTotalPastWeek()/3600).toFixed(0)} / 40 ${e.unit}`,f.appendChild(L);let S=document.createElement("div");S.classList.add("animated-progress","progress-yellow");let w=document.createElement("span"),q=Number(e.getTotalPastWeek())/3600*100/40;q>100&&(q=100),w.setAttribute("data-progress",`${q}`),S.appendChild(w),f.appendChild(S);let x=document.createElement("div");x.classList.add("statistics");let D=document.createElement("div");D.classList.add("timePick"),D.innerHTML="\n      <button>Days</button><button>Weeks</button><button>Months</button><button>Years</button>\n    ";let A=document.createElement("canvas");A.id="myChart",u.appendChild(p),u.appendChild(v),a.appendChild(u),a.appendChild(y),a.appendChild(E),a.appendChild(k),a.appendChild(b),a.appendChild(f),a.appendChild(l(e)),x.appendChild(D),x.appendChild(A),n.appendChild(a),n.appendChild(x),w=document.querySelector(".animated-progress span"),w.style.width=`${w.getAttribute("data-progress")}%`,w.textContent=`${w.getAttribute("data-progress")}%`,function(){const e=document.querySelector(".time-picker"),t=document.querySelector(".time-picker .hour .hr"),n=document.querySelector(".time-picker .minute .min"),a=document.querySelector(".time-picker .hour .hr-up"),i=document.querySelector(".time-picker .hour .hr-down"),l=document.querySelector(".time-picker .minute .min-up"),o=document.querySelector(".time-picker .minute .min-down");new Date;let d,s,r,c,u=0,m=0;function p(){t.value=h(u),n.value=h(m),e.dataset.time=`${h(u)}h ${h(m)}m`}function h(e){return e<10&&(e="0"+e),e}p(),a.addEventListener("click",(function(){u++,u>9999&&(u=9999),p()})),a.addEventListener("mousedown",(function(){d=setInterval((()=>{u++,u>9999&&(u=9999),p()}),200)})),i.addEventListener("click",(function(){u--,u<0&&(u=0),p()})),i.addEventListener("mousedown",(function(){s=setInterval((()=>{u--,u<0&&(u=0),p()}),200)})),l.addEventListener("click",(function(){m++,m>59&&(m=0,u<9999&&u++),p()})),l.addEventListener("mousedown",(function(){r=setInterval((()=>{m++,m>59&&(m=0,u<9999&&u++),p()}),100)})),o.addEventListener("click",(function(){m--,m<0&&(m=59,u>0&&u--),p()})),o.addEventListener("mousedown",(function(){c=setInterval((()=>{m--,m<0&&(m=59,u>0&&u--),p()}),100)})),t.addEventListener("change",(function(e){e.target.value>9999?e.target.value=9999:e.target.value<0&&(e.target.value="00"),""==e.target.value&&(e.target.value=h(u)),u=e.target.value})),n.addEventListener("change",(function(e){e.target.value>59?e.target.value=59:e.target.value<0&&(e.target.value="00"),""==e.target.value&&(e.target.value=h(m)),m=e.target.value})),document.addEventListener("mouseup",(()=>{clearInterval(d),clearInterval(s),clearInterval(r),clearInterval(c)}))}(),function(e){let t=document.querySelector(".time-picker");document.querySelector(".continue").addEventListener("click",(n=>{let a=document.querySelector(".hr"),i=document.querySelector(".min");e.startTimer(),e.getEndTimeFromDuration(60*Number(a.value)+Number(i.value)),e.getDuration(),"hours"==e.unit?s(e.getTotal(),e.getTotalPastWeek()):d(e.getTotal(),e.getTotalPastWeek()),a.value="00",i.value="00",t.style.display="none";let l=Number(e.getTotalPastWeek())/3600*100/40;l>100&&(l=100),o(l.toFixed(1),e),console.log("lmaoooooooooooo"),m(e,c(e))})),document.querySelector(".cancel").addEventListener("click",(e=>{let n=document.querySelector(".hr"),a=document.querySelector(".min");n.value="00",a.value="00",t.style.display="none"})),document.querySelector(".addTimeManually").addEventListener("click",(e=>{t.style.display="block"}))}(e);let $,P=document.querySelector(".startTimer"),N=document.querySelector(".stopTimer"),M=document.querySelector(".liveTimer"),W=document.querySelector(".timerValue"),I=0;P.addEventListener("click",(function(){P.style.display="none",N.style.display="block",M.style.display="flex",e.startTimer(),$=setInterval((function(){I++;let e=`${Math.floor(I/60)}:${(I%60).toString().padStart(2,"0")}`;W.textContent=e}),1e3)})),N.addEventListener("click",(function(){P.style.display="block",N.style.display="none",M.style.display="none",e.endTimer(),e.getDuration(),s(e.getTotal(),e.getTotalPastWeek()),clearInterval($),W.textContent="0:00",I=0;let t=Number(e.getTotalPastWeek())/3600*100/40;t>100&&(t=100),o(t.toFixed(1),e),m(e,c(e))})),m(e,c(e))}(e):function(e){let t=document.querySelector(".header");t.textContent=e.name,i(t);let n=document.querySelector(".main");n.classList.add("mainIndividualSkill"),n.innerHTML="";let a=document.createElement("div");a.classList.add("timer");let s=document.createElement("div");s.classList.add("timeTracker");let r=document.createElement("div");r.classList.add("last7Days");let u=document.createElement("p");u.textContent="Last 7 days";let p=document.createElement("h4");p.classList.add("weekTimeValue");let h=document.createElement("div");h.classList.add("totalTime");let g=document.createElement("p"),v=document.createElement("h4");v.className="totalTimeValue";let T=document.createElement("button");T.classList.add("addTimeManually"),"kilometers"==e.unit?(p.textContent=`${e.getTotalPastWeek()} km`,g.textContent="Total kilometers",v.textContent=`${e.getTotal()} km`,T.textContent="Add kilometers"):(p.textContent=`${e.getTotalPastWeek()} times`,g.textContent="Total amount of times",v.textContent=`${e.getTotal()} times`,T.textContent="Add times"),r.appendChild(u),r.appendChild(p),h.appendChild(g),h.appendChild(v);let C=document.createElement("div");C.classList.add("goalProgress");let y=document.createElement("h4");y.textContent=`Weekly goal: ${e.getTotalPastWeek()} / 40 ${e.unit}`,C.appendChild(y);let E=document.createElement("div");E.classList.add("animated-progress","progress-yellow");let k=document.createElement("span");k.setAttribute("data-progress",""+100*e.getTotalPastWeek()/40),E.appendChild(k),C.appendChild(E);let b=document.createElement("div");b.classList.add("statistics");let f=document.createElement("div");f.classList.add("timePick"),f.innerHTML="\n      <button>Days</button><button>Weeks</button><button>Months</button><button>Years</button>\n    ";let L=document.createElement("canvas");L.id="myChart",s.appendChild(r),s.appendChild(h),a.appendChild(s),a.appendChild(T),a.appendChild(C),a.appendChild(l(e)),b.appendChild(f),b.appendChild(L),n.appendChild(a),n.appendChild(b),k=document.querySelector(".animated-progress span"),k.style.width=`${k.getAttribute("data-progress")}%`,k.textContent=`${k.getAttribute("data-progress")}%`,function(){const e=document.querySelector(".time-picker"),t=document.querySelector(".time-picker .hour .hr"),n=document.querySelector(".time-picker .hour .hr-up"),a=document.querySelector(".time-picker .hour .hr-down");new Date;let i,l,o=0;function d(){t.value=s(o),e.dataset.time=`${s(o)}h `}function s(e){return e<10&&(e="0"+e),e}d(),n.addEventListener("click",(function(){o++,o>9999&&(o=9999),d()})),n.addEventListener("mousedown",(function(){i=setInterval((()=>{o++,o>9999&&(o=9999),d()}),150)})),a.addEventListener("click",(function(){o--,o<0&&(o=0),d()})),a.addEventListener("mousedown",(function(){l=setInterval((()=>{o--,o<0&&(o=0),d()}),150)})),t.addEventListener("change",(function(e){e.target.value>9999?e.target.value=9999:e.target.value<0&&(e.target.value="00"),""==e.target.value&&(e.target.value=s(o)),o=e.target.value})),document.addEventListener("mouseup",(()=>{clearInterval(i),clearInterval(l)}))}(),function(e){let t=document.querySelector(".time-picker");document.querySelector(".continue").addEventListener("click",(n=>{let a=document.querySelector(".hr");e.startTimer(),e.endTimer(),e.pushUnitValue(Number(a.value)),d(Number(e.getTotal()),e.getTotalPastWeek(),e.unit);let i=100*Number(e.getTotalPastWeek())/40;i>100&&(i=100),o(i,e),m(e,c(e)),a.value="00",t.style.display="none"})),document.querySelector(".cancel").addEventListener("click",(e=>{document.querySelector(".hr").value="00",t.style.display="none"})),document.querySelector(".addTimeManually").addEventListener("click",(e=>{t.style.display="block"}))}(e),m(e,c(e))}(e)}))}(e,n),n++}))}(n)}p()})();