export interface ReviewInfoType {
  data: {
    totalReviewCount: number;
    userReviewList: ReviewInfoItemType[];
  };
}

export interface ReviewInfoItemType {
  reviewId: number;
  content: string;
  name: string;
  reviewDate: string;
}
