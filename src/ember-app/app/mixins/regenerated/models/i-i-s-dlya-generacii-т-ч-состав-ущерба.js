import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  суммаУщерба: DS.attr('decimal'),
  видыУщерба: DS.belongsTo('i-i-s-dlya-generacii-виды-ущерба', { inverse: null, async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-dlya-generacii-т-ч-состав-ущерба.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  суммаУщерба: {
    descriptionKey: 'models.i-i-s-dlya-generacii-т-ч-состав-ущерба.validations.суммаУщерба.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  видыУщерба: {
    descriptionKey: 'models.i-i-s-dlya-generacii-т-ч-состав-ущерба.validations.видыУщерба.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧСоставУщербаE', 'i-i-s-dlya-generacii-т-ч-состав-ущерба', {
    суммаУщерба: attr('Сумма ущерба', { index: 0 }),
    количество: attr('Количество', { index: 1 }),
    видыУщерба: belongsTo('i-i-s-dlya-generacii-виды-ущерба', 'Виды ущерба', {
      видУщерба: attr('Вид ущерба', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'видУщерба' })
  });

  modelClass.defineProjection('ТЧСоставУщербаL', 'i-i-s-dlya-generacii-т-ч-состав-ущерба', {
    суммаУщерба: attr('Сумма ущерба', { index: 0 }),
    количество: attr('Количество', { index: 1 }),
    видыУщерба: belongsTo('i-i-s-dlya-generacii-виды-ущерба', 'Вид ущерба', {
      видУщерба: attr('Вид ущерба', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
