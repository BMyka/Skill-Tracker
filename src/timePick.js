import { updateTotalTimeValue } from "./skillView";
import { updateTotalValues } from "./skillView";
import { updateProgressBar } from "./skillView";
import { drawChart } from "./skillView";
import { getPast7Days } from "./skillView";
import { isTimerRunning } from "./skillView";

export function timePickerDisplay(skill) {
  const timePicker = document.createElement("div");
  timePicker.classList.add("time-picker");
  timePicker.setAttribute("data-time", "00:00");
  timePicker.style.display = "none";

  const timePickerHeader = document.createElement("div");
  timePickerHeader.classList.add("time-picker-header");
  if (skill.unit == "times") {
    timePickerHeader.textContent = "Add times";
  } else if (skill.unit == "hours") {
    timePickerHeader.textContent = "Add hours | minutes";
  } else if (skill.unit == "kilometers") {
    timePickerHeader.textContent = "Add km";
  }

  timePicker.appendChild(timePickerHeader);

  const timePickerMain = document.createElement("div");
  timePickerMain.classList.add("time-picker-main");
  timePicker.appendChild(timePickerMain);

  const hour = document.createElement("div");
  hour.classList.add("hour");
  timePickerMain.appendChild(hour);

  const hourUp = document.createElement("div");
  hourUp.classList.add("hr-up");
  hour.appendChild(hourUp);

  const hourInput = document.createElement("input");
  hourInput.setAttribute("type", "number");
  hourInput.classList.add("hr");
  hourInput.setAttribute("value", "00");
  hour.appendChild(hourInput);

  const hourDown = document.createElement("div");
  hourDown.classList.add("hr-down");
  hour.appendChild(hourDown);

  if (skill.unit == "hours") {
    const separator = document.createElement("div");
    separator.classList.add("separator");
    separator.textContent = ":";
    timePickerMain.appendChild(separator);

    const minute = document.createElement("div");
    minute.classList.add("minute");
    timePickerMain.appendChild(minute);

    const minuteUp = document.createElement("div");
    minuteUp.classList.add("min-up");
    minute.appendChild(minuteUp);

    const minuteInput = document.createElement("input");
    minuteInput.setAttribute("type", "number");
    minuteInput.classList.add("min");
    minuteInput.setAttribute("value", "00");
    minute.appendChild(minuteInput);

    const minuteDown = document.createElement("div");
    minuteDown.classList.add("min-down");
    minute.appendChild(minuteDown);
  }

  const timePickerButtons = document.createElement("div");
  timePickerButtons.classList.add("time-picker-buttons");
  timePicker.appendChild(timePickerButtons);

  const cancelButton = document.createElement("button");
  cancelButton.classList.add("cancel");
  cancelButton.textContent = "Cancel";
  timePickerButtons.appendChild(cancelButton);

  const continueButton = document.createElement("button");
  continueButton.classList.add("continue");
  continueButton.textContent = "Ok";
  timePickerButtons.appendChild(continueButton);

  return timePicker;
}

export function addTimePickerListeners(skill) {
  let pickerWindow = document.querySelector(".time-picker");

  let addManuallyContinue = document.querySelector(".continue");
  addManuallyContinue.addEventListener("click", (e) => {
    let hours = document.querySelector(".hr");
    let min = document.querySelector(".min");

    skill.startTimer();
    skill.getEndTimeFromDuration(Number(hours.value) * 60 + Number(min.value));
    skill.getDuration();
    if (skill.unit == "hours") {
      updateTotalTimeValue(skill.getTotal(), skill.getTotalPastWeek());
    } else {
      updateTotalValues(skill.getTotal(), skill.getTotalPastWeek());
    }
    hours.value = "00";
    min.value = "00";
    pickerWindow.style.display = "none";

    let barValue = ((Number(skill.getTotalPastWeek()) / 3600) * 100) / 40;
    if (barValue > 100) {
      barValue = 100;
    }
    updateProgressBar(barValue.toFixed(1), skill);
    console.log("lmaoooooooooooo");
    drawChart(skill, getPast7Days(skill));
  });

  let addManuallyCancel = document.querySelector(".cancel");
  addManuallyCancel.addEventListener("click", (e) => {
    let hours = document.querySelector(".hr");
    let min = document.querySelector(".min");
    hours.value = "00";
    min.value = "00";
    pickerWindow.style.display = "none";
  });

  let addManuallyButton = document.querySelector(".addTimeManually");
  addManuallyButton.addEventListener("click", (e) => {
    console.log(isTimerRunning);
    if (!isTimerRunning) {
      pickerWindow.style.display = "block";
    }
  });
}

