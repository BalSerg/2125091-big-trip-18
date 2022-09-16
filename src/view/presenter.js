import PointRoute from './point-route.js';
import CreateFilters from './filters.js';
import FormEdit from './form-edit.js';
import Sort from './sort.js';
import FormCreate from './form-create.js';

import {render} from '../render.js';
import TripView from './trip-view.js';

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
