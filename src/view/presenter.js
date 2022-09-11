import {PointRoute} from './point-route';
import {CreateFilters} from './filters';
import {FormEdit} from './form-edit';
import {Sort} from './sort';
import {FormCreate} from './form-create';

import {render} from '../render';
import TripView from './trip-view';

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
