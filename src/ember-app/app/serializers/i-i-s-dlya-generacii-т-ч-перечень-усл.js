import { Serializer as ТЧПереченьУслSerializer } from
  '../mixins/regenerated/serializers/i-i-s-dlya-generacii-т-ч-перечень-усл';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТЧПереченьУслSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
