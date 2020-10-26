import { createStyles } from "@material-ui/core/styles";

export const styles = (theme) => {
  return createStyles({
    mainContainer: {
      margin: '8rem auto',
      textAlign: 'center'
    },
    text: {
      width: '50%',
      textAlign: 'center',
      margin: '2rem auto',
      fontSize: '1rem'
    },
    logoIcon: {
      width: '6rem'
    }

  });
};
