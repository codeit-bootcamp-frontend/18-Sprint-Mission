import { useState } from "react"
import './signup.css';
import loginLogo from '../../assets/img-login-logo.png';
import visibleIcon from '../../assets/visible.svg';
import hiddenIcon from '../../assets/hidden.svg';
import googleIcon from '../../assets/ic-login-google.png';
import kakaoIcon from '../../assets/ic-login-kakao.png';

export default function SignupPage () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState(''); 
    const [passwordCheck, setPasswordCheck] = useState(''); 
    type ErrorState = {
        email?: string;
        password?: string;
        nickname?: string;
        passwordCheck?: string;
    }
    const [errors, setErrors] = useState<ErrorState>({});
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordCheck, setShowPasswordCheck] = useState(false);
    
    const validateEmail = (value: string) => {
        if(!value) return '이메일을 입력해주세요.';
        const emailRegex = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
        if(!emailRegex.test(value)) return '잘못된 이메일입니다.';
        return '';
    }

    const validateNickname = (value: string) => {
        if(!value) return '닉네임을 입력해주세요.';
        return '';
    }

    const validatePassword = (value: string) => {
        if(!value) return '비밀번호를 입력해주세요.';
        if(value.length < 8) return '비밀번호를 8자 이상 입력해주세요.';
        return '';
    }

    const validatePasswordCheck = (value: string) => {
        if(!value) return '비밀번호를 입력해주세요.';
        if(value !== password) return '비밀번호가 일치하지 않습니다.';
        return '';
    }

    const isValid = () => {
        const emailError = validateEmail(email);
        const passwordError = validatePassword(password);
        const nicknameError = validatePassword(nickname);
        const passwordCheckError = validatePasswordCheck(passwordCheck)
        setErrors({email: emailError, password: passwordError, nickname: nicknameError, passwordCheck: passwordCheckError});
        return !emailError && !passwordError && !nicknameError && !passwordCheckError;
    }

return(
    <>
    <body className="signup-body">
      <main className="signup-main">
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
            <label htmlFor="nickname">닉네임</label>
            <input
              id="nickname"
              name="nickname"
              type="text"
              placeholder="닉네임을 입력해주세요"
              onChange={(e) => {
                setNickname(e.target.value);
                setErrors((prev) => ({...prev, nickname: validateNickname(e.target.value)}))
              }}
              className={errors.nickname ? 'errorborder' : ''}
              required
            />
            {errors.nickname && (
                <span className='errortext'>{errors.nickname}</span>
            )}
          </div>
          <div className="input-div">
            <label htmlFor="password">비밀번호</label>
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="비밀번호를 입력해주세요"
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors((prev) => ({...prev, password: validatePassword(e.target.value)}))
              }}
              className={errors.password ? 'errorborder' : ''}
              required
            />
            <button className="pw-visibility" type="button" onClick={() => setShowPassword((prev) => !prev)}>
              <img src={showPassword ? visibleIcon : hiddenIcon}
                  alt={showPassword ? "비밀번호 보이기" : "비밀번호 숨기기"} />
            </button>
          </div>
          {errors.password && (
            <span className='errortext'>{errors.password}</span>
          )}

          <div className="input-div">
            <label htmlFor="passwordCheck">비밀번호 확인</label>
            <input
              id="passwordCheck"
              name="passwordCheck"
              type={showPasswordCheck ? 'text' : 'password'}
              placeholder="비밀번호를 다시 한 번 입력해주세요"
              onChange={(e) => {
                setPasswordCheck(e.target.value);
                setErrors((prev) => ({...prev, passwordCheck: validatePasswordCheck(e.target.value)}))
              }}
              className={errors.passwordCheck ? 'errorborder' : ''}
              required
            />
            <button className="pw-visibility" type="button" onClick={() => setShowPasswordCheck((prev) => !prev)}>
              <img src={showPasswordCheck ? visibleIcon : hiddenIcon}
                  alt={showPasswordCheck ? "비밀번호 보이기" : "비밀번호 숨기기"} />
            </button>
          </div>
          {errors.passwordCheck && (
            <span className='errortext'>{errors.passwordCheck}</span>
          )}

          <button className="form-button" type="submit" disabled={!email || !password || !!errors.email || !!errors.password}>로그인</button>
        </form>
        <div className="login-simple">
          <h1>간편 로그인하기</h1>
          <div>
            <a href="https://www.google.com"
              ><img src={googleIcon} alt="구글"
            /></a>
            <a href="https://www.kakaocorp.com/page"
              ><img src={kakaoIcon} alt="카카오"
            /></a>
          </div>
        </div>
      </main>
      <footer className="login-footer">
        <span>이미 회원이신가요?</span>
        <a href="/login">로그인</a>
      </footer>
    </div>
    </div>
    </main>
    </body>
    </>
)
}