
import { Typography,Button,Container,makeStyles,TextField,Radio,RadioGroup,FormControlLabel,FormLabel,FormControl } from "@material-ui/core";
// import SendIcon from '@material-ui/icons/Send';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { useState } from "react";
import { useHistory } from "react-router-dom";


const useStyles=makeStyles({
  // btn:{
  //   fontSize:60,
  //   backgroundColor:"green",
  //   "&:hover":{
  //     backgroundColor:"blue"
  //   }

  // },
  // title:{
  //   textDecoration:"underline",
  //   marginBottom:20
  // }
  field:{
    marginTop:20,
    marginBottom:20,
    display:"block"
  }
})

export default function Create() {

  const classes=useStyles();
  const [title,setTitle]=useState("");
  const [details,setDetails]=useState("");
  const [titleError,setTitleError]=useState(false);
  const [detailsError,setDetailsError]=useState(false);
  const [category,setCategory]=useState("");

  const history=useHistory();

  const handleSubmit=(e)=>{
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if(title==""){
      setTitleError(true);
    }
    if(details==""){
      setDetailsError(true);
    }

    if(title && details){
      fetch("http://localhost:8000/notes",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({title,details,category})
      }).then(()=>history.push("/"));

    }
    
  };

  return (
    <Container>
      {/* <Typography 
        variant="h1"
        color="primary"
        align="center"
      >
          Creating a new note
      </Typography>
      <Typography 
        color="secondary"
        align="center"
        gutterBottom="true"
      >
        demo text
      </Typography>
      <Typography 
        color="error"
        align="center"
        noWrap="true"
        
      >
          lxycxcysd  acsaxcasc scadscscax wcds  sacacsdcd scsdcasdsc  cadscdacs sdacadqwedasc ecascadwdas adeacscacaswascas dasdwsaiucjilsdajkfabfrekjncklanfvraekhbfnasjkfnauewbgfaelbsdnvcjeabhfuealfjskanvfkjdsanvjabjfaslmmy namw is ali alslama ama a siuper sayien
      </Typography> */}


      {/* <Button type="Submit" color="primary" >Submit</Button>
      <Button type="Submit" color="Secondary" variant="outlined" >Submit</Button>


      <ButtonGroup variant="contained" color="primary">
        <Button >One</Button>
        <Button >One</Button>
        <Button >One</Button>
      </ButtonGroup> */}


      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
        // className={classes.title}
      >
        Create a New Note
      </Typography>
      
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField 
          onChange={(e)=>setTitle(e.target.value)}
          label="Note Title"
          variant="outlined"
          fullWidth
          required
          className={classes.field}
          error={titleError}
        />
        <TextField 
          onChange={(e)=>setDetails(e.target.value)}
          label="Note Details"
          variant="outlined"
          fullWidth
          required
          multiline
          rows="4"
          className={classes.field}
          error={detailsError}
        />

        <FormControl className={classes.field}>
        <FormLabel>Note Category</FormLabel>
        <RadioGroup value={category} onChange={(e)=>setCategory(e.target.value)} >
          {/* <Radio value="Hello" color="primary" /> */}
          {/* <Radio value="Goodbye" color="primary" /> */}
          <FormControlLabel  value="money" control={<Radio color="primary" />} label="Money"  />
          <FormControlLabel  value="todos" control={<Radio color="primary" />} label="Todos"  />
          <FormControlLabel  value="reminder" control={<Radio color="primary" />} label="Reminder"  />
          <FormControlLabel  value="work" control={<Radio color="primary" />} label="Work"  />
        </RadioGroup>
        </FormControl>

        <Button
        // className={classes.btn}
        variant="contained"
        color="Primary"
        type="submit"
        // startIcon={<SendIcon/>}
        endIcon={<ArrowRightIcon/>}
        
      >
        Submit
      </Button>
      </form>

      
      


    </Container>
  )
}
