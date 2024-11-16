import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';

const useStyles = () => {
  const theme = useTheme();

  return styled('div')({
    mainContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    smMargin: {
      margin: theme.spacing(1),  // Accessing the theme
    },
    actionDiv: {
      textAlign: 'center',
    },
  });
};

export default useStyles;
