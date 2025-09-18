import styles from "./spinner.module.css";

/**
 * 로딩 스피너 컴포넌트
 * @param {string} size - 스피너의 크기 (e.g., '50px')
 * @param {string} color - 스피너의 색상 (e.g., '#007bff')
 */
export default function Spinner({ size = "30px", color = "#7c3aed" }) {
  // 인라인 스타일을 사용하여 props로 받은 크기와 색상을 적용
  const spinnerStyle = {
    width: size,
    height: size,
    // 테두리의 기본 색상은 연한 회색으로 설정
    borderColor: "#e0e0e0",
    // 회전하는 부분의 색상을 props로 받은 color로 설정
    borderTopColor: color,
  };

  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner} style={spinnerStyle}></div>
    </div>
  );
}
