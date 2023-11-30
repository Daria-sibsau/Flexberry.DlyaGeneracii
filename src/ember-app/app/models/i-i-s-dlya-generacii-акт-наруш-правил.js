import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as АктНарушПравилMixin
} from '../mixins/regenerated/models/i-i-s-dlya-generacii-акт-наруш-правил';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(АктНарушПравилMixin, Validations, {
});

defineProjections(Model);

export default Model;
