import { useState } from "react";
import { dataUniverse } from './dataUniverse'
import './App.css';
import previous from './previous.png';
import next from './next.png'

function Universe(){
    const [world, setWorld] = useState(0);
    const {universe, description, universePicture} = dataUniverse[world];

    const previousUniverse = () => {
        setWorld((world => {
            world --;
            if(world <0){
                return dataUniverse.length -1;
            }
            return world;
        }))}

    const nextUniverse =() => {
        setWorld((world =>{
            world ++;
          if (world > dataUniverse.length -1 ){
            world =0;
          }
            return world;
        }))}

    return(
<div>
    <h1 className='container'> EXPLORE THE TRANSFORMERS UNIVERSE</h1>
        <div>
        <h2 className='container '>{universe}</h2>
        </div>

        <div>
        <p className='container descr'>{description}</p>
        </div>

        <div className="buttons">
            <button onClick={previousUniverse} ><img src={previous} /></button>
        <img src = {universePicture} width = '600px' alt="picture"/>
            <button onClick={nextUniverse} ><img src={next} /></button>
        </div>

</div>
    )
}
export default Universe;