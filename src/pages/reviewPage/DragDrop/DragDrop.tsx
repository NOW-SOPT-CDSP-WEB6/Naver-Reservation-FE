import ContentBox from "@/components/@common/ContentBox/ContentBox";
import { Wrapper, plusBtn, text } from "@/pages/reviewPage/DragDrop/DragDrop.style";
import PlusBtn from "@/assets/svgs/review/review_btn_plus.svg?react"
import { useState } from "react";
import { Theme } from "@/styles/theme";

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

  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        setImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <ContentBox
      variant='round2'
      styles={{
        height: '180px',
        marginTop: '20px',
        border: `1px dashed ${Theme.color.background2}`,
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
        {!image && (
          <>
            <span css={text}>사진을 추가해 주세요</span>
            <label htmlFor="upload">
              <PlusBtn css={plusBtn}/>
            </label>
            <input
              id="upload"
              type="file"
              style={{ display: "none" }}
              accept="image/*"
              onChange={onChangeImage}
            />
          </>
        )}
      </section>
    </ContentBox>
  );
};

export default DragDrop;