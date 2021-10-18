const springTransition = {
  type: 'spring',
  duration: 0.8,
}

const scaleY = {
  initial: {
    opacity: 0,
    scaleY: 0.8,
  },
  animate: (delay = 0) => ({
    opacity: 1,
    scaleY: 1,
    transition: { delay, ...springTransition },
  }),
}

const slideLeft = {
  initial: { x: -50, opacity: 0 },
  animate: (delay = 0) => ({
    x: 0,
    opacity: 1,
    transition: { ...springTransition, delay },
  }),
}

const slideRight = {
  initial: { x: 50, opacity: 0 },
  animate: (delay = 0) => ({
    x: 0,
    opacity: 1,
    transition: { ...springTransition, delay },
  }),
}

const slideTop = {
  initial: { y: -50, opacity: 0 },
  animate: (delay = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 0.4,
      delay,
    },
  }),
}

export { scaleY, slideLeft, slideRight, slideTop }
