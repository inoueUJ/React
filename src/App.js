import React, { useRef, useState } from 'react'
import './App.css';
import ImageGrallery from './ImageGrallery';
const App = () => {
  const[fetchData,setFetchData] = useState([]);
  const[inputRef,setInputRef] = useState("");
  const ref = useRef(null);
  const api_key = "35460573-2f35cbcccf04ad30d597cd8c2";
 
  // submitアクション
  const handleSubmit = async(e) => {
    e.preventDefault();
    setInputRef(ref.current.value);
    console.log(ref.current.value);
 const URL = `https://pixabay.com/api/?key=${api_key}&q=${ref.current.value}&image_type=photo`;

    fetch(URL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setFetchData(data.hits);
    })
    ref.current.value='';
  }
  return (
    
      <div> 
      <div className='container'>
        <h2>画像検索</h2>
      <form  onSubmit={handleSubmit}>
        <input type='text' placeholder='写真を検索' ref={ref}></input>
        <button type='submit'>検索</button>
      </form>
        <ImageGrallery fetchData={fetchData}/>
    </div>
      
    </div>
  )
}

export default App