export function timePickerLogic() {
  const time_picker_element = document.querySelector(".time-picker");

  const hr_element = document.querySelector(".time-picker .hour .hr");
  const min_element = document.querySelector(".time-picker .minute .min");

  const hr_up = document.querySelector(".time-picker .hour .hr-up");
  const hr_down = document.querySelector(".time-picker .hour .hr-down");

  const min_up = document.querySelector(".time-picker .minute .min-up");
  const min_down = document.querySelector(".time-picker .minute .min-down");

  let d = new Date();

  let hour = 0;
  let minute = 0;
  setTime();

  // EVENT LISTENERS
  hr_up.addEventListener("click", hour_up);
  hr_up.addEventListener("mousedown", hour_up_held);
  hr_down.addEventListener("click", hour_down);
  hr_down.addEventListener("mousedown", hour_down_held);

  min_up.addEventListener("click", minute_up);
  min_up.addEventListener("mousedown", minute_up_held);
  min_down.addEventListener("click", minute_down);
  min_down.addEventListener("mousedown", minute_down_held);

  hr_element.addEventListener("change", hour_change);
  min_element.addEventListener("change", minute_change);

  function hour_change(e) {
    if (e.target.value > 9999) {
      e.target.value = 9999;
    } else if (e.target.value < 0) {
      e.target.value = "00";
    }

    if (e.target.value == "") {
      e.target.value = formatTime(hour);
    }

    hour = e.target.value;
  }

  function minute_change(e) {
    if (e.target.value > 59) {
      e.target.value = 59;
    } else if (e.target.value < 0) {
      e.target.value = "00";
    }

    if (e.target.value == "") {
      e.target.value = formatTime(minute);
    }

    minute = e.target.value;
  }

  function hour_up() {
    hour++;
    if (hour > 9999) {
      hour = 9999;
    }
    setTime();
  }
  function hour_down() {
    hour--;
    if (hour < 0) {
      hour = 0;
    }
    setTime();
  }
  //held logic
  let hour_up_held_interval;
  function hour_up_held() {
    hour_up_held_interval = setInterval(() => {
      hour++;
      if (hour > 9999) {
        hour = 9999;
      }
      setTime();
    }, 200);
  }
  //held logic
  let hour_down_held_interval;
  function hour_down_held() {
    hour_down_held_interval = setInterval(() => {
      hour--;
      if (hour < 0) {
        hour = 0;
      }
      setTime();
    }, 200);
  }

  function minute_up() {
    minute++;
    if (minute > 59) {
      minute = 0;
      if (hour < 9999) {
        hour++;
      }
    }
    setTime();
  }
  function minute_down() {
    minute--;
    if (minute < 0) {
      minute = 59;
      if (hour > 0) {
        hour--;
      }
    }
    setTime();
  }
  //held logic
  let min_up_held_interval;
  function minute_up_held() {
    min_up_held_interval = setInterval(() => {
      minute++;
      if (minute > 59) {
        minute = 0;
        if (hour < 9999) {
          hour++;
        }
      }
      setTime();
    }, 100);
  }
  //held logic
  let min_down_held_interval;
  function minute_down_held() {
    min_down_held_interval = setInterval(() => {
      minute--;
      if (minute < 0) {
        minute = 59;
        if (hour > 0) {
          hour--;
        }
      }
      setTime();
    }, 100);
  }

  function setTime() {
    hr_element.value = formatTime(hour);
    min_element.value = formatTime(minute);
    time_picker_element.dataset.time = `${formatTime(hour)}h ${formatTime(
      minute
    )}m`;
  }

  function formatTime(time) {
    if (time < 10) {
      time = "0" + time;
    }
    return time;
  }

  document.addEventListener("mouseup", () => {
    clearInterval(hour_up_held_interval);
    clearInterval(hour_down_held_interval);
    clearInterval(min_up_held_interval);
    clearInterval(min_down_held_interval);
  });
}

