import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.dlya-generacii.caption'),
          title: i18n.t('forms.application.sitemap.dlya-generacii.title'),
          children: [{
            link: 'i-i-s-dlya-generacii-т-ч-состав-ущерба-l',
            caption: i18n.t('forms.application.sitemap.dlya-generacii.i-i-s-dlya-generacii-т-ч-состав-ущерба-l.caption'),
            title: i18n.t('forms.application.sitemap.dlya-generacii.i-i-s-dlya-generacii-т-ч-состав-ущерба-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-dlya-generacii-доп-услуги-l',
            caption: i18n.t('forms.application.sitemap.dlya-generacii.i-i-s-dlya-generacii-доп-услуги-l.caption'),
            title: i18n.t('forms.application.sitemap.dlya-generacii.i-i-s-dlya-generacii-доп-услуги-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-dlya-generacii-персонал-l',
            caption: i18n.t('forms.application.sitemap.dlya-generacii.i-i-s-dlya-generacii-персонал-l.caption'),
            title: i18n.t('forms.application.sitemap.dlya-generacii.i-i-s-dlya-generacii-персонал-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-dlya-generacii-т-ч-состав-жалобы-l',
            caption: i18n.t('forms.application.sitemap.dlya-generacii.i-i-s-dlya-generacii-т-ч-состав-жалобы-l.caption'),
            title: i18n.t('forms.application.sitemap.dlya-generacii.i-i-s-dlya-generacii-т-ч-состав-жалобы-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-dlya-generacii-клиенты-l',
            caption: i18n.t('forms.application.sitemap.dlya-generacii.i-i-s-dlya-generacii-клиенты-l.caption'),
            title: i18n.t('forms.application.sitemap.dlya-generacii.i-i-s-dlya-generacii-клиенты-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-dlya-generacii-жалоба-клиента-l',
            caption: i18n.t('forms.application.sitemap.dlya-generacii.i-i-s-dlya-generacii-жалоба-клиента-l.caption'),
            title: i18n.t('forms.application.sitemap.dlya-generacii.i-i-s-dlya-generacii-жалоба-клиента-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-dlya-generacii-должности-l',
            caption: i18n.t('forms.application.sitemap.dlya-generacii.i-i-s-dlya-generacii-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.dlya-generacii.i-i-s-dlya-generacii-должности-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-dlya-generacii-организация-l',
            caption: i18n.t('forms.application.sitemap.dlya-generacii.i-i-s-dlya-generacii-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.dlya-generacii.i-i-s-dlya-generacii-организация-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-dlya-generacii-т-ч-перечень-усл-l',
            caption: i18n.t('forms.application.sitemap.dlya-generacii.i-i-s-dlya-generacii-т-ч-перечень-усл-l.caption'),
            title: i18n.t('forms.application.sitemap.dlya-generacii.i-i-s-dlya-generacii-т-ч-перечень-усл-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-dlya-generacii-виды-ущерба-l',
            caption: i18n.t('forms.application.sitemap.dlya-generacii.i-i-s-dlya-generacii-виды-ущерба-l.caption'),
            title: i18n.t('forms.application.sitemap.dlya-generacii.i-i-s-dlya-generacii-виды-ущерба-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-dlya-generacii-акт-наруш-правил-l',
            caption: i18n.t('forms.application.sitemap.dlya-generacii.i-i-s-dlya-generacii-акт-наруш-правил-l.caption'),
            title: i18n.t('forms.application.sitemap.dlya-generacii.i-i-s-dlya-generacii-акт-наруш-правил-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-dlya-generacii-квит-доп-услуг-l',
            caption: i18n.t('forms.application.sitemap.dlya-generacii.i-i-s-dlya-generacii-квит-доп-услуг-l.caption'),
            title: i18n.t('forms.application.sitemap.dlya-generacii.i-i-s-dlya-generacii-квит-доп-услуг-l.title'),
            icon: 'folder',
            children: null
          }]
        }
      ]
    };
  }),
})