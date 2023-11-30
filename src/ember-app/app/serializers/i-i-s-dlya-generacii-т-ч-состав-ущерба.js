import { Serializer as ТЧСоставУщербаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-dlya-generacii-т-ч-состав-ущерба';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТЧСоставУщербаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