export function generalAddPickerListeners(skill) {
  let pickerWindow = document.querySelector(".time-picker");

  let addManuallyContinue = document.querySelector(".continue");
  addManuallyContinue.addEventListener("click", (e) => {
    let hours = document.querySelector(".hr");

    skill.startTimer();
    skill.endTimer();
    skill.pushUnitValue(Number(hours.value));

    updateTotalValues(
      Number(skill.getTotal()),
      skill.getTotalPastWeek(),
      skill.unit
    );
    let barValue = (Number(skill.getTotalPastWeek()) * 100) / 40;
    if (barValue > 100) {
      barValue = 100;
    }
    updateProgressBar(barValue, skill);
    drawChart(skill, getPast7Days(skill));
    hours.value = "00";
    pickerWindow.style.display = "none";
  });

  let addManuallyCancel = document.querySelector(".cancel");
  addManuallyCancel.addEventListener("click", (e) => {
    let hours = document.querySelector(".hr");
    hours.value = "00";
    pickerWindow.style.display = "none";
  });

  let addManuallyButton = document.querySelector(".addTimeManually");
  addManuallyButton.addEventListener("click", (e) => {
    pickerWindow.style.display = "block";
  });
}

export function generalPickerLogic() {
  const time_picker_element = document.querySelector(".time-picker");

  const hr_element = document.querySelector(".time-picker .hour .hr");

  const hr_up = document.querySelector(".time-picker .hour .hr-up");
  const hr_down = document.querySelector(".time-picker .hour .hr-down");

  let d = new Date();

  let hour = 0;
  setTime();

  // EVENT LISTENERS
  hr_up.addEventListener("click", hour_up);
  hr_up.addEventListener("mousedown", hour_up_held);
  hr_down.addEventListener("click", hour_down);
  hr_down.addEventListener("mousedown", hour_down_held);

  hr_element.addEventListener("change", hour_change);

  function hour_change(e) {
    if (e.target.value > 9999) {
      e.target.value = 9999;
    } else if (e.target.value < 0) {
      e.target.value = "00";
    }

    if (e.target.value == "") {
      e.target.value = formatTime(hour);
    }

    hour = e.target.value;
  }

  function hour_up() {
    hour++;
    if (hour > 9999) {
      hour = 9999;
    }
    setTime();
  }
  function hour_down() {
    hour--;
    if (hour < 0) {
      hour = 0;
    }
    setTime();
  }
  //held logic
  let hour_up_held_interval;
  function hour_up_held() {
    hour_up_held_interval = setInterval(() => {
      hour++;
      if (hour > 9999) {
        hour = 9999;
      }
      setTime();
    }, 150);
  }
  //held logic
  let hour_down_held_interval;
  function hour_down_held() {
    hour_down_held_interval = setInterval(() => {
      hour--;
      if (hour < 0) {
        hour = 0;
      }
      setTime();
    }, 150);
  }

  function setTime() {
    hr_element.value = formatTime(hour);
    time_picker_element.dataset.time = `${formatTime(hour)}h `;
  }

  function formatTime(time) {
    if (time < 10) {
      time = "0" + time;
    }
    return time;
  }

  document.addEventListener("mouseup", () => {
    clearInterval(hour_up_held_interval);
    clearInterval(hour_down_held_interval);
  });
}
