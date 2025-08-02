import { useState } from 'react';
import { Outlet } from 'react-router';
import visibleEye_off from '../assets/icons/eyes_off.png';
import visibleEye_on from '../assets/icons/eyes_on.png';

export default function AuthLayout() {
  /**
   * 비밀번호 보이기 / 가리기 상태
   */
  const [visible, setVisible] = useState({
    pw: false,
    checkPw: false,
  });

  /**
   * id 별로 비밀번호 가리기 여부를 변경한다.
   * @param {string} id
   */
  const onClickVisible = (id) => {
    setVisible((prevState) => ({
      ...prevState,
      [id]: !visible[id],
    }));
  };

  return (
    <main>
      <Outlet
        context={{
          visible,
          setVisible,
          onClickVisible,
          visibleEye_off,
          visibleEye_on,
        }}
      />
    </main>
  );
}
