import React from 'react';
import { useSate, useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux'; 
import { getVideogames } from '../../redux/actions/actions';
import { Link } from 'react-router-dom'
import Card from '../CARD/Card';

export default function Home()  {

    const dispatch = useDispatch()
    const allVideogames = useSelector((state) => state.videogames)  //es como el mapStatetoProps

    useEffect(() => {   //aca armamos el dispatch 
        dispatch(getVideogames());
    },[])

    function handleClick(event){
        event.preventDefault(); //ponerlo para que no se nos recargue la página por el useEffect! 
        dispatch(getVideogames());
    }
    
    
    return (
        <div>
            <Link to='/videogames'>Add Videogame</Link> 

            {/* TITULO DE LA PAGINA */}
            <h1>VIDEOGAMES INDIVIDUAL PROJECT</h1>
            <button onClick={event => {handleClick(event)}}>All Videogames</button>

            {/* FILTROS Y ORDENAMIENTO  */}            
            <div>  
                <select>    {/* ordenar ascendente/descendente  */}
                    <option value='asc'>A-Z</option>
                    <option value='desc'>Z-A</option>
                </select>

                <select> {/* filtrar por género  */}
                    <option value='allgenres'>All Genres</option>
                    <option value='action'>Action</option>
                    <option value='indie'>Indie</option>
                    <option value='adventure'>Adventure</option>
                    <option value='rpg'>RPG</option>
                    <option value='strategy'>Strategy</option>
                    <option value='shooter'>Shooter</option>
                    <option value='casual'>Casual</option>
                    <option value='simulation'>Simulation</option>
                    <option value='puzzle'>Puzzle</option>
                    <option value='arcade'>Arcade</option>
                    <option value='platformer'>Platformer</option>
                    <option value='racing'>Racing</option>
                    <option value='multiplayer'>Massively Multiplayer</option>
                    <option value='shooter'>Shooter</option>
                    <option value='sports'>Sports</option>
                    <option value='fighting'>Fighting</option>
                    <option value='family'>Family</option>
                    <option value='board'>Board Games</option>
                    <option value='educational'>Educational</option>
                    <option value='card'>Card</option>                    
                </select>

                <select> {/* filtrar por origen: api o bbd  */}
                    <option value='all'>All Origins</option>
                    <option value='database'>Data Base</option>
                    <option value='Api'>Api</option>
                </select>
            
            </div>

        
         {/* RENDERIZADO DE LA CARD  */} { 
            allVideogames && allVideogames.map ((element) => {
                
                <Card name={element.name} image = {element.image} genres= {element.genres} />
            })
        }
        
        

        </div>
    )
}