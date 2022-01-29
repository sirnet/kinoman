import { createSiteMenuTemplate } from './view/site-menu.js';

const siteMain = document.querySelector('.main');

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

render(siteMain, createSiteMenuTemplate(), 'beforeend');
