import { useState } from "react";
import { getRecipesByIngredients } from "../api";

function RecipeGenerator() {
  const [ingredients, setIngredients] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRecipes = async () => {
    if (!ingredients) return;
    setLoading(true);
    const data = await getRecipesByIngredients(ingredients);
    setRecipes(data);
    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Recipe Generator</h2>

      {/* Input & Search Button */}
      <div className="flex items-center space-x-4 mt-4">
        <input
          type="text"
          placeholder="Enter ingredients (e.g. tomato, cheese)..."
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none shadow-md transition-all duration-200"
        />
        <button
          onClick={fetchRecipes}
          className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition duration-300"
        >
          Search
        </button>
      </div>

      {/* Loading Indicator */}
      {loading && <p className="text-center text-gray-600 mt-4">Fetching recipes...</p>}

      {/* Recipe List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105 hover:shadow-xl">
            {/* Recipe Image */}
            <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover rounded-md mb-4" />

            {/* Recipe Title */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{recipe.title}</h3>

            {/* Used Ingredients */}
            <p className="text-sm text-gray-600">
              <strong>Used Ingredients:</strong>{" "}
              {recipe.usedIngredients.map((ing) => ing.name).join(", ")}
            </p>

            {/* Missing Ingredients */}
            {recipe.missedIngredients.length > 0 && (
              <p className="text-sm text-red-600 mt-1">
                <strong>Missing:</strong>{" "}
                {recipe.missedIngredients.map((ing) => ing.name).join(", ")}
              </p>
            )}

            {/* Link to Full Recipe */}
            <a
              href={`https://spoonacular.com/recipes/${recipe.title.replace(/\s+/g, "-")}-${recipe.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-500 hover:underline mt-3"
            >
              View Full Recipe
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeGenerator;
