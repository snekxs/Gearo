import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import { Modal } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { createClient } from '@supabase/supabase-js';
import { color } from '@mui/system';
import Select from 'react-select'





export default function PostButton() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const [data, setData] = useState([]);
  const handleClose = () => setOpen(false);


  React.useEffect(() => {
    fetch('/api/products')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);


  const mouseNamesFilter = data.data?.filter((item) => item.type === 'mouse')
  const mouseNames = mouseNamesFilter?.map((item) => ({ value: item.name, label: `${item.brand} ${item.name}` })).sort((a, b) => a.label.localeCompare(b.label))
  const mousepadNamesFilter = data.data?.filter((item) => item.type === 'mousepad')
  const mousepadNames = mousepadNamesFilter?.map((item) => ({ value: item.name, label: `${item.brand} ${item.name}` })).sort((a, b) => a.label.localeCompare(b.label))
  const supabaseUrl = "https://ridzyuyhihrriayeweqw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpZHp5dXloaWhycmlheWV3ZXF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ4OTI5NTUsImV4cCI6MTk5MDQ2ODk1NX0.dNloclNcqXm6V_w1TJ19RV3PXRSjOY03DXNfdFVhfRU";
const supabase = createClient(supabaseUrl, supabaseKey);
  
  

  
const [isSearchable, setIsSearchable] = useState(true);
const [isClearable, setIsClearable] = useState(true);
const [mouse, setMouse] = useState(null);
const [mousepad, setMousepad] = useState(null);

const submit = () => {
  const name = document.querySelector('.input').value
  const mouseName = mouse.value
  const mousepadName = mousepad.value
  const { data, error } = supabase
  .from('users')
  .insert([
    { name: name, mouse: mouseName, mousepad: mousepadName },
  ])
  .single()
  .then((data) => {
    return(
      alert('Success!')
    )

  }
  )
  .catch((error) => {
    console.log(error)
  }
  )
}


  
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: 6,
  boxShadow: 24,
  p: 4,
};



const customStyles = {
  option: provided => ({
    ...provided,
    color: 'black'
  }),
  control: provided => ({
    ...provided,
    color: 'black'
  }),
  singleValue: provided => ({
    ...provided,
    color: 'black'
  })
}




    return (
      <>
        <Fab color="primary" aria-label="add"  onClick={handleOpen}>
        <AddIcon />
      </Fab>

<Modal
open={open}
onClose={handleClose}
aria-labelledby="modal-modal-title"
aria-describedby="modal-modal-description"
>
<Box sx={style}>
<h1 id="modal-modal-title" className='mainText'>Placeholder</h1>
<label className='text'>Name</label>
<input className='input' type="text" placeholder="Name" />
<label className='text'>Mouse</label>
<Select options={mouseNames} styles={customStyles} onChange={(choice)=> setMouse(choice)} isSearchable={isSearchable} isClearable={isClearable} />
<label className='text'>Mousepad</label>
<Select options={mousepadNames} styles={customStyles} onChange={(choice)=> setMousepad(choice)} isSearchable={isSearchable} isClearable={isClearable}  />


    

    
    


<button className='submitButton' onClick={submit}>Submit</button>
</Box>
</Modal>
</>

    )
}