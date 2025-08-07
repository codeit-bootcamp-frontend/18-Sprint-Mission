const IsLoading = ({ type }) => {
  return (
    <div style={styles[type]}>
      <p style={styles.text}>로딩 중...</p>
    </div>
  );
};

const styles = {
  ALL: {
    width: "100%",
    height: "674px",
    padding: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "var(--gray-100)",
  },
  BEST: {
    width: "100%",
    height: "378px",
    padding: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "var(--gray-100)",
  },
  text: {
    fontSize: "1.2rem",
    color: "#555",
  },
};

export default IsLoading;
