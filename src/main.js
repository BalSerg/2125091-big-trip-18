import {PointRoute} from 'view/point-route';
import {CreateFilters} from 'view/filters';
import {FormEdit} from 'view/form-edit';
import {Sort} from 'view/sort';
import {FormCreate} from 'view/form-create';
import {TripView} from 'view/trip-view';

import {TripPresenter} from 'view/presenter'

const siteMainElement = document.querySelector('.main');

const tripPresenter = new TripPresenter();

tripPresenter.init(siteMainElement);



