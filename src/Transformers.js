function Transformers({anyTransformers}){
    return(
        <div className="transformers">
            {anyTransformers.map((transformers =>{
                const {id, type, picture, transformer,role, altMode, weapon}=transformers;
                return(
                <div key={id} className = 'card' >
                    <img src={picture} width='300px' height='400px' /> 
                    <div className="card">
                        <h2>{transformer}</h2>
                        <h4>Role: {role}</h4>
                        <h4>Alt Mode: {altMode}</h4>
                        <h4>Weapon: {weapon}</h4>
                    </div>
                </div>
                )
            }))}
        </div>
    )
} 
export default Transformers;