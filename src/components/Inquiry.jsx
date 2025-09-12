import {
  BackButton,
  BackButtonWrapper,
  InquiryTitle,
} from "../styles/components/InquiryStyles";
import { requestInquiryLists } from "../services/inquiryApi";
import { useNavigate } from "react-router";
import icBack from "../assets/icons/ic_back.svg";
import useFetch from "../hooks/useService";
import InquiryWriteArea from "./InquiryWriteArea";
import InquiryList from "../pages/components/ItemDetail/InquiryList";

export default function Inquiry({ id }) {
  const navigate = useNavigate();

  /**
   * 문의 내역을 가져온다.
   */
  const { data, isLoading } = useFetch(() => requestInquiryLists(id));

  return (
    <>
      <InquiryTitle>문의하기</InquiryTitle>
      <InquiryWriteArea />
      {!isLoading ? <InquiryList data={data} /> : <div>로딩중</div>}
      <BackButtonWrapper>
        <BackButton onClick={() => navigate(-1)}>
          목록으로 돌아가기
          <img src={icBack} alt="뒤로가기 이미지" />
        </BackButton>
      </BackButtonWrapper>
    </>
  );
}
