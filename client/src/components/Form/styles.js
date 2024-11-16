import { styled } from '@mui/system'
import { useTheme } from '@mui/material/styles'

const useStyles = () => {
  const theme = useTheme();

  return styled('div')({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
      },
    },
    paper: {
      padding: theme.spacing(2),
    },
    form: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    fileInput: {
      width: '97%',
      margin: '10px 0',
    },
    buttonSubmit: {
      marginBottom: 10,
    },
  });
};

export default useStyles;
