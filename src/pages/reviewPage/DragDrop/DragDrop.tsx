import ContentBox from "@/components/@common/ContentBox/ContentBox";
import { Wrapper } from "@/pages/reviewPage/DragDrop/DragDrop.style";

const DragDrop = () => {
  return (
    <ContentBox
      styles={{
        height: '180px',
        margin: '20px 16px 0 16px',
        borderRadius: '20px',
        backgroundColor: 'red',
      }}>
      안녕하세요
    </ContentBox>
  );
};

export default DragDrop;