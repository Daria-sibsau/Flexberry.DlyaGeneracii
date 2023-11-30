import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номерДок: DS.attr('number'),
  клиенты: DS.belongsTo('i-i-s-dlya-generacii-клиенты', { inverse: null, async: false }),
  организация: DS.belongsTo('i-i-s-dlya-generacii-организация', { inverse: null, async: false }),
  персонал: DS.belongsTo('i-i-s-dlya-generacii-персонал', { inverse: null, async: false }),
  тЧСоставУщерба: DS.belongsTo('i-i-s-dlya-generacii-т-ч-состав-ущерба', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-dlya-generacii-акт-наруш-правил.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерДок: {
    descriptionKey: 'models.i-i-s-dlya-generacii-акт-наруш-правил.validations.номерДок.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  клиенты: {
    descriptionKey: 'models.i-i-s-dlya-generacii-акт-наруш-правил.validations.клиенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-dlya-generacii-акт-наруш-правил.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  персонал: {
    descriptionKey: 'models.i-i-s-dlya-generacii-акт-наруш-правил.validations.персонал.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧСоставУщерба: {
    descriptionKey: 'models.i-i-s-dlya-generacii-акт-наруш-правил.validations.тЧСоставУщерба.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('АктНарушПравилE', 'i-i-s-dlya-generacii-акт-наруш-правил', {
    дата: attr('Дата', { index: 0 }),
    номерДок: attr('Номер док', { index: 1 }),
    организация: belongsTo('i-i-s-dlya-generacii-организация', 'Организация', {
      наименование: attr('Наименование', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наименование' }),
    клиенты: belongsTo('i-i-s-dlya-generacii-клиенты', 'Клиенты', {
      фИО: attr('ФИО', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'фИО' }),
    персонал: belongsTo('i-i-s-dlya-generacii-персонал', 'Персонал', {
      фИО: attr('ФИО', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'фИО' }),
    тЧСоставУщерба: belongsTo('i-i-s-dlya-generacii-т-ч-состав-ущерба', 'Т ч состав ущерба', {
      суммаУщерба: attr('Сумма ущерба', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'суммаУщерба' })
  });

  modelClass.defineProjection('АктНарушПравилL', 'i-i-s-dlya-generacii-акт-наруш-правил', {
    дата: attr('Дата', { index: 0 }),
    номерДок: attr('Номер док', { index: 1 }),
    организация: belongsTo('i-i-s-dlya-generacii-организация', 'Наименование', {
      наименование: attr('Наименование', { index: 2 })
    }, { index: -1, hidden: true }),
    клиенты: belongsTo('i-i-s-dlya-generacii-клиенты', 'ФИО', {
      фИО: attr('ФИО', { index: 3 })
    }, { index: -1, hidden: true }),
    персонал: belongsTo('i-i-s-dlya-generacii-персонал', 'ФИО', {
      фИО: attr('ФИО', { index: 4 })
    }, { index: -1, hidden: true }),
    тЧСоставУщерба: belongsTo('i-i-s-dlya-generacii-т-ч-состав-ущерба', 'Сумма ущерба', {
      суммаУщерба: attr('Сумма ущерба', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
