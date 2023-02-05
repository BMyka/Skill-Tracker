import { addGoBackArrow } from "./addSkill.js";
import { timePickerDisplay } from "./timePick.js";
import { timePickerLogic } from "./timePick.js";
import { addTimePickerListeners } from "./timePick.js";

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

  let last7DaysP = document.createElement("p");
  last7DaysP.textContent = "Last 7 days";

  let last7DaysH4 = document.createElement("h4");
  last7DaysH4.classList.add("weekTimeValue");
  last7DaysH4.textContent = timeFormatting(skill.getTotalPastWeek());

  last7Days.appendChild(last7DaysP);
  last7Days.appendChild(last7DaysH4);

  let totalTime = document.createElement("div");
  totalTime.classList.add("totalTime");

  let totalTimeP = document.createElement("p");
  totalTimeP.textContent = "Total time";

  let totalTimeH4 = document.createElement("h4");
  totalTimeH4.className = "totalTimeValue";
  totalTimeH4.textContent = timeFormatting(skill.getTotal());

  totalTime.appendChild(totalTimeP);
  totalTime.appendChild(totalTimeH4);

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
  timer.appendChild(timePickerDisplay());
  statistics.appendChild(timePick);
  statistics.appendChild(chart);
  main.appendChild(timer);
  main.appendChild(statistics);
  timePickerLogic();

  addTimePickerListeners(skill);

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
    updateTotalTimeValue(skill.getTotal(), skill.getTotalPastWeek());
    clearInterval(intervalId);
  });
}

export function updateTotalTimeValue(total, week) {
  console.log(total);
  let totalValue = document.querySelector(".totalTimeValue");
  totalValue.textContent = timeFormatting(total);

  let weekValue = document.querySelector(".weekTimeValue");
  weekValue.textContent = timeFormatting(week);
}

export function timeFormatting(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let secs = Math.floor(seconds % 60);

  if (hours) {
    return `${hours}h ${minutes}m`;
  } else {
    return `${minutes}m ${secs}s`;
  }
}
