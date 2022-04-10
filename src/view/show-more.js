import AbstarctView from "../utils/abstract.js";

const createShowMore = () => {
  return `<button class="films-list__show-more">Show more</button>`;
};

export default class ShowMore extends AbstarctView {

  getTemplate () {
    return createShowMore();
  }
}
