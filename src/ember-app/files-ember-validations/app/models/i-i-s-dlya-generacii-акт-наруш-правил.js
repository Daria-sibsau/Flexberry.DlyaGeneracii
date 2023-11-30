import {
  defineNamespace,
  defineProjections,
  Model as АктНарушПравилMixin
} from '../mixins/regenerated/models/i-i-s-dlya-generacii-акт-наруш-правил';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(АктНарушПравилMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
