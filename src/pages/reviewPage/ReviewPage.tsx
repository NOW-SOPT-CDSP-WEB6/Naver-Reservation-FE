import BottomNavBtn from "@/components/@common/BottomNavBtn/BottomNavBtn";
import DragDrop from "@/pages/reviewPage/DragDrop/DragDrop";
import Header from "@/pages/reviewPage/Header/Header";
import ReviewWriting from "@/pages/reviewPage/ReviewWriting/ReviewWriting";
import { caption } from "@/pages/reviewPage/ReviewWriting/ReviewWriting.style";

const ReviewPage = () => {
  return (
    <>
      <Header />
      <DragDrop />
      <ReviewWriting />
      <BottomNavBtn />
    </>
  );
};

export default ReviewPage;
