
const POSITION = 'beforeend';

//Функция создания DOM элементов
const render = (container, template) => {
  container.insertAdjacentHTML(POSITION, template);
};


const getRandom = (a = 0, b = 1) => {

  const initial = Math.ceil(Math.min(a,b));
  const final = Math.floor(Math.max(a,b));

  return Math.floor(initial + Math.random() * (final - initial + 1));
};

export { render, getRandom };
