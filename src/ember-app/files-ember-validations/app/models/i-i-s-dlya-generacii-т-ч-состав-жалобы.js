import {
  defineNamespace,
  defineProjections,
  Model as ТЧСоставЖалобыMixin
} from '../mixins/regenerated/models/i-i-s-dlya-generacii-т-ч-состав-жалобы';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧСоставЖалобыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
