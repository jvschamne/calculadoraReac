import { useState } from 'react'

import Botao from './Botao'
import Display from './Display'

import './Components.css'



const Calculadora = () => {

    const [displayValue, setDisplayValue] = useState('0')
    const [operator, setOperator] = useState(null)
    const [firstValue, setfirstValue] = useState('')
    const [secondValue, setSecondValue] = useState('')

    const handleNumberClick = (e) => {
        if(operator === null){
            setfirstValue(firstValue+e)
        }
        else{
            setSecondValue(secondValue+e)
        }
        setDisplayValue(displayValue + e)
        console.log('Operador: ', operator)
        console.log('First value: ', firstValue)
        console.log('Second Value: ', secondValue)
    }

    const handleOperatorClick = (e) => {
        setOperator(e)
        setDisplayValue(displayValue + e)
        console.log('Operador: ', operator)
        console.log('First value: ', firstValue)
        console.log('Second Value: ', secondValue)
    }

    const handleDelClick = (e) => {
        setDisplayValue(displayValue.slice(0, -1))
        if(operator === null){
            setfirstValue(firstValue.slice(0, -1))
        }
        else{
            setSecondValue(secondValue.slice(0, -1))
        }
    }

    const handleClearClick = (e) => {
        setDisplayValue('')
        setOperator(null)
        setfirstValue('')
        setSecondValue('')
    }
    
    const handleEqualClick = (e) => {
        if(secondValue != ''){
            console.log('IGUAL')
            let result = 0
            switch(operator){
                case '+':
                    result = parseFloat(firstValue) + parseFloat(secondValue)
                    break
                case '-':
                    result = parseFloat(firstValue) - parseFloat(secondValue)
                    break
                case '*':
                    result = parseFloat(firstValue) * parseFloat(secondValue)
                    break
                default:
                    result = parseFloat(firstValue) / parseFloat(secondValue)
                    break
            }
            console.log('Result: ', result)
            console.log('Operador: ', operator)
            console.log('First value: ', firstValue)
            console.log('Second Value: ', secondValue)
            setDisplayValue(result)

            setOperator(null)
            setfirstValue(result)
            setSecondValue('')
        }
    }


    return(
        <div className="Calculadora">
            <div className='Container'>
                <Display text={displayValue}/>
                <div className='Botoes'>
                    <Botao caracter={'C'} onClick={handleClearClick}/>  
                    <Botao caracter={'/'} onClick={handleOperatorClick}/>     
                    <Botao caracter={'*'} onClick={handleOperatorClick}/>   
                    <Botao caracter={'DEL'} onClick={handleDelClick}/>   
                    <Botao caracter={'7'} onClick={handleNumberClick}/>      
                    <Botao caracter={'8'} onClick={handleNumberClick}/>   
                    <Botao caracter={'9'} onClick={handleNumberClick}/>    
                    <Botao caracter={'-'} onClick={handleOperatorClick}/>    
                    <Botao caracter={'4'} onClick={handleNumberClick}/>     
                    <Botao caracter={'5'} onClick={handleNumberClick}/>     
                    <Botao caracter={'6'} onClick={handleNumberClick}/>      
                    <Botao caracter={'+'} onClick={handleOperatorClick}/>     
                    <Botao caracter={'1'} onClick={handleNumberClick}/>       
                    <Botao caracter={'2'} onClick={handleNumberClick}/>     
                    <Botao caracter={'3'} onClick={handleNumberClick}/>    
                    <Botao caracter={'='} onClick={handleEqualClick}/>   
                    <Botao caracter={'0'} onClick={handleNumberClick}/>
                </div>
            </div>
        </div>
    )
}

export default Calculadora;
