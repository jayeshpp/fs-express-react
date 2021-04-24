import axios from 'axios'
import { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState(null)

  useEffect(()=> {
    axios.get('/hello').then(res => setMessage(res.data)).catch(err => console.log(err)
    )
  },[])
  
  return (
    <div className="App">
      {message ? message : null}
    </div>
  );
}

export default App;
