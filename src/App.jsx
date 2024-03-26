
import Footer from "./Footer.jsx"

function App() {

  let nombre = "pepe"

  const sumar = ()=>{
    console.log ( 1 + 1 )
  }

  return <div>

  <h1> Hola {nombre} </h1>
  <h2> como estas </h2>
  <button onClick={sumar}> Sumar </button>
  <Footer />
  
  </div>
}

export default App
