import { useState } from 'react';
import './TicTac.scss';
import TicTacDice from '../TicTacDice/TicTacDice';

function TicTac(){

    const [dice, setDice] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState (true);

    function handleDiceClick (i){
        if (dice[i]){
            return; //// the return here literally means "jump out" which makes the input unchangeable or 
                   /// for a form it will not stall new wrong paswords until user enter the correct password.
        }
        console.log("clicked");

        const nextDice = dice.slice();
        nextDice[i] = xIsNext ? "X"  : "0";
        setDice(nextDice);
        setXIsNext(!xIsNext);
      }
    
    return(

       <section className='tictac'>

          <div className='tictac-row'>
             <TicTacDice value={dice[0]} onDiceClick={() => handleDiceClick (0)}/>
             <TicTacDice value={dice[1]} onDiceClick={() => handleDiceClick (1)}/>
             <TicTacDice value={dice[2]} onDiceClick={() => handleDiceClick (2)}/>
           
           </div>

           <div className='tictac-row'>
             <TicTacDice value={dice[3]} onDiceClick={() => handleDiceClick (3)}/>
             <TicTacDice value={dice[4]} onDiceClick={() => handleDiceClick (4)}/>
             <TicTacDice value={dice[5]} onDiceClick={() => handleDiceClick (5)}/>
           </div>
           <div className='tictac-row'>
             <TicTacDice  value={dice[6]} onDiceClick={() => handleDiceClick (6)}/>
             <TicTacDice  value={dice[7]} onDiceClick={() => handleDiceClick (7)}/>
             <TicTacDice  value={dice[8]} onDiceClick={() => handleDiceClick (8)}/>
          </div>
  
         
       </section>
    )
}
export default TicTac;