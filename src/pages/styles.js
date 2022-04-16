export const styles = {
  container: {
    display: "flex",
    // padding: "20px",
    flexDirection: "column",
    flex: 1,
    // height: "100vh",
    backgroundColor: "rgb(70, 174, 192)",
  },
  header: {
    padding: "20px",
    display: "flex",

    height: "70px",
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    color: "white",
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  loginView: {
    color: "white",
  },
  content: {
    display: "flex",
    // alignItems: "center",
    flexDirection: "column",
    // backgroundColor: "red",
    width: "40%",
    margin: "auto",
    padding: "20px",
    flex: 1,
  },
  heading: {
    color: "white",
    fontSize: "2.5rem",
    fontWeight: "200",
    textAlign: "center",
  },
  feedList: {
    marginTop: "20px",
    transition: "2.5s ease-in-out",
  },
  feedItem: {
    paddingTop: "10px",
    paddingBottom: "10px",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
  },
  feedItemText: {
    color: "white",
    fontSize: "18px",
    marginTop: "10px",
  },
};
