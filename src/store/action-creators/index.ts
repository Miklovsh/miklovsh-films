import * as MovieActionCreators from './movie';
import * as GenreActionCreators from './genre';

export default {
  ...MovieActionCreators,
  ...GenreActionCreators
}

