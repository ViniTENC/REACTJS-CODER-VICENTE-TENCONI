import {useState} from 'react'
const Contador = ( ) =>{
    let [dark, setDark] = useState(false)
    console.log(dark)
    const toggleDarkMode = () =>{
        setDark(!dark)
    }
    return(
        <div>
            <h1>Contador</h1>
            <p>El tema del sitio es : {dark.toString()}  </p>
            <p>Mi contador Actual va : 0</p>
            <p>La cantidad de productos es : 0</p>
            <button onClick={toggleDarkMode}>pute</button>
        </div>
    )
}
export default Contador