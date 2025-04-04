import { animate, spring, inView, stagger } from 'motion';

// Animation preset functions
export const fadeIn = (element: HTMLElement) => {
  animate(
    element,
    { opacity: [0, 1] },
    { duration: 0.5, easing: 'ease-in-out' }
  );
};

export const slideUp = (element: HTMLElement) => {
  animate(
    element,
    { opacity: [0, 1], y: [20, 0] },
    { duration: 0.5, easing: 'ease-in-out' }
  );
};

export const slideDown = (element: HTMLElement) => {
  animate(
    element,
    { opacity: [0, 1], y: [-20, 0] },
    { duration: 0.5, easing: 'ease-in-out' }
  );
};

export const animateInView = (selector: string, animationFn: (el: HTMLElement) => void, delay = 0) => {
  const elements = document.querySelectorAll(selector);
  
  elements.forEach((element) => {
    inView(element as HTMLElement, (entry) => {
      setTimeout(() => {
        animationFn(element as HTMLElement);
      }, delay);
    });
  });
};

export const staggerElements = (selector: string, staggerTime = 0.1) => {
  const elements = document.querySelectorAll(selector);
  
  if (elements.length > 0) {
    inView(elements[0] as HTMLElement, (entry) => {
      animate(
        elements as any,
        { opacity: [0, 1], y: [20, 0] },
        { 
          delay: stagger(staggerTime),
          duration: 0.5,
          easing: 'ease-in-out'
        }
      );
    });
  }
};

export default {
  fadeIn,
  slideUp,
  slideDown,
  animateInView,
  staggerElements
};
