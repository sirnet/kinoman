
const POSITION = 'beforeend';

export const render = (container, template) => {
  container.append(template);
};

export const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;
  return newElement.firstChild;
};

export const getRandom = (a = 0, b = 1) => {

  const initial = Math.ceil(Math.min(a,b));
  const final = Math.floor(Math.max(a,b));

  return Math.floor(initial + Math.random() * (final - initial + 1));
};

