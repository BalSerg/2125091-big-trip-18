import PointRoute from './view/point-route.js';
import CreateFilters from './view/filters.js';
import FormEdit from './view/form-edit.js';
import Sort from './view/sort.js';
import FormCreate from './view/form-create.js';
import TripView from './view/trip-view.js';

import TripPresenter from './view/presenter.js';

const siteMainElement = document.querySelector('.main');

const tripPresenter = new TripPresenter();

tripPresenter.init(siteMainElement);



