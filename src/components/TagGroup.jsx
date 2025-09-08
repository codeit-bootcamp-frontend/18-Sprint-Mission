import Button from "./Button";
import tagGroup from "../assets/scss/tagGroup.module.scss";
import selfDelete from "../assets/images/selfDelete.svg";

function TagGroup({ tagArr, deleteTag }) {
  const handleDeleteTag = (e) => {
    const targetParent = e.target.closest("fieldset");
    const targetInput = targetParent.querySelector("input");
    const value = targetInput.value;
    deleteTag(value);
  };

  return (
    <div className={tagGroup.tagGroup}>
      {tagArr.map((item, index) => {
        return (
          <fieldset key={index} className={tagGroup.tag}>
            <input type="hidden" value={item} />
            <span tabIndex={0}>{"#" + item}</span>
            <Button type={"button"} onClick={handleDeleteTag}>
              <img src={selfDelete} alt="선택삭제" />
            </Button>
          </fieldset>
        );
      })}
    </div>
  );
}

export default TagGroup;
