import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЖалобаКлиентаMixin
} from '../mixins/regenerated/models/i-i-s-dlya-generacii-жалоба-клиента';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЖалобаКлиентаMixin, Validations, {
});

defineProjections(Model);

export default Model;
