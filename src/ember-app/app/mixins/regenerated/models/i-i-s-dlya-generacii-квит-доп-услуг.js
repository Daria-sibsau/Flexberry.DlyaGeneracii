import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  итогСтоим: DS.attr('decimal'),
  номерКвит: DS.attr('number'),
  клиенты: DS.belongsTo('i-i-s-dlya-generacii-клиенты', { inverse: null, async: false }),
  организация: DS.belongsTo('i-i-s-dlya-generacii-организация', { inverse: null, async: false }),
  тЧПереченьУсл: DS.belongsTo('i-i-s-dlya-generacii-т-ч-перечень-усл', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-dlya-generacii-квит-доп-услуг.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  итогСтоим: {
    descriptionKey: 'models.i-i-s-dlya-generacii-квит-доп-услуг.validations.итогСтоим.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  номерКвит: {
    descriptionKey: 'models.i-i-s-dlya-generacii-квит-доп-услуг.validations.номерКвит.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  клиенты: {
    descriptionKey: 'models.i-i-s-dlya-generacii-квит-доп-услуг.validations.клиенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-dlya-generacii-квит-доп-услуг.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧПереченьУсл: {
    descriptionKey: 'models.i-i-s-dlya-generacii-квит-доп-услуг.validations.тЧПереченьУсл.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КвитДопУслугE', 'i-i-s-dlya-generacii-квит-доп-услуг', {
    дата: attr('Дата', { index: 0 }),
    номерКвит: attr('Номер квит', { index: 1 }),
    итогСтоим: attr('Итог стоим', { index: 2 }),
    клиенты: belongsTo('i-i-s-dlya-generacii-клиенты', 'Клиенты', {
      фИО: attr('ФИО', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'фИО' }),
    тЧПереченьУсл: belongsTo('i-i-s-dlya-generacii-т-ч-перечень-усл', 'Т ч перечень усл', {
      количество: attr('Количество', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'количество' }),
    организация: belongsTo('i-i-s-dlya-generacii-организация', 'Организация', {
      наименование: attr('Наименование', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('КвитДопУслугL', 'i-i-s-dlya-generacii-квит-доп-услуг', {
    дата: attr('Дата', { index: 0 }),
    номерКвит: attr('Номер квит', { index: 1 }),
    итогСтоим: attr('Итог стоим', { index: 2 }),
    клиенты: belongsTo('i-i-s-dlya-generacii-клиенты', 'ФИО', {
      фИО: attr('ФИО', { index: 3 })
    }, { index: -1, hidden: true }),
    тЧПереченьУсл: belongsTo('i-i-s-dlya-generacii-т-ч-перечень-усл', 'Количество', {
      количество: attr('Количество', { index: 4 })
    }, { index: -1, hidden: true }),
    организация: belongsTo('i-i-s-dlya-generacii-организация', 'Наименование', {
      наименование: attr('Наименование', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
