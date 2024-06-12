import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';


const InputPesquisa = styled(TextField)({
  width:"20vw",
  height:"2vh",
  '& label.Mui-focused': {
    color: '#077DB0',

  },'& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',

  },'& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#077DB0',
      borderWidth: 2,
      borderRadius: '1.5vh',
      
    },'&:hover fieldset': {
      borderColor: '#077DB0',
    
    },
    '&.Mui-focused fieldset': {
      borderColor: '#077DB0',
    }
    
  }
});


export default InputPesquisa;