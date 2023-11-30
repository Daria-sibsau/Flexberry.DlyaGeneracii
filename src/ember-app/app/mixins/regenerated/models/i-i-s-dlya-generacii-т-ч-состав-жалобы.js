import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  описаниеЖалобы: DS.attr('string'),
  принятыеМеры: DS.attr('string'),
  персонал: DS.belongsTo('i-i-s-dlya-generacii-персонал', { inverse: null, async: false })
});

export let ValidationRules = {
  описаниеЖалобы: {
    descriptionKey: 'models.i-i-s-dlya-generacii-т-ч-состав-жалобы.validations.описаниеЖалобы.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  принятыеМеры: {
    descriptionKey: 'models.i-i-s-dlya-generacii-т-ч-состав-жалобы.validations.принятыеМеры.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  персонал: {
    descriptionKey: 'models.i-i-s-dlya-generacii-т-ч-состав-жалобы.validations.персонал.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧСоставЖалобыE', 'i-i-s-dlya-generacii-т-ч-состав-жалобы', {
    описаниеЖалобы: attr('Описание жалобы', { index: 0 }),
    принятыеМеры: attr('Принятые меры', { index: 1 }),
    персонал: belongsTo('i-i-s-dlya-generacii-персонал', 'Персонал', {
      фИО: attr('ФИО', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('ТЧСоставЖалобыL', 'i-i-s-dlya-generacii-т-ч-состав-жалобы', {
    описаниеЖалобы: attr('Описание жалобы', { index: 0 }),
    принятыеМеры: attr('Принятые меры', { index: 1 }),
    персонал: belongsTo('i-i-s-dlya-generacii-персонал', 'ФИО', {
      фИО: attr('ФИО', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
