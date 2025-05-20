export const stepOptions = {
  1: {
    title: "Which deodorant or antiperspirant brand do you currently use?",
    subtitle: "(select your favorite)",
    options: [
      { brand: "dove", img: "./assets/dove-logo.png" },
      { brand: "old spice", img: "./assets/old-spice-logo.png" },
      { brand: "secret", img: "./assets/secret-logo.png" },
      { brand: "degree", img: "./assets/degree-logo.png" },
      { brand: "native", img: "./assets/native-logo.png" },
      { brand: "axe", img: "./assets/axe-logo.png" },
      { brand: "lume", img: "./assets/lume-logo.png" },
      { brand: "other", img: "./assets/other-logo.png" },
    ],
  },
  2: {
    title: "What deodorant or antiperspirant products do you currently use?",
    subtitle: "",
    options: [
      { brand: "invisible solid stick", img: "./assets/deodorant.png", subtitle: "outlast, fresh, clinical strength, whole body" },
      { brand: "invisible cream", img: "./assets/deodorant.png", subtitle: "whole body" },
      { brand: "dry spray", img: "./assets/deodorant.png", subtitle: "outlast, fresh, clinical strenght, whole body, aluminium free, weightless, original" },
      { brand: "Clear Gel", img: "./assets/deodorant.png", subtitle: "outlast, fresh, clinical strenght" },
      { brand: "clear solid", img: "./assets/deodorant.png", subtitle: "aluminium free" },
      { brand: "soft solid", img: "./assets/deodorant.png", subtitle: "clinical strengh" },
      { brand: "original solid stick", img: "./assets/deodorant.png" },
      { brand: "roll-on", img: "./assets/deodorant.png" },
      { brand: "other", img: "./assets/deodorant.png" },
    ],
  },
  3: {
    title: "What are you Really putting on your body?",
    subtitle: "Have you ever wondered...",
    options: [],
    type: "info",
  },
  4: {
    title: `Would you swap your current deodorant or antiperspirant for a <u>more effective solution?<u>`,
    options: [
      {brand: "Yes!", img: "./assets/checkmark.png"},
      {brand: "No, I dont want more effective sweatcare", img: "./assets/xmark.png"},
      {brand: "I'm not sure yet", img: "./assets/not-sure.png"},
    ],
  },
  5: {
    title: `Do you want <u>premium fragrances</u> with smarter sweat protection?`,
    subtitle: "",
    options: [
      {brand: "Yes!", img: "./assets/checkmark.png"},
      {brand: "No, I prefer cheap smelling drugstore deo", img: "./assets/xmark.png"},
      {brand: "I'm not sure yet", img: "./assets/not-sure.png"},
    ],
  },
  6: {
    title:
      "Never run out of antiperspirant again! are you ready to receive a regular, delivery of your favourite scents?",
    subtitle: "(no more late night dash to the store!)",
    options: [
      {brand: "Yes!", img: "./assets/checkmark.png"},
      {brand: "No, I like running out of my essentials", img: "./assets/xmark.png"},
      {brand: "Still not sure", img: "./assets/not-sure.png"},
    ],
  },
  7: {
    title: "we will refund you!",
    subtitle: "for your innefective deodorant",
    options: [],
    type: "info",
  },
};
