import likeIcon from "../../assets/ic-heart.svg";
import ProfileImg from "../../assets/ic-profile.svg";

export default function ItemInfo({
  images,
  name,
  price,
  description,
  favoriteCount,
  tags = [],
  nickname,
  createdAt,
}) {
  const dateObject = new Date(createdAt);
  const formattedDate = dateObject.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <>
      <section className="mobile:flex-col mobile:space-x-0 flex mt-9  space-x-9 pb-10 border-solid border-b-[1px] border-[#e5e7eb]">
        <img
          className="tablet:w-[340px] tablet:h-[340px] mobile:w-[343px] mobile:h-[343px] w-[486px] h-[486px] rounded-2xl"
          src={images}
          alt="상품 이미지"
        />
        <div className="tablet:w-[340px] mobile:w-[344px] w-[690px] h-[496px]">
          <div className="pb-4 mb-10 border-b-[1px] border-[#e5e7eb] border-solid">
            <h2 className="tablet:text-[20px] text-[24px] font-semibold text-[#1f2937]">
              {name}
            </h2>
            <h1 className="tablet:text-[32px] text-[40px] font-semibold text-[#1f2937]">
              {Number(price).toLocaleString()}원
            </h1>
          </div>
          <div>
            <div className="h-[146px] mb-9">
              <span className="mb-7 block text-[16px] font-semibold text-[#4b5563]">
                상품 소개
              </span>
              <p className="text-[16px] font-normal text-[#4b5563]">
                {description}
              </p>
            </div>
            <div className="h-[78px] mb-28">
              <span className="mb-7 block text-[16px] font-semibold text-[#4b5563]">
                상품 태그
              </span>
              <ul className="tablet:flex tablet:flex-wrap mobile:flex mobile:flex-wrap flex gap-[8px]">
                {tags.map((tag, index) => (
                  <li
                    key={index}
                    className="tablet:inline-block mobile:inline-block h-[36px] rounded-[26px] px-[16px] py-[6px] bg-[#f3f4f6] text-[16px] text-[#1f2937] text-center"
                  >
                    #{tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="tablet:w-[340px] mobile:w-[344px] w-[690px] flex items-center">
            <img className="mr-6" src={ProfileImg} alt="" />
            {/* src={profileImage || defaultProfileImage} 예정 */}
            <div className="tablet:w-[180px] mobile:w-[190px] flex w-[530px] flex-col border-r-[1px] border-[#e5e7eb] border-solid">
              <span className="font-medium text-[14px] text-[#4b5563]">
                {nickname}
              </span>
              <span className="font-normal text-[14px] text-[#9ca3af]">
                {formattedDate}
              </span>
            </div>
            <div className="tablet:w-[79px] mobile:w-[79px] mobile:h-[32px] gap-[10px] font-medium text-[16px] text-[#6b7280] w-[87px] h-[40px] justify-center rounded-[35px] border-[1px] border-[#e5e7eb] border-solid flex items-center ml-auto">
              <img
                className="mobile:w-[24px] mobile:h-[24px] w-[32px] h-[32px]"
                src={likeIcon}
                alt="좋아요 아이콘"
              />
              {favoriteCount}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
