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

import { color } from '@mui/system';
import Select from 'react-select'





export default function PostButton() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const [data, setData] = useState([]);
  const handleClose = () => setOpen(false);
  const [value, setValue] = useState("Red");

  React.useEffect(() => {
    fetch('http://localhost:3000/api/products')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);


  const mouseNamesFilter = data.data?.filter((item) => item.type === 'mouse')
  const mouseNames = mouseNamesFilter?.map((item) => ({ value: item.name, label: item.name }))
  const mousepadNamesFilter = data.data?.filter((item) => item.type === 'mousepad')
  const mousepadNames = mousepadNamesFilter?.map((item) => ({ value: item.name, label: item.name }))


  
  

  
const [isSearchable, setIsSearchable] = useState(true);
const [isClearable, setIsClearable] = useState(true);
  
  
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

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

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
<label className='text'>Mouse</label>
<Select options={mouseNames} styles={customStyles} isSearchable={isSearchable} isClearable={isClearable} />
<label className='text'>Mousepad</label>
<Select options={mousepadNames} styles={customStyles} isSearchable={isSearchable} isClearable={isClearable} />


    

    
    


<button className='submitButton' onClick="">Submit</button>
</Box>
</Modal>
</>

    )
}