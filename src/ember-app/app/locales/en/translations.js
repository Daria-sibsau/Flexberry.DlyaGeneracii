import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISDlya_generaciiАктНарушПравилLForm from './forms/i-i-s-dlya-generacii-акт-наруш-правил-l';
import IISDlya_generaciiВидыУщербаLForm from './forms/i-i-s-dlya-generacii-виды-ущерба-l';
import IISDlya_generaciiДолжностиLForm from './forms/i-i-s-dlya-generacii-должности-l';
import IISDlya_generaciiДопУслугиLForm from './forms/i-i-s-dlya-generacii-доп-услуги-l';
import IISDlya_generaciiЖалобаКлиентаLForm from './forms/i-i-s-dlya-generacii-жалоба-клиента-l';
import IISDlya_generaciiКвитДопУслугLForm from './forms/i-i-s-dlya-generacii-квит-доп-услуг-l';
import IISDlya_generaciiКлиентыLForm from './forms/i-i-s-dlya-generacii-клиенты-l';
import IISDlya_generaciiОрганизацияLForm from './forms/i-i-s-dlya-generacii-организация-l';
import IISDlya_generaciiПерсоналLForm from './forms/i-i-s-dlya-generacii-персонал-l';
import IISDlya_generaciiТЧПереченьУслLForm from './forms/i-i-s-dlya-generacii-т-ч-перечень-усл-l';
import IISDlya_generaciiТЧСоставЖалобыLForm from './forms/i-i-s-dlya-generacii-т-ч-состав-жалобы-l';
import IISDlya_generaciiТЧСоставУщербаLForm from './forms/i-i-s-dlya-generacii-т-ч-состав-ущерба-l';
import IISDlya_generaciiАктНарушПравилEForm from './forms/i-i-s-dlya-generacii-акт-наруш-правил-e';
import IISDlya_generaciiВидыУщербаEForm from './forms/i-i-s-dlya-generacii-виды-ущерба-e';
import IISDlya_generaciiДолжностиEForm from './forms/i-i-s-dlya-generacii-должности-e';
import IISDlya_generaciiДопУслугиEForm from './forms/i-i-s-dlya-generacii-доп-услуги-e';
import IISDlya_generaciiЖалобаКлиентаEForm from './forms/i-i-s-dlya-generacii-жалоба-клиента-e';
import IISDlya_generaciiКвитДопУслугEForm from './forms/i-i-s-dlya-generacii-квит-доп-услуг-e';
import IISDlya_generaciiКлиентыEForm from './forms/i-i-s-dlya-generacii-клиенты-e';
import IISDlya_generaciiОрганизацияEForm from './forms/i-i-s-dlya-generacii-организация-e';
import IISDlya_generaciiПерсоналEForm from './forms/i-i-s-dlya-generacii-персонал-e';
import IISDlya_generaciiТЧПереченьУслEForm from './forms/i-i-s-dlya-generacii-т-ч-перечень-усл-e';
import IISDlya_generaciiТЧСоставЖалобыEForm from './forms/i-i-s-dlya-generacii-т-ч-состав-жалобы-e';
import IISDlya_generaciiТЧСоставУщербаEForm from './forms/i-i-s-dlya-generacii-т-ч-состав-ущерба-e';
import IISDlya_generaciiАктНарушПравилModel from './models/i-i-s-dlya-generacii-акт-наруш-правил';
import IISDlya_generaciiВидыУщербаModel from './models/i-i-s-dlya-generacii-виды-ущерба';
import IISDlya_generaciiДолжностиModel from './models/i-i-s-dlya-generacii-должности';
import IISDlya_generaciiДопУслугиModel from './models/i-i-s-dlya-generacii-доп-услуги';
import IISDlya_generaciiЖалобаКлиентаModel from './models/i-i-s-dlya-generacii-жалоба-клиента';
import IISDlya_generaciiКвитДопУслугModel from './models/i-i-s-dlya-generacii-квит-доп-услуг';
import IISDlya_generaciiКлиентыModel from './models/i-i-s-dlya-generacii-клиенты';
import IISDlya_generaciiОрганизацияModel from './models/i-i-s-dlya-generacii-организация';
import IISDlya_generaciiПерсоналModel from './models/i-i-s-dlya-generacii-персонал';
import IISDlya_generaciiТЧПереченьУслModel from './models/i-i-s-dlya-generacii-т-ч-перечень-усл';
import IISDlya_generaciiТЧСоставЖалобыModel from './models/i-i-s-dlya-generacii-т-ч-состав-жалобы';
import IISDlya_generaciiТЧСоставУщербаModel from './models/i-i-s-dlya-generacii-т-ч-состав-ущерба';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-dlya-generacii-акт-наруш-правил': IISDlya_generaciiАктНарушПравилModel,
    'i-i-s-dlya-generacii-виды-ущерба': IISDlya_generaciiВидыУщербаModel,
    'i-i-s-dlya-generacii-должности': IISDlya_generaciiДолжностиModel,
    'i-i-s-dlya-generacii-доп-услуги': IISDlya_generaciiДопУслугиModel,
    'i-i-s-dlya-generacii-жалоба-клиента': IISDlya_generaciiЖалобаКлиентаModel,
    'i-i-s-dlya-generacii-квит-доп-услуг': IISDlya_generaciiКвитДопУслугModel,
    'i-i-s-dlya-generacii-клиенты': IISDlya_generaciiКлиентыModel,
    'i-i-s-dlya-generacii-организация': IISDlya_generaciiОрганизацияModel,
    'i-i-s-dlya-generacii-персонал': IISDlya_generaciiПерсоналModel,
    'i-i-s-dlya-generacii-т-ч-перечень-усл': IISDlya_generaciiТЧПереченьУслModel,
    'i-i-s-dlya-generacii-т-ч-состав-жалобы': IISDlya_generaciiТЧСоставЖалобыModel,
    'i-i-s-dlya-generacii-т-ч-состав-ущерба': IISDlya_generaciiТЧСоставУщербаModel
  },

  'application-name': 'Dlya_generacii',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Dlya_generacii',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Dlya_generacii',
          title: 'Dlya_generacii'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'dlya-generacii': {
          caption: 'Dlya_generacii',
          title: 'Dlya_generacii',
          'i-i-s-dlya-generacii-т-ч-состав-ущерба-l': {
            caption: 'Т ч состав ущерба',
            title: ''
          },
          'i-i-s-dlya-generacii-доп-услуги-l': {
            caption: 'Доп услуги',
            title: ''
          },
          'i-i-s-dlya-generacii-персонал-l': {
            caption: 'Персонал',
            title: ''
          },
          'i-i-s-dlya-generacii-т-ч-состав-жалобы-l': {
            caption: 'Т ч состав жалобы',
            title: ''
          },
          'i-i-s-dlya-generacii-клиенты-l': {
            caption: 'Клиенты',
            title: ''
          },
          'i-i-s-dlya-generacii-жалоба-клиента-l': {
            caption: 'Жалоба клиента',
            title: ''
          },
          'i-i-s-dlya-generacii-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-dlya-generacii-организация-l': {
            caption: 'Организация',
            title: ''
          },
          'i-i-s-dlya-generacii-т-ч-перечень-усл-l': {
            caption: 'Т ч перечень усл',
            title: ''
          },
          'i-i-s-dlya-generacii-виды-ущерба-l': {
            caption: 'Виды ущерба',
            title: ''
          },
          'i-i-s-dlya-generacii-акт-наруш-правил-l': {
            caption: 'Акт наруш правил',
            title: ''
          },
          'i-i-s-dlya-generacii-квит-доп-услуг-l': {
            caption: 'Квит доп услуг',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-dlya-generacii-акт-наруш-правил-l': IISDlya_generaciiАктНарушПравилLForm,
    'i-i-s-dlya-generacii-виды-ущерба-l': IISDlya_generaciiВидыУщербаLForm,
    'i-i-s-dlya-generacii-должности-l': IISDlya_generaciiДолжностиLForm,
    'i-i-s-dlya-generacii-доп-услуги-l': IISDlya_generaciiДопУслугиLForm,
    'i-i-s-dlya-generacii-жалоба-клиента-l': IISDlya_generaciiЖалобаКлиентаLForm,
    'i-i-s-dlya-generacii-квит-доп-услуг-l': IISDlya_generaciiКвитДопУслугLForm,
    'i-i-s-dlya-generacii-клиенты-l': IISDlya_generaciiКлиентыLForm,
    'i-i-s-dlya-generacii-организация-l': IISDlya_generaciiОрганизацияLForm,
    'i-i-s-dlya-generacii-персонал-l': IISDlya_generaciiПерсоналLForm,
    'i-i-s-dlya-generacii-т-ч-перечень-усл-l': IISDlya_generaciiТЧПереченьУслLForm,
    'i-i-s-dlya-generacii-т-ч-состав-жалобы-l': IISDlya_generaciiТЧСоставЖалобыLForm,
    'i-i-s-dlya-generacii-т-ч-состав-ущерба-l': IISDlya_generaciiТЧСоставУщербаLForm,
    'i-i-s-dlya-generacii-акт-наруш-правил-e': IISDlya_generaciiАктНарушПравилEForm,
    'i-i-s-dlya-generacii-виды-ущерба-e': IISDlya_generaciiВидыУщербаEForm,
    'i-i-s-dlya-generacii-должности-e': IISDlya_generaciiДолжностиEForm,
    'i-i-s-dlya-generacii-доп-услуги-e': IISDlya_generaciiДопУслугиEForm,
    'i-i-s-dlya-generacii-жалоба-клиента-e': IISDlya_generaciiЖалобаКлиентаEForm,
    'i-i-s-dlya-generacii-квит-доп-услуг-e': IISDlya_generaciiКвитДопУслугEForm,
    'i-i-s-dlya-generacii-клиенты-e': IISDlya_generaciiКлиентыEForm,
    'i-i-s-dlya-generacii-организация-e': IISDlya_generaciiОрганизацияEForm,
    'i-i-s-dlya-generacii-персонал-e': IISDlya_generaciiПерсоналEForm,
    'i-i-s-dlya-generacii-т-ч-перечень-усл-e': IISDlya_generaciiТЧПереченьУслEForm,
    'i-i-s-dlya-generacii-т-ч-состав-жалобы-e': IISDlya_generaciiТЧСоставЖалобыEForm,
    'i-i-s-dlya-generacii-т-ч-состав-ущерба-e': IISDlya_generaciiТЧСоставУщербаEForm
  },

});

export default translations;
