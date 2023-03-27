export interface RecommendationState {
  recommendations: any[];
  loading: boolean;
  error: null | string;
}

export enum RecommendationsActionTypes {
  FETCH_RECOMMENDATIONS = 'FETCH_RECOMMENDATIONS ',
  FETCH_RECOMMENDATIONS_SUCCESS = 'FETCH_RECOMMENDATIONS_SUCCESS',
  FETCH_RECOMMENDATIONS_ERROR = 'FETCH_RECOMMENDATIONS_ERROR',
}

interface FetchRecommendationsAction {
  type: RecommendationsActionTypes.FETCH_RECOMMENDATIONS;
}

interface FetchRecommendationsSuccessAction {
  type: RecommendationsActionTypes.FETCH_RECOMMENDATIONS_SUCCESS;
  payload: any[];
}

interface FetchRecommendationsErrorAction {
  type: RecommendationsActionTypes.FETCH_RECOMMENDATIONS_ERROR;
  payload: string;
}


export type RecommendationAction =
  FetchRecommendationsAction
  | FetchRecommendationsSuccessAction
  | FetchRecommendationsErrorAction