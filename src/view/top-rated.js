import { createElement } from "../utils";

const createSectionTopFilms = () => {
  return `<section class="films-list films-list--extra">
  <h2 class="films-list__title">Top rated</h2>
  <div class="films-list__container">
  </div>
  </section>`
};

export default class TopFilms {
  constructor () {
    this._element = null;
  }

  getTemplate(){
    return createSectionTopFilms();
  }

  getElement(){
    if(!this._element){
      return createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement(){
    this._element = null;
  }

}
