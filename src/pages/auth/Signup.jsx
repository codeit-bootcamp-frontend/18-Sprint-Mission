import { Link, useOutletContext } from 'react-router';
import '../../styles/auth.css';
import ic_kakao from '../../assets/icons/ic_kakao.png';
import ic_google from '../../assets/icons/ic_google.png';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

/**
 * 회원가입 화면
 */
export default function Signup() {
  const { visible, setVisible, onClickVisible, visibleEye_off, visibleEye_on } =
    useOutletContext();

  /**
   * 기본적으로 비밀번호 숨김 상태 유지
   */
  useEffect(() => {
    setVisible((prevState) => ({
      ...prevState,
      pw: false,
    }));
  }, []);

  /**
   * 회원가입 양식 정보를 담고 있는 객체
   * 이메일, 닉네임, 비밀번호, 비밀번호 확인
   */
  const [signupForm, setSignupForm] = useState({
    email: '',
    nickname: '',
    pw: '',
  });

  /**
   * React-Hook-Form 사용 객체 선언
   */
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm({ mode: 'onBlur' });

  return (
    <>
      <div className="auth-main-container">
        <div className="container">
          <div className="auth-logo">
            <Link to="/">
              <div className="auth-logo-img"></div>
            </Link>
          </div>

          <form id="signup-form" onSubmit={handleSubmit}>
            <div className="input-container">
              <div id="email-box" className="email-box">
                <label htmlFor="email" className="basic-p">
                  이메일
                </label>
                <input
                  className={`input-box email ${
                    errors.email ? 'auth-err-border' : ''
                  }`}
                  name="email"
                  type="email"
                  placeholder="이메일을 입력해주세요"
                  {...register('email', {
                    required: true,
                    pattern:
                      /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  })}
                />
              </div>
              {errors.email && (
                <p className="auth-err-msg">잘못된 이메일입니다.</p>
              )}

              <div id="nickname-box" className="nickname-box">
                <label htmlFor="nickname" className="basic-p">
                  닉네임
                </label>
                <input
                  name="nickname"
                  className={`input-box nickname ${
                    errors.nickname ? 'auth-err-border' : ''
                  }`}
                  type="text"
                  placeholder="닉네임을 입력해주세요"
                  {...register('nickname', {
                    required: true,
                    minLength: 2,
                    maxLength: 10,
                  })}
                />
              </div>
              {errors.nickname?.type === 'required' && (
                <p className="auth-err-msg">닉네임을 입력해주세요</p>
              )}
              {errors.nickname?.type === 'maxLength' && (
                <p className="auth-err-msg">닉네임이 너무 깁니다.</p>
              )}

              <div id="pw-box" className="pw-box">
                <label htmlFor="pw" className="basic-p pw-label">
                  비밀번호
                </label>
                <input
                  className={`input-box pw ${
                    errors.password ? 'auth-err-border' : ''
                  }`}
                  name="password"
                  type={visible.pw ? 'text' : 'password'}
                  placeholder="비밀번호를 입력해주세요"
                  {...register('password', {
                    required: true,
                    minLength: 8,
                  })}
                />
                <div className="auth-visible-icon">
                  <img
                    id="pw"
                    src={visible.pw ? visibleEye_on : visibleEye_off}
                    alt="visible-icon"
                    onClick={(e) => {
                      onClickVisible(e.target.id);
                    }}
                  />
                </div>
              </div>
              {errors.password?.type === 'required' && (
                <p className="auth-err-msg">비밀번호를 입력해주세요</p>
              )}
              {errors.password?.type === 'minLength' && (
                <p className="auth-err-msg">
                  비밀번호를 8자 이상 입력해주세요.
                </p>
              )}

              <div id="pw-check-box" className="pw-box">
                <label htmlFor="pw-check" className="basic-p pw-label">
                  비밀번호 확인
                </label>
                <input
                  className={`input-box pw ${
                    errors.confirmPassword ? 'auth-err-border' : ''
                  }`}
                  name="checkPassword"
                  type={visible.checkPw ? 'text' : 'password'}
                  placeholder="비밀번호를 다시 한 번 입력해주세요"
                  {...register('confirmPassword', {
                    required: true,
                    minLength: 8,
                    validate: () =>
                      getValues('password') === getValues('confirmPassword'),
                  })}
                />
                <div className="auth-visible-icon">
                  <img
                    id="checkPw"
                    src={visible.checkPw ? visibleEye_on : visibleEye_off}
                    alt="visible-icon"
                    onClick={(e) => {
                      onClickVisible(e.target.id);
                    }}
                  />
                </div>
              </div>
              {errors.confirmPassword?.type === 'minLength' && (
                <p className="auth-err-msg">
                  비밀번호를 8자 이상 입력해주세요.
                </p>
              )}
              {errors.confirmPassword?.type === 'validate' && (
                <p className="auth-err-msg">비밀번호가 일치하지 않습니다.</p>
              )}
            </div>
            <button className="auth-btn" type="submit">
              회원가입
            </button>
          </form>

          <div className="social-login-container">
            <p className="">간편 로그인하기</p>
            <div className="sns-icon-box">
              <a href="https://www.google.com/">
                <img
                  src={ic_google}
                  alt="ic-google"
                  width="42px"
                  height="42px"
                />
              </a>
              <a href="https://www.kakaocorp.com/page/">
                <img src={ic_kakao} alt="ic-kakao" width="42px" height="42px" />
              </a>
            </div>
          </div>

          <p className="link-signup">
            이미 회원이신가요?&nbsp; <Link to="/login">로그인</Link>
          </p>
        </div>
      </div>
    </>
  );
}
