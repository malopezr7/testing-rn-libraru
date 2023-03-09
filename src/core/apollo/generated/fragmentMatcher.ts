/* THIS IS A GENERATED FILE - DO NOT MODIFY */
/* eslint-disable */

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {
    ActivityUnionType: ['ArticleType', 'ClinicType', 'TreatmentType'],
    CommentUnionType: ['ArticleType', 'TreatmentType'],
    FavoriteUnionType: ['ArticleType', 'ClinicType', 'TreatmentType'],
    RecommendationUnionType: [
      'ArticleType',
      'CommentType',
      'ReviewAnswerType',
      'ReviewType',
      'TreatmentType',
    ],
    ReportUnionType: ['CommentType', 'ReviewType'],
  },
};
export default result;
