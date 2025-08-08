import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import AuthWrapper, { AuthSwitch } from "@/components/Form/AuthWrapper";
import FormField, { Form } from "@/components/Form/FormField";
import Button from "@/components/Button";
import SocialLogin from "@/components/Form/SocialLogin";
import useFormValidation from "@/hooks/useFormValidation";
const LoginPage = () => {
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
    userPassword: "",
  });

  const handleSubmitButton = (e) => {
    e.preventDefault();
    handleSubmit();
    if (isFormValid) {
      navigate("/items");
    }
  };

  return (
    <AuthWrapper>
      <Helmet>
        <title>판다마켓 - 로그인</title>
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
        <Button
          type="submit"
          size="lg"
          round="true"
          full="true"
          disabled={!isFormValid}
          onClick={handleSubmitButton}
        >
          로그인
        </Button>
        <SocialLogin></SocialLogin>
        <AuthSwitch>
          판다마켓이 처음이신가요?
          <Link to="/signup">회원가입</Link>
        </AuthSwitch>
      </Form>
    </AuthWrapper>
  );
};

export default LoginPage;
