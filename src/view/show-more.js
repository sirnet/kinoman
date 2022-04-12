import AbstarctView from "../utils/abstract.js";

const createShowMore = () => {
  return `<button class="films-list__show-more">Show more</button>`;
};

export default class ShowMore extends AbstarctView {
  constructor () {
    super();

    this._clickHandler = this._clickHandler.bind(this);
  }

  getTemplate () {
    return createShowMore();
  }

  _clickHandler (evt) {
    evt.preventDefault();
    this._callback.click();
  }

  setClickHandler (callback) {
    this._callback.click = callback;
    this.getElement().addEventListener('click', this._clickHandler);
  }
}
