import { Serializer as АктНарушПравилSerializer } from
  '../mixins/regenerated/serializers/i-i-s-dlya-generacii-акт-наруш-правил';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(АктНарушПравилSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
