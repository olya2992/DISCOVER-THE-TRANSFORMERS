import React from 'react';
import { useState } from 'react';
import { dataMovie } from "./dataMovie";
import previous from './previous.png';
import next from './next.png'

function Movies(){
    const [movie, setMovie] = useState(0);
    const[showMore, setShowMore] = useState(false)

    const {film, descriptionFilm, filmPicture} = dataMovie[movie];
    const previousMovie = ()=>{
        setMovie((movie =>{
            movie --;
            if ( movie <0 ){
                return dataMovie.length -1;
            }
            return movie;
        })) 

    }

    const nextMovie = () => {
        setMovie((movie =>{
            movie ++;
            if(movie > dataMovie.length-1){
                movie = 0;
                
            }
            return movie;
        }))}

    return(
        <div>

        <div className='container'>
            <h2 >{film}</h2>
        </div>
        <div className='container descr'>
            <p >{showMore? descriptionFilm : descriptionFilm.substring(0, 120) + '...'}
            <button className='btn' onClick={()=>setShowMore(!showMore)} >{showMore ? 'Show less':'Show more'}</button> </p>
        </div>

        <div className='container'>
        <button onClick={previousMovie} ><img src={previous} /></button>
        <img src = {filmPicture} width = '600px' alt="picture"/>
            <button onClick={nextMovie} ><img src={next} /></button>
        </div>


        </div>
    )
}
export default Movies;