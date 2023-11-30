import {
  defineNamespace,
  defineProjections,
  Model as ЖалобаКлиентаMixin
} from '../mixins/regenerated/models/i-i-s-dlya-generacii-жалоба-клиента';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЖалобаКлиентаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
