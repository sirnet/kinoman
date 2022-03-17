import { createElement } from "../utils";

const createMostCommentTemplated = () => {
  return `<section class="films-list films-list--extra">
  <h2 class="films-list__title">Most commented</h2>
  <div class="films-list__container">
  </div>
  </section>`;
};

export default class CommentTemplated {
  constructor () {
    this._element = null;
  }

  getTemplate(){
    return createMostCommentTemplated();
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
