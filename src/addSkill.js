import { displayWindow } from "./skills";

const skills = [];

function Skill(name, unit, total) {
  this.name = name;
  this.unit = unit;
  this.total = total || 0;

  this.startTimes = [];
  this.endTimes = [];
  this.timeDurations = [];

  this.startTimer = () => {
    this.startTimes.push(new Date());
  };
  this.endTimer = () => {
    this.endTimes.push(new Date());
  };
  this.getDuration = () => {
    console.log("lol");
    let startTime = this.startTimes[this.startTimes.length - 1].getTime();
    let endTime = this.endTimes[this.endTimes.length - 1].getTime();
    this.timeDurations.push((endTime - startTime) / 1000);
    console.log(this.timeDurations[this.timeDurations.length - 1]);
  };
  this.pushUnitValue = (value) => {
    this.timeDurations.push(value);
  };
  this.getEndTimeFromDuration = (minutes) => {
    let startTime = this.startTimes[this.startTimes.length - 1];
    let endTime = new Date(startTime.getTime() + minutes * 60000);
    this.endTimes.push(endTime);
  };
  this.getTotal = function () {
    let sum = 0;
    if (this.timeDurations.length) {
      sum = this.timeDurations.reduce((storeValues, duration) => {
        return storeValues + duration;
      });
    }

    return Number(this.total) + sum;
  };
  this.getTotalPastWeek = function () {
    let sum = 0;
    let currentTime = new Date().getTime();
    let oneWeekAgo = currentTime - 604800000;

    if (this.timeDurations.length) {
      for (let i = 0; i < this.startTimes.length; i++) {
        let startTime = this.startTimes[i].getTime();
        if (startTime >= oneWeekAgo) {
          sum += this.timeDurations[i];
          console.log("TEST");
          console.log(this.timeDurations[i]);
        }
      }
    }
    return Number(this.total) + sum;
  };
  this.getTotalForDate = function (date) {
    let sum = 0;
    let currentTime = date.getTime();
    let oneDayAgo = currentTime - 86400000;

    if (this.timeDurations.length) {
      for (let i = 0; i < this.startTimes.length; i++) {
        let startTime = this.startTimes[i].getTime();
        if (startTime >= oneDayAgo && startTime < currentTime) {
          sum += this.timeDurations[i];
        }
      }
    }
    if (this.unit === "hours") {
      return (sum / 3600).toFixed(2);
    }
    return sum;
  };
}

export default skills;

function addNewSkill(name, unit, total) {
  if (unit == "hours") {
    total = total * 60 * 60;
  }
  const newSkill = new Skill(name, unit, total);
  skills.push(newSkill);
  displayWindow();
}

addNewSkill("The Odin Project", "hours", 110);
addNewSkill("Running", "kilometers", 10);

skills[1].startTimes[0] = new Date(
  new Date().getTime() - 21 * 24 * 60 * 60 * 1000
);
skills[1].endTimes[0] = new Date(
  new Date().getTime() - 21 * 24 * 60 * 60 * 1000
);

skills[1].pushUnitValue(5);
//////////////////////////////////////
skills[0].startTimes[0] = new Date(
  new Date().getTime() - 21 * 24 * 60 * 60 * 1000
);
skills[0].endTimes[0] = new Date(
  new Date().getTime() - 14 * 24 * 60 * 60 * 1000
);
skills[0].getDuration();

skills[0].startTimes[1] = new Date(
  new Date().getTime() - 6 * 24 * 60 * 60 * 1000
);
skills[0].endTimes[1] = new Date(
  new Date().getTime() - 5.9 * 24 * 60 * 60 * 1000
);
skills[0].getDuration();

skills[0].startTimes[2] = new Date(
  new Date().getTime() - 1 * 24 * 60 * 60 * 1000
);
skills[0].endTimes[2] = new Date(
  new Date().getTime() - 0.85 * 24 * 60 * 60 * 1000
);
skills[0].getDuration();

export function displayAddNew() {
  let header = document.querySelector(".header");
  header.textContent = "Add a skill";

  let main = document.querySelector(".main");
  main.textContent = "";

  addGoBackArrow(header);

  const form = document.createElement("form");
  form.setAttribute("action", "");

  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("placeholder", "Name");
  nameInput.setAttribute("required", "");
  form.appendChild(nameInput);

  const unitDiv = document.createElement("div");
  unitDiv.setAttribute("class", "input-container");

  const label = document.createElement("label");
  label.setAttribute("for", "unit-select");
  const labelText = document.createTextNode("Measurement Unit:");
  label.appendChild(labelText);
  unitDiv.appendChild(label);

  const select = document.createElement("select");
  select.setAttribute("id", "unit-select");
  select.setAttribute("name", "unit-select");

  const hoursOption = document.createElement("option");
  hoursOption.setAttribute("value", "hours");
  const hoursOptionText = document.createTextNode("Hours");
  hoursOption.appendChild(hoursOptionText);
  select.appendChild(hoursOption);

  const kilometersOption = document.createElement("option");
  kilometersOption.setAttribute("value", "kilometers");
  const kilometersOptionText = document.createTextNode("Kilometers");
  kilometersOption.appendChild(kilometersOptionText);
  select.appendChild(kilometersOption);

  const timesOption = document.createElement("option");
  timesOption.setAttribute("value", "times");
  const timesOptionText = document.createTextNode("Times");
  timesOption.appendChild(timesOptionText);
  select.appendChild(timesOption);

  unitDiv.appendChild(select);
  form.appendChild(unitDiv);

  const totalInput = document.createElement("input");
  totalInput.setAttribute("class", "skillType");
  totalInput.setAttribute("type", "number");
  totalInput.setAttribute("placeholder", "Total number of hours of practice");
  totalInput.setAttribute("required", "");
  totalInput.setAttribute("min", "0");
  form.appendChild(totalInput);

  const button = document.createElement("button");
  button.setAttribute("class", "submit");
  const buttonText = document.createTextNode("Save");
  button.appendChild(buttonText);
  form.appendChild(button);

  main.appendChild(form);

  let selected = form.querySelector("select#unit-select");
  selected.addEventListener("change", function () {
    const selectedValue = this.value;
    if (selectedValue === "times") {
      totalInput.setAttribute("placeholder", "Total number of times");
    } else if (selectedValue === "hours") {
      totalInput.setAttribute(
        "placeholder",
        "Total number of hours of practice"
      );
    } else if (selectedValue === "kilometers") {
      totalInput.setAttribute("placeholder", "Total number of kilometers");
    }
  });
  let submit = document.querySelector(".submit");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    let name = form.querySelector("input[placeholder='Name']").value;

    let selected = form.querySelector("select#unit-select");

    let total = form.querySelector(".skillType").value;
    addNewSkill(name, selected.value, total);
  });
}

export function addGoBackArrow(header) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("height", "48");
  svg.setAttribute("width", "48");
  svg.setAttribute("class", "goBack");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute(
    "d",
    "M24 40 8 24 24 8l2.1 2.1-12.4 12.4H40v3H13.7l12.4 12.4Z"
  );

  svg.appendChild(path);
  header.appendChild(svg);

  let goBack = document.querySelector(".goBack");
  goBack.addEventListener("click", (e) => {
    e.stopPropagation();
    displayWindow();
  });
}
