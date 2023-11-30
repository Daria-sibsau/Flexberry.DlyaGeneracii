import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номер: DS.attr('number'),
  клиенты: DS.belongsTo('i-i-s-dlya-generacii-клиенты', { inverse: null, async: false }),
  организация: DS.belongsTo('i-i-s-dlya-generacii-организация', { inverse: null, async: false }),
  тЧСоставЖалобы: DS.belongsTo('i-i-s-dlya-generacii-т-ч-состав-жалобы', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-dlya-generacii-жалоба-клиента.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-dlya-generacii-жалоба-клиента.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  клиенты: {
    descriptionKey: 'models.i-i-s-dlya-generacii-жалоба-клиента.validations.клиенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-dlya-generacii-жалоба-клиента.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧСоставЖалобы: {
    descriptionKey: 'models.i-i-s-dlya-generacii-жалоба-клиента.validations.тЧСоставЖалобы.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЖалобаКлиентаE', 'i-i-s-dlya-generacii-жалоба-клиента', {
    дата: attr('Дата', { index: 0 }),
    номер: attr('Номер', { index: 1 }),
    клиенты: belongsTo('i-i-s-dlya-generacii-клиенты', 'Клиенты', {
      фИО: attr('ФИО', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'фИО' }),
    тЧСоставЖалобы: belongsTo('i-i-s-dlya-generacii-т-ч-состав-жалобы', 'Т ч состав жалобы', {
      описаниеЖалобы: attr('Описание жалобы', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'описаниеЖалобы' }),
    организация: belongsTo('i-i-s-dlya-generacii-организация', 'Организация', {
      наименование: attr('Наименование', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('ЖалобаКлиентаL', 'i-i-s-dlya-generacii-жалоба-клиента', {
    дата: attr('Дата', { index: 0 }),
    номер: attr('Номер', { index: 1 }),
    организация: belongsTo('i-i-s-dlya-generacii-организация', 'Наименование', {
      наименование: attr('Наименование', { index: 2 })
    }, { index: -1, hidden: true }),
    клиенты: belongsTo('i-i-s-dlya-generacii-клиенты', 'ФИО', {
      фИО: attr('ФИО', { index: 3 }),
      телефон: attr('Телефон', { index: 4 })
    }, { index: -1, hidden: true }),
    тЧСоставЖалобы: belongsTo('i-i-s-dlya-generacii-т-ч-состав-жалобы', 'Описание жалобы', {
      описаниеЖалобы: attr('Описание жалобы', { index: 5 }),
      принятыеМеры: attr('Принятые меры', { index: 6 }),
      персонал: belongsTo('i-i-s-dlya-generacii-персонал', '', {
        должности: belongsTo('i-i-s-dlya-generacii-должности', '', {
          наименование: attr('Ответственный', { index: 7 })
        }, { index: -1, hidden: true }),
        фИО: attr('ФИО', { index: 8 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true })
  });
};
