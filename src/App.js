import { useContext } from 'react';
import { weatherContext } from './components/Context/AppProvider';
import './App.css';
import Bottom from './components/bottom/Bottom';
import Temp from './components/temp/Temp';
import Top from './components/Top/Top';

function App() {
  const {data}=useContext(weatherContext);
  let type
  if(data.weather){
    type=data.weather[0].main
    console.log(type)
  }
  return (
    <div style={{backgroundImage: "url('')",backgroundRepeat:'no-repeat', backgroundSize:'cover' }}>
    <Top/>
    <Temp/>
    <Bottom/>
    </div>
  );
}

export default App;
