import { Serializer as ТЧСоставЖалобыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-dlya-generacii-т-ч-состав-жалобы';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТЧСоставЖалобыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
