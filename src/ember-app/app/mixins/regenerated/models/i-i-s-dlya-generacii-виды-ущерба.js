import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  видУщерба: DS.attr('string'),
  стоимость: DS.attr('decimal')
});

export let ValidationRules = {
  видУщерба: {
    descriptionKey: 'models.i-i-s-dlya-generacii-виды-ущерба.validations.видУщерба.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  стоимость: {
    descriptionKey: 'models.i-i-s-dlya-generacii-виды-ущерба.validations.стоимость.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВидыУщербаE', 'i-i-s-dlya-generacii-виды-ущерба', {
    видУщерба: attr('Вид ущерба', { index: 0 }),
    стоимость: attr('Стоимость', { index: 1 })
  });

  modelClass.defineProjection('ВидыУщербаL', 'i-i-s-dlya-generacii-виды-ущерба', {
    видУщерба: attr('Вид ущерба', { index: 0 }),
    стоимость: attr('Стоимость', { index: 1 })
  });
};
