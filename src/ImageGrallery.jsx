import React, { useState } from 'react';
import "./ImageGrallery.css";
import Favorites from './component/Favorites';

const ImageGallery = ({ fetchData }) => {
  // 1. お気に入りに追加するための状態を定義する
  const [favorites, setFavorites] = useState([]);

  // 2. お気に入りに追加するための関数を定義する
  const addToFavorites = (data) => {
    if (!favorites.includes(data)) {
      setFavorites([...favorites, data]);
    }
  }; 

  // 3. お気に入りから削除するための関数を定義する
  const removeFromFavorites = (data) => {
    const newFavorites = favorites.filter((item) => item.id !== data.id);
    setFavorites(newFavorites);
  };

  // 4. お気に入りに追加したアイテムを表示するための状態を定義する
  const [showFavorites, setShowFavorites] = useState(false);

  // 5. お気に入りに追加したアイテムを表示するための関数を定義する
  const toggleFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  return (
    <div>
      {/* お気に入りボタン */}
      <button onClick={toggleFavorites}>お気に入り({favorites.length})</button>

      {/* お気に入りに追加したアイテムを表示する */}
      {showFavorites && <Favorites favorites={favorites} removeFromFavorites={removeFromFavorites} />}

      <div className='images-wrapper'>
        {fetchData.map((data) => (
          <div className="image" key={data.id}>
            <a href={data.pageURL} target='_blank'>
              <img src={data.largeImageURL} alt="" />
            </a>
            {/* 6. お気に入りボタンをクリックしたときに、お気に入りに追加する関数を呼び出すようにする */}
            <div className='favorite-button'>
              <button onClick={() => addToFavorites(data)}>お気に入りに追加</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
