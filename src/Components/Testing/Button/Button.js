import React, {useState} from 'react'

 export default function Button({text}) {
    
    const [printedText, setPrintedText] = useState(text)

    const changeText =() =>{
        setTimeout(() => {
            setPrintedText('Hey you clicked!')
        }, 1000)
    }
    return (
        <div>
       <h2 data-testid='test-id'> {printedText} </h2>
       <button 
       onClick={changeText}
        data-testid="button">
            click me
            </button>
        </div>
    )
}