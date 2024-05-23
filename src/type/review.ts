export interface ReviewInfoType {
  data: {
    totalReviewCount: number;
    userReviewList: ReviewInfoItemType[];
  };
}

export interface ReviewInfoItemType {
  content: string;
  name: string;
  reviewDate: string;
}
