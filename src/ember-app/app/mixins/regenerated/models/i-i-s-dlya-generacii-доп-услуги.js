import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  описУслуги: DS.attr('string'),
  стоимость: DS.attr('decimal'),
  услуга: DS.attr('string')
});

export let ValidationRules = {
  описУслуги: {
    descriptionKey: 'models.i-i-s-dlya-generacii-доп-услуги.validations.описУслуги.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  стоимость: {
    descriptionKey: 'models.i-i-s-dlya-generacii-доп-услуги.validations.стоимость.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  услуга: {
    descriptionKey: 'models.i-i-s-dlya-generacii-доп-услуги.validations.услуга.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДопУслугиE', 'i-i-s-dlya-generacii-доп-услуги', {
    услуга: attr('Услуга', { index: 0 }),
    описУслуги: attr('Опис услуги', { index: 1 }),
    стоимость: attr('Стоимость', { index: 2 })
  });

  modelClass.defineProjection('ДопУслугиL', 'i-i-s-dlya-generacii-доп-услуги', {
    услуга: attr('Услуга', { index: 0 }),
    описУслуги: attr('Опис услуги', { index: 1 }),
    стоимость: attr('Стоимость', { index: 2 })
  });
};
