import ContentBox from "@/components/@common/ContentBox/ContentBox";
import { Wrapper, plusBtn, text } from "@/pages/reviewPage/DragDrop/DragDrop.style";
import PlusBtn from "@/assets/svgs/review/review_btn_plus.svg?react"
import { useState } from "react";

const DragDrop = () => {
  const [image, setImage] = useState<string>();
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    const reader = new FileReader();

    reader.onload = (event: ProgressEvent<FileReader>) => {
      setImage(event.target?.result as string);
    };

    reader.readAsDataURL(file);
  }
  console.log({image})
  return (
    <ContentBox
      variant='round2'
      styles={{
        height: '180px',
        marginTop: '20px',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <section
        css={Wrapper}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {
          !image &&
          <>
            <span css={text}>사진을 추가해 주세요</span>
            <PlusBtn css={plusBtn} />
          </>
        }
      </section>
    </ContentBox>
  );
};

export default DragDrop;