function MyRecipeComponent({ label, image, ingredients }) {
  return (
    <div className="recipe-card">
      <img src={image} alt={label} className="recipe-image" />

      <h2 className="recipe-title">{label}</h2>

      <ul className="ingredient-list">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="ingredient-item">{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}
export default MyRecipeComponent;
