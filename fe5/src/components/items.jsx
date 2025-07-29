import React from 'react';
import '../css/home.css';
import '../css/global.css';

function Items() {
  return (
    <div>
      <header>
        <a href="index.html" aria-label="홈으로 이동">
          <img src="images/logo/logo.svg" alt="판다마켓 로고" width="153" />
        </a>
        <a href="login.html" id="loginLink" className="button">
          로그인
        </a>
      </header>
    </div>
  );
}

export default Items;
