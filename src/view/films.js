import AbstarctView from "../utils/abstract";

const createFilmsTemplate = () => {
  return `<section class="films">
  </section>`;
};

export default class Films extends AbstarctView {
  getTemplate () {
    return createFilmsTemplate();
  }
}
