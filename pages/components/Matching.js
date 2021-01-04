import {useEffect, useState} from 'react';




const Matching = (props) => {
   


    const [score, setScore] = useState(0);


    const [card1, setCard1] = useState(false);
    const [card2, setCard2] = useState(false);
    const [card3, setCard3] = useState(false);
    const [card4, setCard4] = useState(false);
    const [card5, setCard5] = useState(false);
    const [card6, setCard6] = useState(false);
    const [card7, setCard7] = useState(false);
    const [card8, setCard8] = useState(false);
    const [card9, setCard9] = useState(false);
    const [card10, setCard10] = useState(false);
    const [card11, setCard11] = useState(false);
    const [card12, setCard12] = useState(false);
    const [card13, setCard13] = useState(false);
    const [card14, setCard14] = useState(false);
    const [card15, setCard15] = useState(false);
    const [card16, setCard16] = useState(false);


    const hiscore = () => {
        setScore(score + 150);
    }

    const loseScore = () => {
        setScore(score - 200);
    }

    const superLose = () => {
        if (score >= 0){
            setScore(score - (score * 2));
        }else{
            setScore(score - (score * 2 * -1));
        }

    }
    
    

    const flipCard1 = () => {setCard1(true);}
    const flipCard2 = () => {setCard2(true);}
    const flipCard3 = () => {setCard3(true);}
    const flipCard4 = () => {setCard4(true);}
    const flipCard5 = () => {setCard5(true);}
    const flipCard6 = () => { setCard6(true); }
    const flipCard7 = () => { setCard7(true); }
    const flipCard8 = () => { setCard8(true); }
    const flipCard9 = () => { setCard9(true); }
    const flipCard10 = () => { setCard10(true); }
    const flipCard11 = () => { setCard11(true); }
    const flipCard12= () => { setCard12(true); }
    const flipCard13 = () => { setCard13(true); }
    const flipCard14 = () => { setCard14(true); }
    const flipCard15 = () => { setCard15(true); }
    const flipCard16 = () => { setCard16(true); }



    useEffect(loseScore, [card11])
    useEffect(loseScore, [card12])
    useEffect(loseScore, [card13])
    useEffect(loseScore, [card14])
    useEffect(loseScore, [card15])
    useEffect(loseScore, [card16])

    useEffect(hiscore ,[card1 && card6])
    useEffect(hiscore, [card2 && card7])
    useEffect(hiscore, [card3 && card8])
    useEffect(hiscore, [card4 && card9])
    useEffect(hiscore, [card5 && card10])
    useEffect(superLose, [card11 && card16])
    useEffect(superLose, [card12 && card15])
    useEffect(superLose, [card13 && card14])

    
  
    return(
        
        <div >
           
            <div className="bg-purple-500">
            <div><h1 className="font-bold text-5xl inline p-5">Grade:</h1>
                    <div className=" text-5xl inline"> {score}  </div>
            </div>
                <section className= "grid grid-cols-4 gap-3 justify-center m-7">                
                <div className="flex ">
                    <button className="bg-blue" onClick={flipCard2}>
                        {card2 ? (<img src="/Images/Yuna.jpg"></img>)
                            : (<img src="/Images/cardback.jpg"></img>)
                        }
                    </button >
                </div>
                    <div className="flex ">
                        <button className="bg-blue" onClick={flipCard14}>
                            {card14 ? (<img src="/Images/bad2.jpg"></img>)
                                : (<img src="/Images/cardback.jpg"></img>)
                            }
                        </button >
                    </div>
                    <div className="flex ">
                        <button className="bg-blue" onClick={flipCard15}>
                            {card15 ? (<img src="/Images/bad3.jpg"></img>)
                                : (<img src="/Images/cardback.jpg"></img>)
                            }
                        </button >
                    </div>
                <div className="flex flex-container flex-wrap inline ">
                    <button className="bg-blue" onClick={flipCard3}>
                        {card3? (<img src="/Images/noctis.jpg"></img>)
                        :(<img src="/Images/cardback.jpg"></img>)}
                    </button >                   
                </div>
                        <div className="flex flex-container flex-wrap inline">
                            <button className="bg-blue" onClick={flipCard1}>
                                {card1 ? (<img src="/Images/cloudstrife.jpg"></img>) :
                                    (<img src="/Images/cardback.jpg"></img>)}
                            </button>


                        </div>
                <div className="flex flex-container flex-wrap inline">
                    <button className="bg-blue" onClick={flipCard4}>
                        {card4 ? (<img src="/Images/Tidus.jpg"></img>)
                        :(<img src="/Images/cardback.jpg"></img>)}
                    </button>
                </div>
                    <div className="flex ">
                        <button className="bg-blue" onClick={flipCard16}>
                            {card16 ? (<img src="/Images/bad4.jpg"></img>)
                                : (<img src="/Images/cardback.jpg"></img>)
                            }
                        </button >
                    </div>
                        <div className="flex flex-container flex-wrap inline">
                            <button className="bg-blue" onClick={flipCard8}>
                                {card8 ? (<img src="/Images/noctis.jpg"></img>)
                                    : (<img src="/Images/cardback.jpg"></img>)}
                            </button >
                        </div>
                
                        <div className="flex flex-container flex-wrap inline">
                    <button className="bg-blue" onClick={flipCard6}>
                        {card6 ? (<img src="/Images/cloudstrife.jpg"></img>) :
                            (<img src="/Images/cardback.jpg"></img>)}
                    </button>
                </div>
                    <div className="flex flex-container flex-wrap inline">
                        <button className="bg-blue" onClick={flipCard11}>
                            {card11 ? (<img src="/Images/bad2.jpg"></img>) :
                                (<img src="/Images/cardback.jpg"></img>)}
                        </button>
                    </div>

                        <div className="flex flex-container flex-wrap">
                            <button className="bg-blue" onClick={flipCard10}>
                                {card10 ? (<img src="/Images/Jecht.jpg"></img>)
                                    : (<img src="/Images/cardback.jpg"></img>)}
                            </button >
                        </div>
                <div className="flex flex-container flex-wrap inline">
                    <button className="bg-blue" onClick={flipCard7}>
                        {card7 ? (<img src="/Images/Yuna.jpg"></img>)
                            : (<img src="/Images/cardback.jpg"></img>)}
                    </button >
                </div>
                    <div className="flex flex-container flex-wrap inline">
                        <button className="bg-blue" onClick={flipCard12}>
                            {card12 ? (<img src="/Images/bad3.jpg"></img>) :
                                (<img src="/Images/cardback.jpg"></img>)}
                        </button>
                    </div>
                
                <div className="flex flex-container flex-wrap inline">
                    <button className="bg-blue" onClick={flipCard9}>
                        {card9 ? (<img src="/Images/Tidus.jpg"></img>)
                            : (<img src="/Images/cardback.jpg"></img>)}
                    </button>
                </div>
                        <div className="flex flex-container flex-wrap inline">
                            <button className="bg-blue" onClick={flipCard13}>
                                {card13 ? (<img src="/Images/bad4.jpg"></img>) :
                                    (<img src="/Images/cardback.jpg"></img>)}
                            </button>
                        </div>
                
                        <div className="flex flex-container flex-wrap">
                            <button className="bg-blue" onClick={flipCard5}>
                                {card5 ? (<img src="/Images/Jecht.jpg"></img>)
                                    : (<img src="/Images/cardback.jpg"></img>)}
                            </button >
                        </div>
                
            </section>
            { score < 400 ?
                    (<button className = "bg-red-700 p-3 mt-5" onClick = {props.onGameOver}>Quit Game, You failed</button>) :
                    (<button className="bg-green-700 p-3 mt-5" onClick={props.onGameOver}>Finish Game, You Pass</button>)
            }
        </div>
        
        </div>
    );
}

export default Matching