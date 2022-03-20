import { createElement } from "../utils";

const creatSectionFilms = () => {
  return `<section class="films">
  <section class="films-list">
    <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
    <div class="films-list__container">
    </div>
  </section>
  </section>`;
};

export default class SectionFilms {
  constructor (){
    this._element = null;
  }

  getTemplate(){
    return creatSectionFilms();
  }

  getElement() {
    if(!this._element) {
      return createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement(){
    this._element = null;
  }
}
