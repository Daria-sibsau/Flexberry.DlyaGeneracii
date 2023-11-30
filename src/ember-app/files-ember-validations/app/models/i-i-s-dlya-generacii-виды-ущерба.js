import {
  defineNamespace,
  defineProjections,
  Model as ВидыУщербаMixin
} from '../mixins/regenerated/models/i-i-s-dlya-generacii-виды-ущерба';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ВидыУщербаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
