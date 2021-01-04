import Menu from "./MainMenu.js"
import { useState} from 'react'
import Matching from "./Matching.js"
import Instructions from "./Instructions.js"


const Game = (props) => 
{
    const [playing, setPlaying] = useState(false);
    const [struct, setStruct] = useState(false);


    const start = () => {setPlaying(true);}
    const view = () => {setStruct(true);}
    const notView = () => {setStruct(false);}
    const gameover = () => {
        setPlaying(false);
       
    }




    return (
        <div className="flex flex-center justify-center h-screen bg-yellow-500">
            <div className=""><title>Final Fantasy Matching Game</title></div>
                {playing ? 
                    (<Matching onGameOver={gameover} />) 
                    : struct ? <Instructions onNotView={notView}/> :(<Menu onStart={start} onInstruct={view}  onHighScore= {props.hiscore} />) 
                }
        </div>
    )
}

export default Game;