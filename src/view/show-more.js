import { createElement } from "../utils";

const createShowMore = () => {
  return `<button class="films-list__show-more">Show more</button>`;
};

export default class ShowMore {
  constructor () {
    this._element = null;
  }

  getTemplate () {
    return createShowMore();
  }

  getElement () {
    if(!this._element){
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement () {
    this._element = null;
  }
}
