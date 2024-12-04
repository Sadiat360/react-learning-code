import './TicTacDice.scss'
// import TicTac from '../TicTac/TicTac';
import { useState } from 'react';

function TicTacDice({value, onDiceClick}){

    // const [value, setValue] = useState(null);

    // function handleClick (){
    //     console.log("clicked");
    //     setValue("X")
    //   }

    return(
    <button  onClick={onDiceClick}className='tictac-btn'>{value} </button>
    )
}
export default TicTacDice;