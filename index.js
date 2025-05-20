import { stepOptions } from "./options.js";

document.addEventListener('DOMContentLoaded', () => {
  function createStepper(totalSteps) {
  let currentStep = 1;
  const choices = new Array(totalSteps).fill(null);

  return {
    getStep: () => currentStep,
    next: () => {
      if (currentStep < totalSteps) currentStep++;
    },
    prev: () => {
      if (currentStep > 1) currentStep--;
    },
    isLast: () => currentStep === totalSteps,
    isFirst: () => currentStep === 1,
    storeChoice: (step, value) => (choices[step - 1] = value),
    getChoice: (step) => choices[step - 1],
    getAllChoices: () => [...choices],
  };
}

const stepper = createStepper(7);
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
const optionWrapper = document.querySelector(".options-wrapper");

function renderOptions(step) {
  const titles = document.querySelector(".titles");
  const stepData = stepOptions[step] || {};
  optionWrapper.innerHTML = "";

  // Reset step-* classes
  optionWrapper.classList.forEach((cls) => {
    if (cls.startsWith("step-")) optionWrapper.classList.remove(cls);
  });
  titles.classList.forEach((cls) => {
    if (cls.startsWith("step-")) titles.classList.remove(cls);
  });
  backBtn.classList.forEach((cls) => {
    if (cls.startsWith("step-")) backBtn.classList.remove(cls);
  });

  optionWrapper.classList.add(`step-${step}`);
  titles.classList.add(`step-${step}`);
  backBtn.classList.add(`step-${step}`);

  if ([3, 7].includes(step)) {
    const template = document.getElementById(`step-${step}-template`);
    if (template) {
      const clone = template.content.cloneNode(true);
      optionWrapper.appendChild(clone);
    }
    nextBtn.disabled = false;
    return;
  }

  const options = stepData.options || [];

  optionWrapper.innerHTML = options
    .map((opt, index) => {
      const isObj = typeof opt === "object";
      const labelText = isObj ? opt.brand : opt;
      const imgSrc = isObj ? opt.img : null;
      const optionId = `step${step}-option${index}`;
      const checked = stepper.getChoice(step) === labelText ? "checked" : "";
      const subtitle = isObj ? opt.subtitle : null;

      return `
    <label class="option-label">
      <input 
        type="radio" 
        name="step${step}" 
        id="${optionId}" 
        value="${labelText}"
        class="custom-radio"
        ${checked}
      >
      <span class="custom-circle"></span>
      ${
        imgSrc
          ? `<img src="${imgSrc}" alt="${labelText}" class="option-img">`
          : ""
      }
      <span class="option-text">${labelText} <br> ${subtitle ? `<em class="properties">${subtitle}</em>`: ""}</span>
    </label>
  `;
    })
    .join("");

  }

optionWrapper.addEventListener("change", (e) => {
  const input = e.target;
  if (input.matches('input[type="radio"]')) {
    const step = stepper.getStep();
    stepper.storeChoice(step, input.value);
    console.log('step:', step, 'input value:', input.value);
    nextBtn.disabled = false;

    optionWrapper
      .querySelectorAll(".option-label")
      .forEach((label) => label.classList.remove("active"));

    input.closest("label").classList.add("active");
  }
});

function updateUI() {
  const step = stepper.getStep();

  const titleElem = document.querySelector(".title");
  const subtitleElem = document.querySelector(".subtitle");

  const stepData = stepOptions[step] || {};
  const title = stepData.title || `Step ${step}`;
  const subtitle = stepData.subtitle || "";

  titleElem.innerHTML = title;
  subtitleElem.innerHTML = subtitle;

  renderOptions(step);

  if ([3, 7].includes(step)) {
    nextBtn.disabled = false;
  } else {
    const choice = stepper.getChoice(step);
    nextBtn.disabled = !choice;
  }

  nextBtn.textContent =
    step === 1 || step === 7
      ? "CONTINUE"
      : stepper.isLast()
      ? "FINISH"
      : "NEXT";

  backBtn.disabled = step === 1;

  const allCircles = document.querySelectorAll(
    ".progress-bar__circles .circle"
  );
  const current = stepper.getStep();

  const currentCircle = allCircles[current];
  if (currentCircle) currentCircle.classList.add("current-step");

  const finalCircle = document.querySelector(".circle.final");
  if (stepper.isLast() && finalCircle) {
    finalCircle.classList.add("current-step");
  } else if (finalCircle) {
    finalCircle.classList.remove("current-step");
  }
  for (let i = current + 1; i < allCircles.length; i++) {
    allCircles[i].classList.remove("current-step");
  }
}

backBtn.addEventListener("click", () => {
  stepper.prev();
  updateUI();
});

nextBtn.addEventListener("click", () => {
  if (stepper.isLast()) {
    console.log("✅ Choices made:", stepper.getAllChoices());
    alert("All steps completed! Check the console for selected options.");
  } else {
    stepper.next();
    updateUI();
  }
});

updateUI();
})
