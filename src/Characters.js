import React from 'react';
import { useState } from 'react';
import { data } from './data';
import Buttons from './Buttons'
import Transformers from './Transformers'
import './App.css';


function Characters () {
    const[transformers, setTransformers] = useState(data)
    const chosenType =(type) =>{
      const newTransformers =data.filter(element => element.type ===type)
   setTransformers(newTransformers)
    }
    return(
        <div >
    
         <div >
        <h1 className='container'> DISCOVER THE TRANSFORMERS</h1>
        <p className='container descr'> Transformers are living, human-like robots with the unique ability to turn into vehicles or beasts. The stories of their lives, their hopes, their struggles, and their triumphs are chronicled in epic sagas that span an immersive and exciting universe where everything is More Than Meets the Eye.</p>
        </div>
        
        <div>
<Buttons filteredTransformers={chosenType}/>
<Transformers anyTransformers = {transformers}/>
</div>

</div>
  )
  
}

export default Characters;