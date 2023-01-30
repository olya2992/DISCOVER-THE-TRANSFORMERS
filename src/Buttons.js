import autobot from './autobot.png';
import decepticon from './decepticon.png'

function Buttons ({filteredTransformers}){
    return(
        <div className='container types'>
            <button  onClick={() => filteredTransformers('Autobot')} ><img src={autobot} /></button>
            <button onClick={() => filteredTransformers('Decepticon')} ><img src={decepticon} /></button>
        </div>
    )
}
export default Buttons;