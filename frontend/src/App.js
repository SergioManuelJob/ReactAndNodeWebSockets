import React, {useState, useEffect} from "react";
import SocketIOClient from 'socket.io-client';
import {LineChart, XAxis, CartesianGrid, Tooltip, Line} from 'recharts'
function App() {
  const [data, setData] = useState([])

  function getData(){
    const socket = SocketIOClient("http://" + window.location.hostname + ":8080/")
    socket.on("message", (data) => {
      setData(data)
    })
  }

  useEffect(() => { 
  }, [])

  return (
    <div>
      <LineChart
        width={1000}
        height={400}
        data={data}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
      <XAxis dataKey="name"/>
      <Tooltip/>
      <CartesianGrid stroke="#f5f5f5" />
      <Line type="monotone" dataKey="x" stroke="#ff7300" yAxisId={0} />
      <Line type="monotone" dataKey="y" stroke="#387908" yAxisId={1} />
      </LineChart>
      <button onClick={getData}>Get MORE data</button>
    </div>
  );
}

export default App;
