import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'

function App() {
  const [lista, setLista] = useState([])

  useEffect(() => {
    const ostoslista = Array()

    ostoslista.push("Kahvi")
    ostoslista.push("Maitoa")
    ostoslista.push("Keksejä")

    setLista(ostoslista)

  }, [])
  
  return (
    <div style={{margin: '30px'}}>
    <h3>Ostoslista</h3>

    

    </div>
  );
}

export default App;
