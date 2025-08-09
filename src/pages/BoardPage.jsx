import { Helmet } from "react-helmet";
import ComponentTestPage from "./ComponentTestPage";

const BoardPage = () => {
  return (
    <>
      <Helmet>
        <title>판다마켓 - 자유게시판</title>
      </Helmet>
      자유게시판 페이지 입니다
      <ComponentTestPage></ComponentTestPage>
    </>
  );
};
export default BoardPage;
