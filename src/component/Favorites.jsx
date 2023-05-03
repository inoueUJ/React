import React from 'react';

const Favorites = ({ favorites, removeFromFavorites }) => {
  return (
    <div className='favo-wrapper'>
      {favorites.map((data) => (
        <div className="image" key={data.id}>
          <a href={data.pageURL} target='_blank'>
            <img src={data.largeImageURL} alt="" />
          </a>
          <div className='favorite-button'>
            <button className ="favob" onClick={() => removeFromFavorites(data)}>お気に入りから削除</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
