import { Serializer as КвитДопУслугSerializer } from
  '../mixins/regenerated/serializers/i-i-s-dlya-generacii-квит-доп-услуг';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КвитДопУслугSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
