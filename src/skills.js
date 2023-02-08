import { displayAddNew } from "./addSkill.js";
import { displaySkillViewTime } from "./skillView.js";
import { displaySkillViewGeneral } from "./skillView.js";
import { timeFormatting } from "./skillView.js";
import skills from "./addSkill.js";

export function displayWindow() {
  // Create the container div
  const skillContainer = document.querySelector("#content");
  skillContainer.textContent = "";

  // Create the header div
  const header = document.createElement("div");
  header.classList.add("header");
  header.innerHTML = "Skills";
  skillContainer.appendChild(header);

  // Create the main div
  const main = document.createElement("div");
  main.classList.add("main");
  skillContainer.appendChild(main);

  // Create the add new button
  const addNewButton = document.createElement("button");
  addNewButton.classList.add("addNew");
  addNewButton.innerHTML = "+";
  main.appendChild(addNewButton);

  let newValueButton = document.querySelector(".addNew");
  newValueButton.addEventListener("click", (e) => {
    e.stopPropagation();
    displayAddNew();
  });

  displaySkills(skills);
}

function displaySkills(skills) {
  // Get the main div
  const main = document.querySelector(".main");
  // Use forEach to iterate through the skills array
  let index = 0;
  skills.forEach(function (skill) {
    // Create the skill div
    const skillDiv = document.createElement("div");
    skillDiv.classList.add("skill");
    skillDiv.classList.add("skill-" + index.toString());
    main.appendChild(skillDiv);

    // Create the skill name h3
    const skillName = document.createElement("h3");
    skillName.innerHTML = skill.name;
    skillDiv.appendChild(skillName);

    // Create the group div
    const group = document.createElement("div");
    group.classList.add("group");
    skillDiv.appendChild(group);

    // Create the skill hours p
    const skillTotal = document.createElement("p");
    console.log(skill.unit);
    if (skill.unit == "hours") {
      skillTotal.innerHTML = `${timeFormatting(skill.getTotal())}`;
    }
    if (skill.unit == "kilometers") {
      skillTotal.innerHTML = `${skill.getTotal()} km`;
    }
    if (skill.unit == "times") {
      skillTotal.innerHTML = `${skill.getTotal()} times`;
    }
    group.appendChild(skillTotal);

    // Create the SVG
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("height", "48");
    svg.setAttribute("width", "48");
    group.appendChild(svg);

    // Create the SVG path
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M20 34V14l10 10Z");
    svg.appendChild(path);

    addListener(skill, index);
    index++;
  });
}

function addListener(skill, index) {
  let skillClick = document.querySelector(".skill-" + index.toString());
  skillClick.addEventListener("click", (e) => {
    e.stopPropagation();
    if (skill.unit == "hours") {
      displaySkillViewTime(skill);
    } else {
      displaySkillViewGeneral(skill);
    }
  });
}
