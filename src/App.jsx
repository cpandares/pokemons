import  {   useState } from 'react';
import CardPokemons from './components/CardPokemons';
import Header from './components/Header';
import TablePokemons from './components/TablePokemons';


import Pokemon from './views/Pokemon';

const App = () => {

  

  const [ active, setActive ] = useState(false);
  const [ id, setId ] = useState(null); 

  const handleActive = ()=>{
    setActive(false)
  }

  const handleEdit = (id)=>{
    setActive(true)  
    setId(id)    

  }



  return (
    <div className='container'>
       <Header         
          handleActive = { handleActive }
          />

        <TablePokemons 
          
          
          handleEdit = {handleEdit}
          />
       {
        !active  ? <CardPokemons  /> : <Pokemon id = { id }  />
       }

       
    </div>
  );
};

export default App;