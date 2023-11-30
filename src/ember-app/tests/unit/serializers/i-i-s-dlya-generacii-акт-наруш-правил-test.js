import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-dlya-generacii-акт-наруш-правил', 'Unit | Serializer | i-i-s-dlya-generacii-акт-наруш-правил', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-dlya-generacii-акт-наруш-правил',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
