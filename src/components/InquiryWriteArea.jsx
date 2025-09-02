import { useState } from "react";
import {
  InquirySubmitButton,
  InquiryTextArea,
} from "../styles/components/InquiryStyles";

/**
 * 문의 내역 작성 공간
 */
export default function InquiryWriteArea() {
  const [isActive, setIsActive] = useState(false);
  const [inquiryContent, setInquiryContent] = useState("");

  const onChangeWrite = (e) => {
    if (e.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }

    setInquiryContent(e.target.value);
  };

  const onClickUploadInquiry = () => {
    let data = {
      productId: id,
      Inquiry: {
        content: inquiryContent,
      },
    };

    // const { data: success } = usePost(requestPostInquiry(data));

    if (success) {
      location.reload(true);
    } else {
      alert("등록에 실패했습니다.");
    }
  };

  return (
    <div style={{ textAlign: "right", marginBottom: "20px" }}>
      <InquiryTextArea
        onChange={onChangeWrite}
        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
      ></InquiryTextArea>
      <InquirySubmitButton
        type={isActive ? "submit" : "button"}
        isActive={isActive}
        onClick={onClickUploadInquiry}
      >
        등록
      </InquirySubmitButton>
    </div>
  );
}
