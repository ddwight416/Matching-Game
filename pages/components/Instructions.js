const Instructions = (props) => {

    return (
        <div className =" justify-center text-center">
            <header className= "font-bold text-5xl">Instructions</header>
            <ul className="text-3xl">
                <li className="py-5">Click on the cards to flip them.</li>
                <li className="py-5">You can Flip them only once.</li>
                <li className="py-5">You must match two cards that look exactly the same.</li>
                <li className="py-5 font-bold text-blue-800">Final Fanstasy matches help earn points</li>
                <li className="py-5 font-bold text-green-800">Kingdom Hearts cards make you lose Grade, matches make you lose even more</li>
                <li className="py-5 font-bold text-brown-300">A Satisfying Grade will let you pass.</li>
                <li className="py-5 font-bold text-red-900">Too Low of a Grade, and you will Fail.</li>
                <li className="py-5">The game quits if you press "Quit Game".</li>
                <li className="py-5 text-sm">I hope you know the difference between Kingdom Hearts and Final Fanstasy :)</li>

            </ul>
            <button className= "bg-green-200 text-3xl p-5 border-solid font-bold text-cyan-300" onClick = {props.onNotView}>Continue</button>
        </div>
    );
}

export default Instructions;