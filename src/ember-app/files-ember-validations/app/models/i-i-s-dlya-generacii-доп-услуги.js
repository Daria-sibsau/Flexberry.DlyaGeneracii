import {
  defineNamespace,
  defineProjections,
  Model as ДопУслугиMixin
} from '../mixins/regenerated/models/i-i-s-dlya-generacii-доп-услуги';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДопУслугиMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
