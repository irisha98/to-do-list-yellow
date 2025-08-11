import { useEffect, useState } from 'react';
import './Recipes.css';
import MyRecipeComponent from './MyRecipesComponent';

function Recipes() {
  const [search, setSearch] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState('avocado');
  const [warning, setWarning] = useState('');

  const myRecipesSearch = (e) => {
    setSearch(e.target.value)
  }

  const finalSearch = (e) => {
  e.preventDefault();

  const trimmed = search.trim();
  setWarning('');

  if (!trimmed) return;

  const isCyrillic = /[а-яА-ЯЁё]/.test(trimmed);

  if (isCyrillic) {
    setWarning('Пожалуйста, введите слово на английском языке.');
    return;
  }

  setWordSubmitted(trimmed);
};

  useEffect(() => {
    const getRecipe = async() => {
        const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=ad3c1e02&app_key=14f992cf6d6f65a84b3e59aded3a90cc`);
        const data = await response.json();
        setMyRecipes(data.hits)
    }
    getRecipe()
  }, [wordSubmitted])

  return (
    <div className="recipes-page">
      <h1 className="recipes-title">Recipe Search</h1>

      <form
         className="search-bar"
         onSubmit={finalSearch}
      >
      <input
         type="text"
         placeholder='Enter ingredient or dish...'
         value={search}
         onChange={myRecipesSearch}
         className="search-input"
      />
      
      <button className="search-btn">Search</button>
     </form>
     {warning && <p className="warning-text">{warning}</p>}

      <div className="recipes-grid">
        {myRecipes.map((element, index) => (
            <MyRecipeComponent key={index}
            label={element.recipe.label}
            image={element.recipe.image}
            ingredients={element.recipe.ingredientLines} />
        ))}
      </div>
    </div>
  );
}

export default Recipes;
