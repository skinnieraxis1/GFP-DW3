import './App.css'
import Cuerpo from './componentes/Cuerpo' 
import Sidebar from './componentes/Sidebar'
import Footer from './componentes/Footer'
import Grafico from './componentes/Grafico'

function App() {

  return (
    <>
      <div>
        <Sidebar/>
        <div>
          <div>
            <Grafico/>
          </div>
          <div>
            <Cuerpo/>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App
