import {useState, useEffect} from 'react'


const mainmenu = (props) =>
{
    
    return (
        <div >
            <img src ="/Images/Tifa.jpg" className= "ml-20" ></img>
            <div className="text-4xl my-10 font-italic"><h1>Final Fantasy Matching Game</h1></div>
            <div>
                <button className="bg-purple-500 hover:light-blue font-bold p-2 rounded text-2xl my-5" onClick= {props.onInstruct}>Instructions</button>
            </div>
            <div>
                <button className="bg-blue-500 hover:light-blue font-bold p-2 rounded text-2xl my-5" onClick={props.onStart}>Start Game</button>
            </div>
            <img src='/Images/Yuna.jpg' className="inline-flex mr-20"></img>
            <img src='/Images/Vanille.jpg' className="inline-flex mr-20"></img>
        </div>
    )
}

export default mainmenu;