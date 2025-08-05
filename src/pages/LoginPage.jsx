import { Link } from "react-router-dom";
import AuthTemplate, { AuthSwitch } from "../components/AuthTemplate";
import FormField, { Form } from "../components/FormField";
import Button from "../components/Button";
import SocialLoginTemplate from "../components/SocialLoginTemplate";
const LoginPage = () => {
  return (
    <>
      <AuthTemplate>
        <Form>
          <FormField
            type="email"
            label="아이디"
            name="userEmail"
            placeholder="이메일을 입력해주세요."
            errorMsg="아이디를 입력해주세요."
          ></FormField>
          <FormField
            type="password"
            label="비밀번호"
            name="userPassword"
            placeholder="비밀번호를 입력해주세요."
            errorMsg="비밀번호를 8자 이상 입력해주세요."
          ></FormField>
          <Button
            as={Link}
            to="/"
            size="lg"
            round="true"
            full="true"
            className="disabled"
          >
            로그인
          </Button>
          <SocialLoginTemplate></SocialLoginTemplate>
          <AuthSwitch>
            판다마켓이 처음이신가요?
            <Link to="/signup">회원가입</Link>
          </AuthSwitch>
        </Form>
      </AuthTemplate>
    </>
  );
};
export default LoginPage;
