import { useState } from "react";
import { palette } from "../styles/commonStyles";
import {
  BackButton,
  InquiryContent,
  InquiryDate,
  InquiryProfileImg,
  InquirySubmitButton,
  InquiryTextArea,
  InquiryTitle,
  InquiryWriter,
} from "../styles/components/InquiryStyles";
import { requestInquiryLists } from "../services/itemsApi";
import icProfile from "../assets/icons/ic_profile.svg";
import { formatTimeAgo } from "../util/formatTimeAgo";
import { useNavigate } from "react-router";
import icBack from "../assets/icons/ic_back.svg";
import imgEmptyMd from "../assets/images/img_inquiry_empty_md.png";
import useService from "../hooks/useService";
import KebabMenu from "./kebab/KebabMenu";

export default function Inquiry({ id }) {
  const navigate = useNavigate();
  /**
   * 버튼 활성화 state
   */
  const [isActive, setIsActive] = useState(false);

  const { data, isLoading } = useService(() => requestInquiryLists(id));

  return (
    <>
      <div style={{ textAlign: "right", marginBottom: "20px" }}>
        <InquiryTitle>문의하기</InquiryTitle>
        <InquiryTextArea
          onChange={(e) => {
            e.target.value !== "" ? setIsActive(true) : setIsActive(false);
          }}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        ></InquiryTextArea>
        <InquirySubmitButton isActive={isActive}>등록</InquirySubmitButton>
      </div>
      {!isLoading ? (
        data ? (
          data.list?.map((el) => {
            return (
              <div
                style={{ borderBottom: `1px solid ${palette.gray200}` }}
                key={el.id}
              >
                <div
                  style={{
                    display: "flex",
                    margin: "20px 0px 20px",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <InquiryContent>{el.content}</InquiryContent>
                  <KebabMenu />
                </div>
                <div style={{ display: "flex", marginBottom: "10px" }}>
                  <InquiryProfileImg
                    src={icProfile}
                    alt="작성자 프로필 이미지"
                  />
                  <div style={{ marginLeft: "10px" }}>
                    <InquiryWriter>{el.writer.nickname}</InquiryWriter>
                    <InquiryDate>{formatTimeAgo(el.updatedAt)}</InquiryDate>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={imgEmptyMd} alt="빈 이미지" width={192} />
            <p
              style={{
                fontSize: "16px",
                fontWeight: "400",
                color: `${palette.gray400}`,
              }}
            >
              아직 문의가 없어요
            </p>
          </div>
        )
      ) : (
        <div>로딩중</div>
      )}
      <div
        style={{
          margin: "60px 0px 60px",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <BackButton onClick={() => navigate(-1)}>
          목록으로 돌아가기
          <img src={icBack} alt="뒤로가기 이미지" />
        </BackButton>
      </div>
    </>
  );
}
