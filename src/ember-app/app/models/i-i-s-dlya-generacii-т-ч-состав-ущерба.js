import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТЧСоставУщербаMixin
} from '../mixins/regenerated/models/i-i-s-dlya-generacii-т-ч-состав-ущерба';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧСоставУщербаMixin, Validations, {
});

defineProjections(Model);

export default Model;
