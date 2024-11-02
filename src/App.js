import './App.css';
import { useState, useEffect, useRef } from 'react';
import { TodoBox } from './components/todoBox';
import axios from 'axios';
import {ProductBox} from "./components/product-box"

function App() {

  const [productLimit, setProductLimit] = useState(5);
  const [isLoaded, setIsLoaded] = useState(false);
  const [productList, setProductList] = useState([]);

  const fetchProducts = ()=>{
    axios.get("https://fakestoreapi.com/products").then(
      (response)=>{    
        for (const key in response.data) {
            const thisData = response.data[key];
            const newList = [thisData.title, thisData.image, thisData.price, thisData.rating.rate, thisData.description];
            
            setProductList((prev) => ([
              ...prev,
               newList,
            ]));
        }
        setIsLoaded(true);
      }
    ).catch(
      (err)=>{
        console.log(err)
      }
    )
  }


  useEffect(()=>{
    if (!isLoaded){
      fetchProducts();
    }
  }, [isLoaded])

  return (
      <div className='container'>
        {
          productList.map((value, index)=>{
            return (<ProductBox key = {index} title = {value[0]} image = {value[1]} description = {value[4]} price = {value[2]} rate = {value[3]}/>);
          })
        }
      </div>
  )
}

export default App;
