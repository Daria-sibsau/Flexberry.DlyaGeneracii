import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-dlya-generacii-клиенты', 'Unit | Model | i-i-s-dlya-generacii-клиенты', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-dlya-generacii-акт-наруш-правил',
    'model:i-i-s-dlya-generacii-виды-ущерба',
    'model:i-i-s-dlya-generacii-должности',
    'model:i-i-s-dlya-generacii-доп-услуги',
    'model:i-i-s-dlya-generacii-жалоба-клиента',
    'model:i-i-s-dlya-generacii-квит-доп-услуг',
    'model:i-i-s-dlya-generacii-клиенты',
    'model:i-i-s-dlya-generacii-организация',
    'model:i-i-s-dlya-generacii-персонал',
    'model:i-i-s-dlya-generacii-т-ч-перечень-усл',
    'model:i-i-s-dlya-generacii-т-ч-состав-жалобы',
    'model:i-i-s-dlya-generacii-т-ч-состав-ущерба',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
