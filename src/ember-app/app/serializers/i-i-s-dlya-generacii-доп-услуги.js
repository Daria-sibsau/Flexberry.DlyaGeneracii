import { Serializer as ДопУслугиSerializer } from
  '../mixins/regenerated/serializers/i-i-s-dlya-generacii-доп-услуги';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ДопУслугиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
