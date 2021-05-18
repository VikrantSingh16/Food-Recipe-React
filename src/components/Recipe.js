import React from 'react'
const Recipe = ({title,calories,image,ingredients})=>{
    return (
        <div className="container">
            <h1>{title}</h1>
          <h3>Total Calories : {Math.round(calories)}</h3>
           <h3 style={{color:"#f50057"}}>Recipe : </h3>
           <ul>
               {ingredients.map(ingredient=>(
                   <li>{ingredient.text}</li>
               ))}
           </ul>
            
<img src={image} alt="Error"/>

        </div>
    );
}
export default Recipe;