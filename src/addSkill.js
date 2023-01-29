import { displayWindow } from "./skills";

const skills = [];

function Skill(name, unit, total) {
  this.name = name;
  this.unit = unit;
  this.total = total;
}

export default skills;

function addNewSkill(name, unit, total) {
  const newSkill = new Skill(name, unit, total);
  skills.push(newSkill);
  displayWindow();
}

export function displayAddNew() {
  console.log("lmao");
  const div = document.querySelector("#content");
  div.textContent = "";

  const headerDiv = document.createElement("div");
  headerDiv.setAttribute("class", "header");
  const headerText = document.createTextNode("Add a skill");
  headerDiv.appendChild(headerText);

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
  headerDiv.appendChild(svg);
  div.appendChild(headerDiv);

  let goBack = document.querySelector(".goBack");
  goBack.addEventListener("click", (e) => {
    e.stopPropagation();
    displayWindow();
  });

  const mainDiv = document.createElement("div");
  mainDiv.setAttribute("class", "main");

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

  mainDiv.appendChild(form);
  div.appendChild(mainDiv);

  let submit = document.querySelector(".submit");
  submit.addEventListener("click", (e) => {
    e.preventDefault();

    const name = form.querySelector("input[placeholder='Name']").value;
    const select = form.querySelector("select#unit-select");
    let selectedUnit = select.value;
    const total = form.querySelector(
      "input[placeholder='Total number of hours of practice']"
    ).value;
    addNewSkill(name, selectedUnit, total);
  });
}
