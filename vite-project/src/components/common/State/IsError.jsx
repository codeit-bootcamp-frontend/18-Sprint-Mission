const IsError = ({ message = "문제가 발생했습니다. 다시 시도해주세요." }) => {
  return (
    <div style={styles.container}>
      <p style={styles.text}>❗ {message}</p>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
    color: "#d32f2f",
    backgroundColor: "#F3F4F6",
    width: "100%",
    height: "674px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: "1.2rem",
  },
};

export default IsError;
