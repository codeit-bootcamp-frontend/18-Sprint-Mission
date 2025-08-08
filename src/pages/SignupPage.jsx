import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import AuthWrapper, { AuthSwitch } from "@/components/Form/AuthWrapper";
import FormField, { Form } from "@/components/Form/FormField";
import Button from "@/components/Button";
import SocialLogin from "@/components/Form/SocialLogin";
import useFormValidation from "@/hooks/useFormValidation";

const SignupPage = () => {
  const navigate = useNavigate();
  const {
    formData,
    formErrors,
    isFormValid,
    showPassword,
    togglePassword,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormValidation({
    userEmail: "",
    userNickname: "",
    userPassword: "",
    userPasswordConfirm: "",
  });

  const handleSubmitButton = (e) => {
    e.preventDefault();
    handleSubmit();
    if (isFormValid) {
      navigate("/login");
    }
  };

  return (
    <AuthWrapper>
      <Helmet>
        <title>판다마켓 - 회원가입</title>
      </Helmet>
      <Form>
        <FormField
          type="email"
          label="아이디"
          name="userEmail"
          placeholder="이메일을 입력해주세요."
          errorMsg={formErrors.userEmail}
          value={formData.userEmail}
          onChange={handleChange}
          onBlur={handleBlur}
        ></FormField>
        <FormField
          type="text"
          label="닉네임"
          name="userNickname"
          placeholder="닉네임을 입력해주세요."
          errorMsg={formErrors.userNickname}
          value={formData.userNickname}
          onChange={handleChange}
          onBlur={handleBlur}
        ></FormField>
        <FormField
          type="password"
          label="비밀번호"
          name="userPassword"
          placeholder="비밀번호를 입력해주세요."
          errorMsg={formErrors.userPassword}
          value={formData.userPassword}
          onBlur={handleBlur}
          onChange={handleChange}
          showPassword={showPassword}
          onTogglePassword={togglePassword}
        ></FormField>
        <FormField
          type="password"
          label="비밀번호 확인"
          name="userPasswordConfirm"
          placeholder="비밀번호를 입력해주세요."
          errorMsg={formErrors.userPasswordConfirm}
          value={formData.userPasswordConfirm}
          onBlur={handleBlur}
          onChange={handleChange}
          showPassword={showPassword}
          onTogglePassword={togglePassword}
        ></FormField>

        <Button
          type="submit"
          size="lg"
          round="true"
          full="true"
          disabled={!isFormValid}
          onClick={handleSubmitButton}
        >
          회원가입
        </Button>
        <SocialLogin></SocialLogin>
        <AuthSwitch>
          이미 회원이신가요?
          <Link to="/login">로그인</Link>
        </AuthSwitch>
      </Form>
    </AuthWrapper>
  );
};
export default SignupPage;
