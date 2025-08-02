import '../../styles/auth.css';
import ic_kakao from '../../assets/icons/ic_kakao.png';
import ic_google from '../../assets/icons/ic_google.png';
import { Link, useOutletContext } from 'react-router';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

/**
 * 로그인 화면
 */
export default function Login() {
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
   * React-Hook-Form 사용 객체 선언
   */
  const {
    register,
    formState: { errors },
    handleSubmit,
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
          <form id="form" className="form-box" onSubmit={handleSubmit}>
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
            </div>
            <button id="login-btn" className="auth-btn" type="button">
              로그인
            </button>
          </form>
          <div className="social-login-container">
            <p className="basic-p">간편 로그인하기</p>
            <div className="sns-icon-box">
              <a href="https://www.google.com/">
                <img
                  src={ic_google}
                  alt="ic_google"
                  width="42px"
                  height="42px"
                />
              </a>
              <a href="https://www.kakaocorp.com/page/">
                <img src={ic_kakao} alt="ic_kakao" width="42px" height="42px" />
              </a>
            </div>
          </div>
          <p className="link-signup">
            판다마켓이 처음이신가요?&nbsp; <Link to="/signup">회원가입</Link>
          </p>
        </div>
      </div>
    </>
  );
}
