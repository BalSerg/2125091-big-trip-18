import {createElement} from "../render";

const tripViewTemplate = () => {
  `<section class="trip-events"></section>`
}

export default class TripView {
  getTemplate() {
    return tripViewTemplate();
  }

  getElement() {
    if(!this.element) {
      this.element = createElement(this.getTemplate());
    }
  }
}
