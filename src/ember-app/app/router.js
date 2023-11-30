import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-dlya-generacii-акт-наруш-правил-l');
  this.route('i-i-s-dlya-generacii-акт-наруш-правил-e',
  { path: 'i-i-s-dlya-generacii-акт-наруш-правил-e/:id' });
  this.route('i-i-s-dlya-generacii-акт-наруш-правил-e.new',
  { path: 'i-i-s-dlya-generacii-акт-наруш-правил-e/new' });
  this.route('i-i-s-dlya-generacii-виды-ущерба-l');
  this.route('i-i-s-dlya-generacii-виды-ущерба-e',
  { path: 'i-i-s-dlya-generacii-виды-ущерба-e/:id' });
  this.route('i-i-s-dlya-generacii-виды-ущерба-e.new',
  { path: 'i-i-s-dlya-generacii-виды-ущерба-e/new' });
  this.route('i-i-s-dlya-generacii-должности-l');
  this.route('i-i-s-dlya-generacii-должности-e',
  { path: 'i-i-s-dlya-generacii-должности-e/:id' });
  this.route('i-i-s-dlya-generacii-должности-e.new',
  { path: 'i-i-s-dlya-generacii-должности-e/new' });
  this.route('i-i-s-dlya-generacii-доп-услуги-l');
  this.route('i-i-s-dlya-generacii-доп-услуги-e',
  { path: 'i-i-s-dlya-generacii-доп-услуги-e/:id' });
  this.route('i-i-s-dlya-generacii-доп-услуги-e.new',
  { path: 'i-i-s-dlya-generacii-доп-услуги-e/new' });
  this.route('i-i-s-dlya-generacii-жалоба-клиента-l');
  this.route('i-i-s-dlya-generacii-жалоба-клиента-e',
  { path: 'i-i-s-dlya-generacii-жалоба-клиента-e/:id' });
  this.route('i-i-s-dlya-generacii-жалоба-клиента-e.new',
  { path: 'i-i-s-dlya-generacii-жалоба-клиента-e/new' });
  this.route('i-i-s-dlya-generacii-квит-доп-услуг-l');
  this.route('i-i-s-dlya-generacii-квит-доп-услуг-e',
  { path: 'i-i-s-dlya-generacii-квит-доп-услуг-e/:id' });
  this.route('i-i-s-dlya-generacii-квит-доп-услуг-e.new',
  { path: 'i-i-s-dlya-generacii-квит-доп-услуг-e/new' });
  this.route('i-i-s-dlya-generacii-клиенты-l');
  this.route('i-i-s-dlya-generacii-клиенты-e',
  { path: 'i-i-s-dlya-generacii-клиенты-e/:id' });
  this.route('i-i-s-dlya-generacii-клиенты-e.new',
  { path: 'i-i-s-dlya-generacii-клиенты-e/new' });
  this.route('i-i-s-dlya-generacii-организация-l');
  this.route('i-i-s-dlya-generacii-организация-e',
  { path: 'i-i-s-dlya-generacii-организация-e/:id' });
  this.route('i-i-s-dlya-generacii-организация-e.new',
  { path: 'i-i-s-dlya-generacii-организация-e/new' });
  this.route('i-i-s-dlya-generacii-персонал-l');
  this.route('i-i-s-dlya-generacii-персонал-e',
  { path: 'i-i-s-dlya-generacii-персонал-e/:id' });
  this.route('i-i-s-dlya-generacii-персонал-e.new',
  { path: 'i-i-s-dlya-generacii-персонал-e/new' });
  this.route('i-i-s-dlya-generacii-т-ч-перечень-усл-l');
  this.route('i-i-s-dlya-generacii-т-ч-перечень-усл-e',
  { path: 'i-i-s-dlya-generacii-т-ч-перечень-усл-e/:id' });
  this.route('i-i-s-dlya-generacii-т-ч-перечень-усл-e.new',
  { path: 'i-i-s-dlya-generacii-т-ч-перечень-усл-e/new' });
  this.route('i-i-s-dlya-generacii-т-ч-состав-жалобы-l');
  this.route('i-i-s-dlya-generacii-т-ч-состав-жалобы-e',
  { path: 'i-i-s-dlya-generacii-т-ч-состав-жалобы-e/:id' });
  this.route('i-i-s-dlya-generacii-т-ч-состав-жалобы-e.new',
  { path: 'i-i-s-dlya-generacii-т-ч-состав-жалобы-e/new' });
  this.route('i-i-s-dlya-generacii-т-ч-состав-ущерба-l');
  this.route('i-i-s-dlya-generacii-т-ч-состав-ущерба-e',
  { path: 'i-i-s-dlya-generacii-т-ч-состав-ущерба-e/:id' });
  this.route('i-i-s-dlya-generacii-т-ч-состав-ущерба-e.new',
  { path: 'i-i-s-dlya-generacii-т-ч-состав-ущерба-e/new' });
});

export default Router;
