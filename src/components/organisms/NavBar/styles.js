export const styles = (theme) => ({
  mainContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    height: "50px",
    alignItems: 'center',
    display: 'flex',
    justifyContent: "space-around"
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
    display: 'flex',
    flexDirection: 'row',
    textTransform: 'uppercase',
    textDecoration: 'none',
    alignItems: 'center',
    color: '#ffd0b0',
    "&:hover": {
      color: "#ff9e80",
    },
  },
  cartIcon: {
    width: '1rem'
  },
  cartAmount: {
    fontSize: '1rem',
    margin: 0,
    padding: 0
  }
});
