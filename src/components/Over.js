import Socials from "./Socials"

const Over = () => { 
    return (
        <div className="over-page" id='about'>
            <div className = "over-info">
                 <h1>About</h1>
                 <p>Ik ben Bart, 29 jaar en mijn focus en interesse <br/> 
                    liggen voornamelijk bij het ontwikkelen <br/> 
                    van frontend apps met Javascript en <br/> 
                    sinds kort voornamelijk met React. 
                 </p>
                 <Socials/>
            </div> 
        </div>
    )
}

export default Over;