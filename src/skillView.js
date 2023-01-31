import { addGoBackArrow } from "./addSkill.js";

export function displaySkillView(skill) {
  let header = document.querySelector(".header");
  header.textContent = skill.name;
  addGoBackArrow(header);

  let main = document.querySelector(".main");
  main.classList.add("mainIndividualSkill");
  main.innerHTML = "";

  let timer = document.createElement("div");
  timer.classList.add("timer");

  let timeTracker = document.createElement("div");
  timeTracker.classList.add("timeTracker");

  let last7Days = document.createElement("div");
  last7Days.classList.add("last7Days");
  last7Days.innerHTML = `
      <p>Last 7 days</p>
      <h4>24h 48m</h4>
    `;

  let totalTime = document.createElement("div");
  totalTime.classList.add("totalTime");
  let p = document.createElement("p");
  p.innerHTML = "Total time";

  let h4 = document.createElement("h4");
  h4.className = "totalTimeValue";
  h4.innerHTML = skill.getTotal();

  totalTime.appendChild(p);
  totalTime.appendChild(h4);

  let startTimer = document.createElement("button");
  startTimer.classList.add("startTimer");
  startTimer.textContent = "Start timer";

  let stopTimer = document.createElement("button");
  stopTimer.classList.add("stopTimer");
  stopTimer.textContent = "Stop timer";

  let addTimeManually = document.createElement("button");
  addTimeManually.classList.add("addTimeManually");
  addTimeManually.textContent = "Add time manually";

  let liveTimer = document.createElement("div");
  liveTimer.classList.add("liveTimer");
  liveTimer.innerHTML = `
      <h4>Tracking</h4>
      <h4 class="timerValue">00:00</h4>
    `;

  let goalProgress = document.createElement("div");
  goalProgress.classList.add("goalProgress");
  goalProgress.innerHTML = `
      <h4>Daily goal: 2h 2m / 8h</h4>
      <div class="progressBar">
        -----------------============================
      </div>
    `;

  let statistics = document.createElement("div");
  statistics.classList.add("statistics");

  let timePick = document.createElement("div");
  timePick.classList.add("timePick");
  timePick.innerHTML = `
      <button>Days</button><button>Weeks</button><button>Months</button><button>Years</button>
    `;

  let chart = document.createElement("div");
  chart.classList.add("chart");

  timeTracker.appendChild(last7Days);
  timeTracker.appendChild(totalTime);
  timer.appendChild(timeTracker);
  timer.appendChild(startTimer);
  timer.appendChild(stopTimer);
  timer.appendChild(addTimeManually);
  timer.appendChild(liveTimer);
  timer.appendChild(goalProgress);
  statistics.appendChild(timePick);
  statistics.appendChild(chart);
  main.appendChild(timer);
  main.appendChild(statistics);

  // Get the elements
  let start = document.querySelector(".startTimer");
  let stop = document.querySelector(".stopTimer");
  let timerValue = document.querySelector(".timerValue");

  // Initialize the timer
  let time = 0;
  let intervalId;

  // Start timer function
  start.addEventListener("click", function () {
    start.style.display = "none";
    stop.style.display = "block";
    skill.startTimer();
    intervalId = setInterval(function () {
      time++;
      let minutes = Math.floor(time / 60);
      let seconds = time % 60;
      let formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;
      timerValue.textContent = formattedTime;
    }, 1000);
  });

  // Stop timer function
  stop.addEventListener("click", function () {
    start.style.display = "block";
    stop.style.display = "none";
    skill.endTimer();
    skill.getDuration();
    updateTotalTimeValue(skill.getTotal());
    clearInterval(intervalId);
  });
}

function updateTotalTimeValue(total) {
  console.log("ok");
  let timerValue = document.querySelector(".totalTimeValue");
  timerValue.textContent = total;
}
