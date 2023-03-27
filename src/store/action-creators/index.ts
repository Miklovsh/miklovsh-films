import * as MovieActionCreators from './movie';
import * as GenreActionCreators from './genre';
import * as RecommendationActionCreators from './recommendation';

export default {
  ...MovieActionCreators,
  ...GenreActionCreators,
  ...RecommendationActionCreators
}

