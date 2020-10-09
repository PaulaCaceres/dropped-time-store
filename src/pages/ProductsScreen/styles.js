import { createStyles } from "@material-ui/core/styles";

export const styles = (theme) => {
  return createStyles({
    mainContainer: {
      margin: '2rem'
    },
    title: {
      fontSize: '3rem',
      fontWeight: '700'

    },
    icon: {
    },
    breadcrumbs: {
      color: 'black',
    },
    selectedBreadcrumb: {
      fontWeight: '500'
    },
    link: {
      padding: '0.5rem',
      textDecoration: 'none',
      color: 'black',
      '&:hover': {
        textDecoration: 'underline',
        color: 'grey',

      }
    }
  });
};
