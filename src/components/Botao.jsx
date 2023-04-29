const Botao = ({caracter, onClick}) => {
    return(
        <button onClick={() => onClick(caracter)} >{caracter}</button>
    )
}

export default Botao;