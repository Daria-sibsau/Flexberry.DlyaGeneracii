import { Serializer as ЖалобаКлиентаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-dlya-generacii-жалоба-клиента';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЖалобаКлиентаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
