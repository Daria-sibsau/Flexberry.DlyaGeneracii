import { Serializer as ВидыУщербаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-dlya-generacii-виды-ущерба';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ВидыУщербаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
