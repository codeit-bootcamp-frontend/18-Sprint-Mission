import defaultProfileImage from "../../assets/ic-profile.svg";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import kebabIcon from "../../assets/ic-kebab.svg";
import backIcon from "../../assets/ic-back.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import emptyImg from "../../assets/img-inquiry_empty.svg";

dayjs.extend(relativeTime);
dayjs.locale("ko");

export default function ItemComments({ commentInfo }) {
  const [dropdown, setDropdown] = useState(null);
  const [editId, setEditId] = useState(null);
  const [editContent, setEditContent] = useState("");

  const handleEdit = (comment) => {
    setEditId(comment.id);
    setEditContent(comment.content);
    setDropdown(null);
  };

  const handleCancel = () => {
    setEditId(null);
    setEditContent("");
  };

  return (
    <>
      <div className="mt-12">
        <div className="flex flex-col">
          <span className="pb-2 font-semibold text-[16px] text-[#111827]">
            문의하기
          </span>
          <textarea
            className="resize-none rounded-[12px] bg-[#f3f4f6] px-[24px] py-[16px] mt-3"
            name="inquiry"
            id="inquiry"
            placeholder="개인정보를 공유 및 요청하거나, 명예 회손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          ></textarea>
          <button className="flex justify-center items-center mt-4 ml-auto rounded-lg bg-[#9ca3af] w-[74px] h-[42px] font-semibold text-[16px] text-[#f3f4f6]">
            등록
          </button>
          {commentInfo.list?.length > 0 ? (
            commentInfo.list.map((comment, id) => (
              <div className="mt-10 border-solid border-b-[1px] pb-4 border-[#e5e7eb]">
                <div
                  className="relative mb-7 text-[14px] flex justify-between text-[#1f2937]"
                  key={id}
                >
                  {editId === comment.id ? (
                    <textarea
                      className="resize-none rounded-[12px] w-full bg-[#f3f4f6] px-[24px] py-[16px]"
                      value={editContent}
                      onChange={(e) => setEditContent(e.target.value)}
                    ></textarea>
                  ) : (
                    comment.content
                  )}
                  {editId !== comment.id && (
                    <button
                      onClick={() => setDropdown(dropdown === id ? null : id)}
                    >
                      <img src={kebabIcon} alt="케밥 버튼" />
                    </button>
                  )}

                  {dropdown === id && (
                    <div className="bg-white w-[139px] h-[92px] absolute right-0 flex flex-col top-10">
                      <button
                        onClick={() => handleEdit(comment)}
                        className="h-[46px] border-solid border-[1px] corder-[#d1d5db] rounded-t-[8px]"
                      >
                        수정하기
                      </button>
                      <button className="h-[46px] border-solid border-[1px] corder-[#d1d5db] rounded-b-[8px]">
                        삭제하기
                      </button>
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <img
                      className="w-[32px] h-[32px]"
                      src={comment.writer.image || defaultProfileImage}
                      alt="코멘트 이미지"
                    />
                    <div className="flex flex-col justify-center">
                      <span className="text-[#4b5563] font-normal text-[12px]">
                        {comment.writer.nickname}
                      </span>
                      <span className="text-[#9ca3af] font-normal text-[12px]">
                        {dayjs(comment.createdAt).fromNow()}
                      </span>
                    </div>
                  </div>
                  {editId === comment.id && (
                    <div>
                      <button
                        onClick={handleCancel}
                        className="w-[68px] h-[47px] font-semibold text-[16px] text-[#737373]"
                      >
                        취소
                      </button>
                      <button className="w-[106px] h-[42px] bg-[#3692ff] font-semibold text-[16px] text-[#f3f4f6] rounded-[8px]">
                        수정 완료
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center mt-36">
              <img
                className="w-[196px] h-[230px]"
                src={emptyImg}
                alt="문이 없는 이미지"
              />
              <span className="font-normal text-[16px] text-[#9ca3af]">
                아직 문의가 없어요
              </span>
            </div>
          )}
          <div className="flex justify-center mt-24">
            <Link
              to="/items"
              className="flex justify-center items-center w-[240px] h-[48px] rounded-[40px] bg-[#3692ff] font-semibold text-[18px] text-[#f3f4f6]"
            >
              목록으로 돌아가기
              <img
                className="ml-2 w-[24px] h-[24px]"
                src={backIcon}
                alt="뒤로가기 아이콘"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
