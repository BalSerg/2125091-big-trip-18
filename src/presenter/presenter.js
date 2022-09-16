import PointRoute from '../view/point-route.js';
import CreateFilters from '../view/filters.js';
import FormEdit from '../view/form-edit.js';
import Sort from '../view/sort.js';
import FormCreate from '../view/form-create.js';

import {render} from '../render.js';
import TripView from '../view/trip-view.js';

export default class TripPresenter {
  tripComponent = new TripView();

  init = (tripContainer) => {
    this.tripContainer = tripContainer;

    render(new PointRoute, this.tripComponent.getElement());
    render(new CreateFilters, this.tripComponent.getElement());
    render(new FormEdit, this.tripComponent.getElement());
    render(new Sort, this.tripComponent.getElement());
    render(new FormCreate, this.tripComponent.getElement());
  };
}
