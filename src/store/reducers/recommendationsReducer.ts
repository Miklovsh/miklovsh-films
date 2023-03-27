import { RecommendationAction, RecommendationsActionTypes, RecommendationState } from "../type/recommendation"

const initialState: RecommendationState = {
  recommendations: [],
  loading: false,
  error: null
}

export const recommendationReducer = (state = initialState, action: RecommendationAction): RecommendationState => {
  switch (action.type) {
    case RecommendationsActionTypes.FETCH_RECOMMENDATIONS:
      return { ...state, loading: true }
    case RecommendationsActionTypes.FETCH_RECOMMENDATIONS_SUCCESS:
      return { ...state, loading: false, recommendations: action.payload }
    case RecommendationsActionTypes.FETCH_RECOMMENDATIONS_ERROR:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}