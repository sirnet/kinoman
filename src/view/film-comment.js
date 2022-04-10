import AbstarctView from "../utils/abstract.js";

const createFilmComment = () => {
  return `<section class="films-list films-list--extra">
    <h2 class="films-list__title">Most commented</h2>
    <div class="films-list__container">
    </div>
  </section>`;
};

export default class FilmTop extends AbstarctView {
  getTemplate () {
    return createFilmComment();
  }
}
