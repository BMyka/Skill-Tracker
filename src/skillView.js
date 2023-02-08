import { addGoBackArrow } from "./addSkill.js";
import { timePickerDisplay } from "./timePick.js";
import { timePickerLogic } from "./timePick.js";
import { generalAddPickerListeners } from "./timePick.js";
import { generalPickerLogic } from "./timePick.js";
import { addTimePickerListeners } from "./timePick.js";

export function displaySkillViewGeneral(skill) {
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

  //
  let last7DaysH4 = document.createElement("h4");
  last7DaysH4.classList.add("weekTimeValue");

  let totalTime = document.createElement("div");
  totalTime.classList.add("totalTime");

  let totalTimeP = document.createElement("p");

  let totalTimeH4 = document.createElement("h4");
  totalTimeH4.className = "totalTimeValue";

  //
  let addTimeManually = document.createElement("button");
  addTimeManually.classList.add("addTimeManually");

  if (skill.unit == "kilometers") {
    last7DaysH4.textContent = `${skill.getTotalPastWeek()} km`;
    totalTimeP.textContent = "Total kilometers";
    totalTimeH4.textContent = `${skill.getTotal()} km`;
    addTimeManually.textContent = "Add kilometers";
  } else {
    last7DaysH4.textContent = `${skill.getTotalPastWeek()} times`;
    totalTimeP.textContent = "Total amount of times";
    totalTimeH4.textContent = `${skill.getTotal()} times`;
    addTimeManually.textContent = "Add times";
  }

  last7Days.appendChild(last7DaysP);

  last7Days.appendChild(last7DaysH4);
  totalTime.appendChild(totalTimeP);
  totalTime.appendChild(totalTimeH4);

  let goalProgress = document.createElement("div");
  goalProgress.classList.add("goalProgress");

  let h4 = document.createElement("h4");
  h4.textContent = `Weekly goal: ${skill.getTotalPastWeek()} / 40 ${
    skill.unit
  }`;
  goalProgress.appendChild(h4);
  //

  let animatedProgress = document.createElement("div");
  animatedProgress.classList.add("animated-progress", "progress-yellow");

  let span = document.createElement("span");

  span.setAttribute(
    "data-progress",
    `${(skill.getTotalPastWeek() * 100) / 40}`
  );
  animatedProgress.appendChild(span);

  goalProgress.appendChild(animatedProgress);
  //
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
  timer.appendChild(addTimeManually);
  timer.appendChild(goalProgress);
  timer.appendChild(timePickerDisplay(skill));
  statistics.appendChild(timePick);
  statistics.appendChild(chart);
  main.appendChild(timer);
  main.appendChild(statistics);

  span = document.querySelector(".animated-progress span");
  span.style.width = `${span.getAttribute("data-progress")}%`;
  span.textContent = `${span.getAttribute("data-progress")}%`;

  generalPickerLogic();
  generalAddPickerListeners(skill);
}

export function updateProgressBar(percent, skill) {
  let span = document.querySelector(".animated-progress span");
  span.setAttribute("data-progress", `${percent}`);
  span.style.width = `${percent}%`;
  span.textContent = `${percent}%`;

  let goalProgress = document.querySelector(".goalProgress");
  let h4 = goalProgress.querySelector("h4");
  if (skill.unit === "hours") {
    h4.textContent = `Weekly goal: ${(skill.getTotalPastWeek() / 3600).toFixed(
      0
    )} / 40 ${skill.unit}`;
  } else {
    h4.textContent = `Weekly goal: ${skill.getTotalPastWeek()} / 40 ${
      skill.unit
    }`;
  }
}

export function updateTotalValues(total, week, unit) {
  let value;
  if (unit === "kilometers") {
    value = "km";
  } else {
    value = unit;
  }
  let totalValue = document.querySelector(".totalTimeValue");
  totalValue.textContent = `${total} ${value}`;

  let weekValue = document.querySelector(".weekTimeValue");
  weekValue.textContent = `${week} ${value}`;
}

export function updateTotalTimeValue(total, week) {
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

export function displaySkillViewTime(skill) {
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

  let h4 = document.createElement("h4");
  h4.textContent = `Weekly goal: ${(skill.getTotalPastWeek() / 3600).toFixed(
    0
  )} / 40 ${skill.unit}`;
  goalProgress.appendChild(h4);
  //

  let animatedProgress = document.createElement("div");
  animatedProgress.classList.add("animated-progress", "progress-yellow");

  let span = document.createElement("span");
  let barValue = ((Number(skill.getTotalPastWeek()) / 3600) * 100) / 40;
  if (barValue > 100) {
    barValue = 100;
  }
  span.setAttribute("data-progress", `${barValue}`);
  animatedProgress.appendChild(span);

  goalProgress.appendChild(animatedProgress);
  //
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

  timer.appendChild(timePickerDisplay(skill));

  statistics.appendChild(timePick);
  statistics.appendChild(chart);
  main.appendChild(timer);
  main.appendChild(statistics);

  span = document.querySelector(".animated-progress span");
  span.style.width = `${span.getAttribute("data-progress")}%`;
  span.textContent = `${span.getAttribute("data-progress")}%`;

  timePickerLogic();
  addTimePickerListeners(skill);

  // Get the elements
  let start = document.querySelector(".startTimer");
  let stop = document.querySelector(".stopTimer");
  let tracking = document.querySelector(".liveTimer");
  let timerValue = document.querySelector(".timerValue");

  // Initialize the timer
  let time = 0;
  let intervalId;

  // Start timer function
  start.addEventListener("click", function () {
    start.style.display = "none";
    stop.style.display = "block";
    tracking.style.display = "flex";
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
    tracking.style.display = "none";
    skill.endTimer();
    skill.getDuration();
    updateTotalTimeValue(skill.getTotal(), skill.getTotalPastWeek());
    clearInterval(intervalId);
    timerValue.textContent = "0:00";
    time = 0;

    let barValue = ((Number(skill.getTotalPastWeek()) / 3600) * 100) / 40;
    if (barValue > 100) {
      barValue = 100;
    }
    updateProgressBar(barValue.toFixed(1), skill);
  });
}
