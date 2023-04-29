import './Components.css'

const Display = ({text}) => {
    return(
        <div className='Visor'>
                    <span className='Text'>
                        {text}
                    </span>
        </div> 
    )
}

export default Display