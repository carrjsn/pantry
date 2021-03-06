import React from 'react';


const FavoriteEntry = (props) => (
  <div className='favorite-recipe'>
    <img className='fav-image' src={props.recipe.imageUrl} />
    <div className='fav-info'>
      <div className='fav-title'>{props.recipe.title}</div>
      <div><a className='fav-link' href='#'>Get Recipe</a></div>
      <div className='remove-favorite-button'>
        <button name='remove-favorite' onClick={() => props.removeFavorite(props.recipe.spoonId)}>Remove favorite</button>
      </div>
    </div>
  </div>
)

export default FavoriteEntry;

// onClick={() => props.removeFavorite({
//   id: props.recipe.id
// })}>