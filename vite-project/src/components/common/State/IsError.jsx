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
  },
  text: {
    fontSize: "1.2rem",
  },
};

export default IsError;
