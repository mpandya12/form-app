
import './App.css';
import Header from './components/Header';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import React,{useState} from 'react';
import Filds from './components/Filds';

function App() {
  const [name,setname]=useState("");
  const[email,setemail]=useState("");
  const[data,setdata]=useState([]);

  const uplod=(()=>{
    setdata([...data,{name,email}])
    setname("");
    setemail("");
  })
  return (
    <div className="App">
      <Header/>
      <div className='form'>
      <Stack direction="row" spacing={2}>
      <TextField id="outlined-basic"
       value={name} 
       label="Name" 
       variant="outlined"
       onChange={((ele)=>{
setname(ele.target.value);
       })}  
      
      />
      <TextField id="outlined-basic" value={email} label="Email" variant="outlined"
      onChange={((ele)=>{
        setemail(ele.target.value);
        })} 
      />
      <Button variant="contained" color="error"
      onClick={uplod}
      >
       +
      </Button>
      </Stack>
      </div>
      <div className='data'>
       
      </div>
      {
        data.map((ele,index)=>{
          return(
            <Filds key={index} name={ele.name} email={ele.email} index={index}/>
          )
        })
      }
    </div>
  );
}

export default App;
