export const RenderPosition = {
  'BEFOREEND' : 'beforeend',
  'AFTEREND'  : 'afterend'
};

export const render = (container, templated, place) => {
  switch (place) {
    case RenderPosition.AFTEREND:
      container.prepend(templated);
      break;
    case RenderPosition.BEFOREEND:
      container.append(templated);
      break;
  }
};

export const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;
  return newElement.firstChild;
};

export const getRandom = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a,b));
  const upper = Math.floor(Math.max(a,b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};
