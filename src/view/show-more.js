import { createElement } from "../utils";

const createShowMoreTemplate = () => {
  return `<button class="films-list__show-more">Show more</button>`;
};

export default class MoreTamplate {
  constructor () {
    this._element = null;
  }

  getTemplate(){
    return createShowMoreTemplate();
  }

  getElement(){
    if(!this._element){
      return createElement(this.getTemplate());
    }
  }

  removeElement() {
    this._element = null;
  }
}
