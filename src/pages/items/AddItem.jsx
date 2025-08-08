import styled from "styled-components";
import ImgInput, { DeleteButton } from "../../components/ImgInput";
import { ItemsTag, palette } from "../../styles/commonStyles";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";

const ItemContainer = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  margin-bottom: 20px;

  @media (max-width: 1200px) {
    width: 696px;
  }

  @media (max-width: 768px) {
    width: 346px;
  }
`;

const ItemTitleBox = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto;

  @media (max-width: 1200px) {
    width: 696px;
  }

  @media (max-width: 768px) {
    width: 346px;
  }
`;

const ItemImgBox = styled(ItemTitleBox)`
  justify-content: start;
  margin: 0 auto;
`;

/**
 * 페이지 타이틀
 * sub 옵션으로 서브 타이트롤 변환
 */
const PageTitle = styled.h1`
  font-size: ${({ sub }) => (sub ? `18px` : `20px`)};
  font-weight: 700;
`;

/**
 * 등록 버튼
 */
const SubmitButton = styled.button`
  width: 74px;
  height: 42px;
  border: none;
  border-radius: 8px;
  background-color: ${({ isValid }) =>
    isValid ? `${palette.blue}` : `${palette.gray400}`};
  color: white;
  font-size: 16px;
  font-weight: 600;
`;

/**
 * 상품 정보 입력 input
 */
const TextInput = styled.input`
  height: 56px;
  border: none;
  border-radius: 12px;
  background-color: ${palette.gray100};
  padding: 20px;
  font-size: 16px;
  position: relative;
  &::placeholder {
    color: ${palette.gray400};
  }
`;

/**
 * 상품 소개 입력 textarea
 */
const TextArea = styled.textarea`
  height: 282px;
  border: none;
  border-radius: 12px;
  background-color: ${palette.gray100};
  padding: 20px;
  font-size: 16px;
  position: relative;
  font-family: "Pretendard-Regular";
  &::placeholder {
    color: ${palette.gray400};
  }
`;

const ItemsTagDeleteButton = styled(DeleteButton)`
  position: relative;
  z-index: 0;
  transform: none;
`;

/**
 * 상품 등록 페이지 컴포넌트
 */
export default function AddItem() {
  /**
   * 이미지가 등록되어있는지 여부를 확인하는 state
   */
  const [isUpload, setIsUpload] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { error, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: { productName: "", description: "", price: "" },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "tags",
    rules: {
      required: true,
    },
  });

  /**
   * 입력받은 가격을 원화 형식으로 변환하는 함수
   * @param {React.ChangeEvent<HTMLInputElement>} e
   */
  const onChangePrice = (e) => {
    let rawPrice = e.target.value.replace(/[^0-9]/g, "");

    if (rawPrice === "") {
      e.target.value = "";
      return;
    }

    let formattedPrice = Number(rawPrice).toLocaleString("ko-KR");
    e.target.value = formattedPrice;
  };

  /**
   * Enter키를 입력으로 태그를 form에 등록하고 태그 입력 창을 비우는 만드는 함수
   * @param {KeyboardEvent} e
   */
  const onKeyDownAppendTag = (e) => {
    if (e.nativeEvent.isComposing) return;

    if (e.key === "Enter") {
      e.preventDefault();

      if (e.target.value.trim() !== "") {
        append({ value: e.target.value });
        e.target.value = "";
      }
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ItemTitleBox>
            <PageTitle>상품 등록하기</PageTitle>
            <SubmitButton isValid={isValid}>등록</SubmitButton>
          </ItemTitleBox>

          <ItemContainer>
            <PageTitle sub="true">상품 이미지</PageTitle>
            <ItemImgBox>
              <ImgInput isUpload={isUpload} setIsUpload={setIsUpload} />
            </ItemImgBox>
            {isUpload && (
              <p style={{ color: "red" }}>
                *이미지 등록은 최대 1개까지 가능합니다.
              </p>
            )}
          </ItemContainer>

          <ItemContainer>
            <PageTitle sub="true">상품명</PageTitle>
            <TextInput
              placeholder="상품명을 입력해주세요"
              name="productName"
              {...register("productName", {
                required: true,
              })}
            />
          </ItemContainer>

          <ItemContainer>
            <PageTitle sub="true">상품 소개</PageTitle>
            <TextArea
              placeholder="상품 소개를 입력해주세요"
              name="description"
              {...register("description", {
                required: true,
              })}
            ></TextArea>
          </ItemContainer>

          <ItemContainer>
            <PageTitle sub="true">판매 가격</PageTitle>
            <TextInput
              placeholder="판매 가격을 입력해주세요"
              name="price"
              {...register("price", {
                required: true,
                onChange: (e) => onChangePrice(e),
              })}
            />
          </ItemContainer>

          <ItemContainer>
            <PageTitle sub="true">태그</PageTitle>
            <TextInput
              placeholder="태그를 입력해주세요"
              name="tags"
              onKeyDown={onKeyDownAppendTag}
            />
            <div
              style={{
                display: "flex",
                margin: "10px 0px",
                flexWrap: "wrap",
                rowGap: "10px",
              }}
            >
              {fields.map((tag, idx) => {
                return (
                  <ItemsTag key={tag.id}>
                    {`#${tag.value}`}
                    <ItemsTagDeleteButton
                      onClick={() => remove(idx)}
                    ></ItemsTagDeleteButton>
                  </ItemsTag>
                );
              })}
            </div>
          </ItemContainer>
        </form>
      </div>
    </>
  );
}
