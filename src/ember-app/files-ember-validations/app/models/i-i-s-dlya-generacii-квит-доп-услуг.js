import {
  defineNamespace,
  defineProjections,
  Model as КвитДопУслугMixin
} from '../mixins/regenerated/models/i-i-s-dlya-generacii-квит-доп-услуг';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КвитДопУслугMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
