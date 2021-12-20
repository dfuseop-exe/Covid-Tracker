import React , {useEffect , useState} from 'react';
import { fetchData } from './api';
import image from './images/image.png';

// import Cards from './components/Cards/Cards'
// import Chart from './components/Chart/Chart'
// import CountryPicker from './components/CountryPicker/CountryPicker'

import {Cards } from './components';
import styles from './App.module.css';

function App() {

  //pass empty data obj
  const [state, setstate] = useState({data : {}})

  useEffect( () => {
    const call = async () => {
      const data = await fetchData();
      //add data to state
      setstate({data})
    }

    call();
  }, [])



  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="COVID-19" />
      <Cards data={state.data} />
      
    </div>
  );
}

export default App;
