import { createStyles } from "@material-ui/core/styles";

export const styles = (theme) => {
  return createStyles({
    mainContainer: {
      height: '100vh',
    },
    text: {
      width: '50%',
      padding: '6rem',
      textAlign: 'justify',
      margin: 'auto',
      fontSize: '1.2rem'
    },
    socialContainer: {
      textAlign: 'center',
    },
    socialIcon: {
      width: '2rem',
      margin: '1rem',
      '&:hover': {
        opacity: '0.8'
      }
    }
  });
};
