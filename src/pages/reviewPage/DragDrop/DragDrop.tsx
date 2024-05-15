import ContentBox from "@/components/@common/ContentBox/ContentBox";
import { Wrapper, plusBtn, text } from "@/pages/reviewPage/DragDrop/DragDrop.style";
import PlusBtn from "@/assets/svgs/review/review_btn_plus.svg?react"
import { useRef, useState } from "react";

const DragDrop = () => {
  const [image, setImage] = useState<string>();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
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

  const handleClick = () => {
    console.log("click")
    fileInputRef.current?.click();
  };
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
        {!image && (
          <>
            <span css={text}>사진을 추가해 주세요</span>
            <div onClick={handleClick}>
              <PlusBtn css={plusBtn}/>
            </div>
            <input
              type="file"
              ref={fileInputRef}
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