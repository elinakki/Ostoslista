import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'

function App() {
  const [lista, setLista] = useState([])

  useEffect(() => {
    const ostoslista = Array()

    ostoslista.push({id: 1,nimi:"Kahvia",maara: 1})
    ostoslista.push({id: 2,nimi:"Maitoa",maara: 3})
    ostoslista.push({id: 3,nimi:"Keksejä",maara: 5})

    setLista(ostoslista)

  }, [])
  
  return (
    <div style={{margin: '30px'}}>
    <h3>Ostoslista</h3>
    <table>
      <tr>
        <th>
          Nimi
        </th>
      </tr>
      { // käytetään mappia näyttämään taulukot
        // käytetään mapissa tavallisia sulkuja 
        lista.map(tuote => (
          <tr key={tuote.id}>
            <td>{tuote.nimi}</td>
          </tr>
        ))
      }
    </table>
    </div>
  );
}

export default App;
