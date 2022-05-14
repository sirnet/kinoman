import Abstract from './abstract'

export const RenderPosition = {
  'BEFOREEND' : 'beforeend',
  'AFTEREND'  : 'afterend'
};

export const render = (container, templated, place) => {
  if (container instanceof Abstract) {
    container = container.getElement();
  }

  if (templated instanceof Abstract) {
    templated = templated.getElement();
  }

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

export const replace = (newChild, oldChild) => {
  if (oldChild instanceof Abstract){
    oldChild = oldChild.getElement();
  }

  if (newChild instanceof Abstract) {
    newChild = newChild.getElement();
  }

  const parent = oldChild.parentElement;

  if (parent === null || oldChild === null || newChild === null) {
    throw new Error('Can\'t replace unexisting elements');
  }

  parent.replaceChild(newChild, oldChild);
};

export const remove = (component) => {
  if (!(component instanceof Abstract)) {
    throw new Error('Can remove only components');
  }

  component.getElement().remove();
  component.removeElement();
};
