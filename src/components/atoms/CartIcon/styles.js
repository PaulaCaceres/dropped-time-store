import { colors } from '../../../styles/colors';

export const styles = (theme) => ({
  cartIcon: {
    width: '3rem',
    color: colors.secondary.main,
    "&:hover": {
      color: colors.secondary.dark,
    },
  }
});