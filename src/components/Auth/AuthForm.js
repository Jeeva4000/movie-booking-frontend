import React, {  useState, } from 'react';
import {
  Box,
  Button,
  Dialog,
  FormLabel,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const labelStyle = { mt: 0, mb: 1 };

const AuthForm = ({onSubmit,isAdmin}) => {
  const [isSignup, setIsSignup] = useState(false);
  const [open, setOpen] = useState(true);
  const [inputs,setInputs]=useState({
    name:"",
    email:"",
    password:""
  })

  const handleClose = () => {
  
    setIsSignup(false); 
    setOpen(false);
  };

//   useEffect(() => {
//     if (open) {
//       document.body.style.overflow = 'hidden'; 
//     } else {
//       document.body.style.overflow = 'auto'; 
//     }
//   }, [open]);
const handlechange=(e)=>{
    setInputs((prevState)=>({
        ...prevState,
        [e.target.name] : e.target.value,
    }))
}

const handleSubmit=(e)=>{
    e.preventDefault();
    // console.log(inputs);
    onSubmit({inputs,signup: isAdmin?false:isSignup})
}

  return (
    <Dialog PaperProps={{ style: { borderRadius: 20, marginTop: 80 } }} open={open} onClose={handleClose}>
      <Box sx={{ ml: 'auto', padding: 1 }}>
        <IconButton onClick={handleClose}>
          <CloseRoundedIcon />
        </IconButton>
      </Box>
      <Typography variant="h4" textAlign="center" sx={{ mt: 2 }}>
        {isSignup ? 'Signup' : 'Login'}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box
          padding={6}
          display="flex"
          justifyContent="center"
          flexDirection="column"
          width={400}
          height={280}
          margin="auto"
          alignContent="center"
        >
          {!isAdmin && isSignup && ( 
            <>
              <FormLabel sx={labelStyle}>Name</FormLabel>

              <TextField 
                value={inputs.name} 
                onChange={handlechange}
              margin="normal" 
              variant="standard" 
              type="name" 
              name="name" />
            </>
          )}

          <FormLabel sx={labelStyle}>Email</FormLabel>
          <TextField 
          value={inputs.email} 
          onChange={handlechange}
          margin="normal" 
          variant="standard" 
          type="email" 
          name="email" 
        

          />

          <FormLabel sx={labelStyle}>Password</FormLabel>
          <TextField 
          value={inputs.password} 
          onChange={handlechange}
          margin="normal" 
          variant="standard" 
          type="password" 
          name="password" 

          />

          <Button
            sx={{ mt: 2, borderRadius: 10, bgcolor: '#2b2d42' }}
            type="submit"
            fullWidth
            variant="contained"
          >
            {isSignup ? 'SIGNUP' : 'LOGIN'}
          </Button>
          {!isAdmin && (<Button
            onClick={() => setIsSignup(!isSignup)}
            sx={{ mt: 2, borderRadius: 10 }}
            type="button"
            fullWidth
          >
            Switch To {isSignup ? 'Login' : 'Signup'}
          </Button>)}
        </Box>
      </form>
    </Dialog>
  );
};

export default AuthForm;
