import logo from './logo.svg';
import './App.css';
import styled from "styled-components"
import axios from 'axios';
import { useEffect, useState } from 'react';




const ListRow = styled.div`
  width: 100%;
  text-align: left;
  display: flex;

  justify-content: space-between;
  padding: 1rem;
  background: #697898;
  color: black;
  &:nth-child(odd){
    background: #8d94aa;
    color: white;

`

const ListWrapper = styled.div`
    max-width: 400px;
`


function App() {

  const [data, setData] = useState()


 const  addData = () => {
    axios.get('http://localhost:8000/addRow').then(resp => {
      console.log(resp)
    })
  }

  useEffect(()=> {

    axios.get('http://localhost:8000/getData').then(resp => {
    setData(resp.data);
    console.log(data)
    
  });
    },[])

    function deleteRow(id){
      console.log(id)
    }

  return (
    <div className="App">
      TEst
      <button onClick={()=> addData()}> Add row</button>
      <ListWrapper>
        {
          data?.map((x)=> 
          <ListRow>
            <p>{x.id}</p>
            <p>{x.name}</p>
            <p>{x.value}</p>
            <button onClick={()=> deleteRow(x.id)}> Delete</button>
            </ListRow>)
        }
      </ListWrapper>
    
    </div>
  );
}

export default App;
