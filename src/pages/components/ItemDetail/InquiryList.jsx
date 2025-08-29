import KebabMenu from "../../../components/kebab/KebabMenu";
import { palette } from "../../../styles/commonStyles";
import {
  InquiryContent,
  InquiryDate,
  InquiryProfileImg,
  InquiryWriter,
} from "../../../styles/components/InquiryStyles";
import icProfile from "../../../assets/icons/ic_profile.svg";
import imgEmptyMd from "../../../assets/images/img_inquiry_empty_md.png";
import { formatTimeAgo } from "../../../util/formatTimeAgo";

const InquiryList = ({ data }) => {
  return data?.length > 0 ? (
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
            <InquiryProfileImg src={icProfile} alt="작성자 프로필 이미지" />
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
  );
};

export default InquiryList;
