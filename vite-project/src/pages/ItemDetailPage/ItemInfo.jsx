export default function ItemInfo({
  images,
  name,
  price,
  description,
  favoriteCount,
  tags,
}) {
  return (
    <>
      <section className="flex w-[1200px] mt-9 mx-auto space-x-7">
        <img
          className="w-[486px] h-[486px] rounded-2xl"
          src={images}
          alt="상품 이미지"
        />
        <div className="h-[496px]">
          <div className="pb-2 mb-10 border-b-2 border-black">
            <h2 className="text-2xl font-semibold text-[#1f2937]">{name}</h2>
            <h1 className="text-[40px] font-semibold text-[#1f2937]">
              {price}원
            </h1>
          </div>
          <div>
            <div className="h-[146px]">
              <span className="mb-7 block text-base font-semibold text-[#4b5563]">
                상품 소개
              </span>
              <p className="text-base font-normal text-[#4b5563]">
                {description}
              </p>
            </div>
            <div className="h-[78px]">
              <span className="mb-7 block text-base font-semibold text-[#4b5563]">
                상품 태그
              </span>
              <ul>
                <li>{tags}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
