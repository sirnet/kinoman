const PLACE = {
  'BEFOREEND' : 'beforeend',
  'AFTEREND'  : 'afterend'
};

export const render = (container, templated, place) => {
  switch (place) {
    case PLACE.AFTEREND:
      return container.insertAdjacentHTML(PLACE.AFTEREND, templated);
      break;
    case PLACE.BEFOREEND:
      return container.insertAdjacentHTML(PLACE.BEFOREEND, templated);
      break;
  }
}

export const getRandom = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a,b));
  const upper = Math.floor(Math.max(a,b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};
