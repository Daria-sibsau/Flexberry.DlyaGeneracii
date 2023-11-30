import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  сумма: DS.attr('decimal'),
  допУслуги: DS.belongsTo('i-i-s-dlya-generacii-доп-услуги', { inverse: null, async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-dlya-generacii-т-ч-перечень-усл.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-dlya-generacii-т-ч-перечень-усл.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  допУслуги: {
    descriptionKey: 'models.i-i-s-dlya-generacii-т-ч-перечень-усл.validations.допУслуги.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧПереченьУслE', 'i-i-s-dlya-generacii-т-ч-перечень-усл', {
    количество: attr('Количество', { index: 0 }),
    сумма: attr('Сумма', { index: 1 }),
    допУслуги: belongsTo('i-i-s-dlya-generacii-доп-услуги', 'Доп услуги', {
      услуга: attr('Услуга', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'услуга' })
  });

  modelClass.defineProjection('ТЧПереченьУслL', 'i-i-s-dlya-generacii-т-ч-перечень-усл', {
    количество: attr('Количество', { index: 0 }),
    сумма: attr('Сумма', { index: 1 }),
    допУслуги: belongsTo('i-i-s-dlya-generacii-доп-услуги', 'Услуга', {
      услуга: attr('Услуга', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
