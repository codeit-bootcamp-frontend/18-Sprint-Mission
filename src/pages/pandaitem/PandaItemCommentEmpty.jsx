import emptyImg from "../../assets/images/empty_item.svg"

export default function PandaItemCommentEmpty() {
  return (
    <div className="pandaitem_empty">
      <img src={emptyImg} alt="빈파일이미지" />
      <p>아직 문의가 없어요</p>
    </div>
  )
}
