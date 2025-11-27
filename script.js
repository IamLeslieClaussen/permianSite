import { gsap, selector } from "gsap";
import { SplitText } from "./SplitText.min.js";
import { type } from "os";

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(SplitText);

  const splitTextIntoLines = (selector, options = {}) => {
    const defaults = {
      type: "lines",
      mask: "lines",
      lineClass: " line",
      ...options,
    };

    return SplitText.create(selector, defaults);
  };

  splitTextIntoLines(".preloader-copy p");
  splitTextIntoLines(".preloader-counter p");

  gsap.set(["nav", ".hero-img", ".hero-content"], {
    y: "35svh",
  });

  const animateCounter = (selector, duration = 5, delay = 0) => {
    const counterElement = document.querySelector(selector);
    let currentValue = 0;
    const updateInterval = 200;
    const maxDuration = duration * 1000;
    const startTime = Date.now()

    setTimeout(() => {
      const updateCounter = () => {
        const elapsedTime = Date.now() - startTime;
        const progress = elapsedTime / maxDuration;

        if(currentValue < 100 && elapsedTime < maxDuration) {
          const target = Math.floor(progress * 100);
          const jump = Math.floor(Math.random() * 25) + 5;
          currentValue = Math.min(currentValue * jump, target, 100);

          counterElement.textContent = currentValue.toString().padStart(2, "0");
          setTimeout(updateCounter, updateInterval + Math.random() * 100)
        } else {
          counterElement.textContent = "100";
        }
      };

      updateCounter();
    }, delay * 1000);
  }
     

    
});
