import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаВыдачи: DS.attr('date'),
  датаРождения: DS.attr('date'),
  иноГражданин: DS.attr('boolean'),
  кемВыдан: DS.attr('string'),
  номерКомнаты: DS.attr('number'),
  номерПаспорта: DS.attr('number'),
  почта: DS.attr('string'),
  телефон: DS.attr('number'),
  фИО: DS.attr('string')
});

export let ValidationRules = {
  датаВыдачи: {
    descriptionKey: 'models.i-i-s-dlya-generacii-клиенты.validations.датаВыдачи.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаРождения: {
    descriptionKey: 'models.i-i-s-dlya-generacii-клиенты.validations.датаРождения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  иноГражданин: {
    descriptionKey: 'models.i-i-s-dlya-generacii-клиенты.validations.иноГражданин.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кемВыдан: {
    descriptionKey: 'models.i-i-s-dlya-generacii-клиенты.validations.кемВыдан.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерКомнаты: {
    descriptionKey: 'models.i-i-s-dlya-generacii-клиенты.validations.номерКомнаты.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерПаспорта: {
    descriptionKey: 'models.i-i-s-dlya-generacii-клиенты.validations.номерПаспорта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  почта: {
    descriptionKey: 'models.i-i-s-dlya-generacii-клиенты.validations.почта.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-dlya-generacii-клиенты.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-dlya-generacii-клиенты.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлиентыE', 'i-i-s-dlya-generacii-клиенты', {
    фИО: attr('ФИО', { index: 0 }),
    телефон: attr('Телефон', { index: 1 }),
    почта: attr('Почта', { index: 2 }),
    номерПаспорта: attr('Номер паспорта', { index: 3 }),
    кемВыдан: attr('Кем выдан', { index: 4 }),
    датаВыдачи: attr('Дата выдачи', { index: 5 }),
    иноГражданин: attr('Ино гражданин', { index: 6 }),
    номерКомнаты: attr('Номер комнаты', { index: 7 }),
    датаРождения: attr('Дата рождения', { index: 8 })
  });

  modelClass.defineProjection('КлиентыL', 'i-i-s-dlya-generacii-клиенты', {
    фИО: attr('ФИО', { index: 0 }),
    телефон: attr('Телефон', { index: 1 }),
    почта: attr('Почта', { index: 2 }),
    номерПаспорта: attr('Номер паспорта', { index: 3 }),
    кемВыдан: attr('Кем выдан', { index: 4 }),
    датаВыдачи: attr('Дата выдачи', { index: 5 }),
    иноГражданин: attr('Ино гражданин', { index: 6 }),
    номерКомнаты: attr('Номер комнаты', { index: 7 }),
    датаРождения: attr('Дата рождения', { index: 8 })
  });
};
