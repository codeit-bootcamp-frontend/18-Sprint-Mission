const IsLoading = () => {
  return (
    <div style={styles.container}>
      <p style={styles.text}>로딩 중...</p>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
  },
  text: {
    fontSize: "1.2rem",
    color: "#555",
  },
};

export default IsLoading;
