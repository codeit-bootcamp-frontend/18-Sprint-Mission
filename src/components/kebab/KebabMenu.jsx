import useToggle from "../../hooks/useToggle";
import {
  KebabIcon,
  KebabMenuContainer,
} from "../../styles/components/kebab/kebabStyle";
import KebabDropdown from "./KebabDropdown";

const menus = [
  { id: "update", name: "수정하기" },
  { id: "delete", name: "삭제하기" },
];

/**
 * 케밥 메뉴
 */
export default function KebabMenu() {
  const { isOpen, onClickToggle, onClickClose } = useToggle(false);

  return (
    <>
      <KebabMenuContainer onClick={onClickToggle}>
        <KebabIcon />
        <KebabIcon />
        <KebabIcon />
        {isOpen && <KebabDropdown menus={menus} onClickClose={onClickClose} />}
      </KebabMenuContainer>
    </>
  );
}
