import {
  defineNamespace,
  defineProjections,
  Model as ТЧСоставУщербаMixin
} from '../mixins/regenerated/models/i-i-s-dlya-generacii-т-ч-состав-ущерба';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧСоставУщербаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
