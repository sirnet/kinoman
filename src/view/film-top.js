import AbstarctView from "../utils/abstract.js";

const createFilmTop = () => {
  return `<section class="films-list films-list--extra">
    <h2 class="films-list__title">Top rated</h2>
    <div class="films-list__container">
    </div>
  </section>`;
};

export default class FilmTop extends AbstarctView {
  getTemplate () {
    return createFilmTop();
  }
}
