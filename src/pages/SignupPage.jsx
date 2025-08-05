import { Link } from "react-router-dom";
import AuthTemplate, { AuthSwitch } from "../components/AuthTemplate";
import FormField, { Form } from "../components/FormField";
import Button from "../components/Button";
import SocialLoginTemplate from "../components/SocialLoginTemplate";
const SignupPage = () => {
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
            type="text"
            label="닉네임"
            name="userNickname"
            placeholder="닉네임을 입력해주세요."
            errorMsg="닉네임을 입력해주세요."
          ></FormField>
          <FormField
            type="password"
            label="비밀번호"
            name="userPassword"
            placeholder="비밀번호를 입력해주세요."
            errorMsg="비밀번호를 8자 이상 입력해주세요."
          ></FormField>
          <FormField
            type="password"
            label="비밀번호 확인"
            name="userPasswordConfirm"
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
            회원가입
          </Button>
          <SocialLoginTemplate></SocialLoginTemplate>
          <AuthSwitch>
            이미 회원이신가요?
            <Link to="/login">로그인</Link>
          </AuthSwitch>
        </Form>
      </AuthTemplate>
    </>
  );
};
export default SignupPage;
