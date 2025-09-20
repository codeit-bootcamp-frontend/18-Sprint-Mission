import Button from "@/components/button/button";
import { ButtonType } from "@/components/button/button-type";
import TodoDetailTitle from "@/components/todo/todo-detail-title";
import { getTodo } from "@/libs/apis/todo";
import styles from "@/styles/item.module.css";
import type { Todo } from "@/types";
import { GetServerSidePropsContext } from "next";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.params!;
  const todo = await getTodo(Number(id));
  return {
    props: {
      todo,
    },
  };
}

export default function Page({ todo }: { todo: Todo }) {
  if (!todo) {
    return <div>Todo not found</div>;
  }

  const handleTitleClick = (todo: Todo) => {
    console.log("Title clicked:", todo);
  };

  const handleEditClick = () => {};

  const handleDeleteClick = () => {};

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <TodoDetailTitle todo={todo} onClick={handleTitleClick} />
        <div className={styles.imageMemoContainer}>
          <div className={styles.imageContainer}>
            <img
              src="/images/todo-detail-image-background.svg"
              alt="background"
            />
          </div>
          <div className={styles.memoContainer}>
            <span>Memo</span>
            <p>
              {
                "내용이 최대로 늘어날 때 다음과 같이 보이며 내부 스크롤이 이루어집니다. 내용이 최대로 늘어날 때 다음과 같이 보이며 내부 스크롤이 이루어집니다. 내용이 최대로 늘어날 때 다음과 같이 보이며 내부 스크롤이 이루어집니다. 내용이 최대로 늘어날 때 다음과 같이 보이며 내부 스크롤이 이루어집니다. 내용이 최대로 늘어날 때 다음과 같이 보이며 내부 스크롤이 이루어집니다. 내용이 최대로 늘어날 때 다음과 같이 보이며 내부 스크롤이 이루어집니다. 내용이 최대로 늘어날 때 다음과 같이 보이며 내부 스크롤이 이루어집니다. 내용이 최대로 늘어날 때 다음과 같이 보이며 내부 스크롤이 이루어집니다. 내용이 최대로 늘어날 때 다음과 같이 보이며 내부 스크롤이 이루어집니다. 내용이 최대로 늘어날 때 다음과 같이 보이며 내부 스크롤이 이루어집니다. 내용이 최대로 늘어날 때 다음과 같이 보이며 내부 스크롤이 이루어집니다. 내용이 최대로 늘어날 때 다음과 같이 보이며 내부 스크롤이 이루어집니다. 내용이 최대로 늘어날 때 다음과 같이 보이며 내부 스크롤이 이루어집니다. 내용이 최대로 늘어날 때 다음과 같이 보이며 내내용이 최대로 늘어날 때 다음과 같이 보이며 내부 스크롤이 이루어집니다. 내용이 최대로 늘어날 때 다음과 같이 보이며 내부 스크롤이 이루어집니다. 내용이 최대로 늘어날 때 다음과 같이 보이며 내부 스크롤이 이루어집니다. 내용이 최대로 늘어날 때 다음과 같이 보이며 내부 스크롤이 이루어집니다. 내용이 최대로 늘어날 때 다음과 같이 보이며 내부 스크롤이 이루어집니다. 내용이 최대로 늘어날 때 다음과 같이 보이며 내부 스크롤이 이루어집니다. 내용이 최대로 늘어날 때 다음과 같이 보이며 내부 스크롤이 이루어집니다. 내용이 최대로 늘어날 때 다음과 같이 보이며 내부 스크롤이 이루어집니다. 내용이 최대로 늘어날 때 다음과 같이 보이며 내부 스크롤이 이루어집니다. 내용이 최대로 늘어날 때 다음과 같이 보이며 내부 스크롤이 이루어집니다. 내용이 최대로 늘어날 때 다음과 같이 보이며 내부 스크롤이 이루어집니다. 내용이 최대로 늘어날 때 다음과 같이 보이며 내부 스크롤이 이루어집니다. 내용이 최대로 늘어날 때 다음과 같이 보이며 내부 스크롤이 이루어집니다. 내용이 최대로 늘어날 때 다음과 같이 보이며 내"
              }
            </p>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <Button buttonType={ButtonType.edit} onClick={handleEditClick}>
            수정 완료
          </Button>
          <Button buttonType={ButtonType.delete} onClick={handleDeleteClick}>
            삭제하기
          </Button>
        </div>
      </div>
    </div>
  );
}
