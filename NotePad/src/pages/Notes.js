import {useEffect, useState} from 'react'
import {Grid,Paper,Container} from "@material-ui/core";
import NoteCard from "../components/NoteCard"


export default function Notes() {

  const [notes,setNotes]=useState([])

  useEffect(() => {
    fetch("http://localhost:8000/notes").then(res=>res.json()).then(data=>setNotes(data));
  }, [])

  const handleDelete=async(id)=>{
    await fetch("http://localhost:8000/notes/"+id,{
      method:"DELETE"
    })

    const newNotes=notes.filter(note=>note.id!=id);
    setNotes(newNotes);
    
  }

  return (
    <Container>

      {/* <Grid container >
        <Grid item md="3" xs="12" sm="6">
          <Paper>1</Paper>
        </Grid>
        <Grid item md="3" xs="12" sm="6">
          <Paper>2</Paper>
        </Grid>
        <Grid item md="3" xs="12" sm="6">
          <Paper>3</Paper>
        </Grid>
        <Grid item md="3"xs="12" sm="6">
          <Paper>4</Paper>
        </Grid>
      </Grid> */}

      <Grid container spacing="3">
      {
        notes.map(note=>{
          return (<Grid item lg="4" md="6" xs="12"  key={note.id}>
              <NoteCard note={note} handleDelete={handleDelete} /> 
            </Grid>)
        })
      }
      </Grid>
    </Container>
  )
}
