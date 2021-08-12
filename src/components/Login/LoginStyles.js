export default (theme) => ({
  root: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    padding: "10px",
    marginBottom: "20px",
  },
  input: {
    marginTop: "25px",
    width: "400px",
  },
  forget: {
    marginTop: "30px",
  },
  button: {
    marginBottom: "25px",
    marginTop: "25px",
    display: "flex",
    justifyContent: "center",
    padding: "10px",
  },
  item: {
    display: "flex",
    justifyContent: "center",
    padding: "10px",
  },
  paper: {
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(5),
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  logo: {
    width: "150px",
    height: "150px",
  },
});
