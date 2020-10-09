export const styles = (theme) => ({
  mainContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    height: "50px",
    alignItems: 'center',
    display: 'flex'
  },
  logoStyle: {
    width: "40px",
    height: "40px",
    backgroundColor: "white",
    padding: "0.2rem",
    borderRadius: 30,
  },
  logoTitle: {
    color: "white",
    backgroundColor: "white",
  },
  navbarItem: {
    textTransform: 'uppercase',
    textDecoration: 'none',
    color: '#ffd0b0',
    "&:hover": {
      color: "#ff9e80",
    },
    margin: '0 4rem'
  },
});
