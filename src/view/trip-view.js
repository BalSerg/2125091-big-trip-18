import {createElement} from '../render.js';

const tripViewTemplate = () => {
  `<section class="trip-events"></section>`;
};
export default class TripView {
  getTemplate() {
    return tripViewTemplate();
  }
  getElement() {
    if(!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element
  }
}
