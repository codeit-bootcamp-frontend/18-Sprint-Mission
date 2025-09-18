import { useState } from "react"
import './login.css';
import loginLogo from '../../assets/img-login-logo.png';

export default function LoginPage () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    type ErrorState = {
        email?: string;
        password?: string;
    }
    const [errors, setErrors] = useState<ErrorState>({});
    const [showPassword, setShowPassword] = useState(false);
    
    const validateEmail = (value: string) => {
        if(!value) return '이메일을 입력해주세요.';
        const emailRegex = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
        if(!emailRegex.test(value)) return '잘못된 이메일입니다.';
        return '';
    }

    const validatePassword = (value: string) => {
        if(!value) return '비밀번호를 입력해주세요.';
        if(value.length < 8) return '비밀번호를 8자 이상 입력해주세요.';
        return '';
    }

    const isValid = () => {
        const emailError = validateEmail(email);
        const passwordError = validatePassword(password);
        setErrors({email: emailError, password: passwordError});
        return !emailError && !passwordError;
    }

return(
    <>
    <div className="login-page-container">
    <div className="login-container">
      <header className="login-header">
        <a href="./"
          ><img src={loginLogo} alt="로그인 로고"
        /></a>
      </header>
      <main className="login-main">
        <form className="form-container">
          <div className="input-div">
            <label htmlFor="email">이메일</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="이메일을 입력해주세요"
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors((prev) => ({...prev, email: validateEmail(e.target.value)}))
              }}
              className={errors.email ? 'errorborder' : ''}
              required
            />
            {errors.email && (
                <span className='errortext'>{errors.email}</span>
            )}
          </div>
          <div className="input-div">
            <label htmlFor="password">비밀번호</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors((prev) => ({...prev, password: validatePassword(e.target.value)}))
              }}
              className={errors.password ? 'errorborder' : ''}
              required
            />
            <button className="pw-visibility" type="button" onClick={() => setShowPassword((prev) => !prev)}>
              <img src={showPassword ? "images/visible.svg" : "images/hidden.svg"}
                  alt={showPassword ? "비밀번호 보이기" : "비밀번호 숨기기"} />
            </button>
          </div>
          {errors.password && (
            <span className='errortext'>{errors.password}</span>
          )}
          <button className="form-button" type="submit" disabled>로그인</button>
        </form>
        <div className="login-simple">
          <h1>간편 로그인하기</h1>
          <div>
            <a href="https://www.google.com"
              ><img src="images/ic-login-google.png" alt="구글"
            /></a>
            <a href="https://www.kakaocorp.com/page"
              ><img src="images/ic-login-kakao.png" alt="카카오"
            /></a>
          </div>
        </div>
      </main>
      <footer className="login-footer">
        <span>판다마켓이 처음이신가요?</span>
        <a href="./signup.html">회원가입</a>
      </footer>
    </div>
    </div>
    </>
)
}