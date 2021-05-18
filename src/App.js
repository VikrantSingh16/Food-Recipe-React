import './App.css';
import React,{useState,useEffect} from 'react'
import Recipe from './components/Recipe'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function App() {
 const APP_ID= "8cc6daac";
 const APP_KEY="27061963aec5409c52f083bba93a645d";
 const [recipes,setRecipes]=useState([]);
 const [search,setSearch]=useState('');
 const [querry,setQuerry]=useState('')
 useEffect(()=>{
getRecipes();
 },[querry]);
const getRecipes=async()=>{
  const response =await fetch(
    `https://api.edamam.com/search?q=${querry}&app_id=${APP_ID}&app_key=${APP_KEY}`);

    const data= await response.json();
console.log(data.hits);
setRecipes(data.hits);
}
const updateSearch=(e)=>{
setSearch(e.target.value);
}
const getSearch =e=>{
  e.preventDefault();
  setQuerry(search);
  setSearch('');
}
  return (
   
   <center>
     <h1>Feel the best taste</h1>
      <form onSubmit={getSearch} className="search-form">
        <TextField className="search-bar" type="text"value={search} onChange={updateSearch} id="standard-basic" label="Wanna try something new?" />
       <Button className='btn' type="submit" variant="contained" color="secondary">Go</Button>

      </form>
      {recipes.map(recipe=>(
        <Recipe title={recipe.recipe.label} image={recipe.recipe.image} calories={recipe.recipe.calories}
        ingredients={recipe.recipe.ingredients}
        />
      ))}
      </center>
  
  );
}

export default App;
