import {
  defineNamespace,
  defineProjections,
  Model as ТЧПереченьУслMixin
} from '../mixins/regenerated/models/i-i-s-dlya-generacii-т-ч-перечень-усл';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧПереченьУслMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
