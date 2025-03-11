import { useState } from "react";
import { getRecipesByNutrition } from "../api";

function FindByNutrition() {
  const [minCalories, setMinCalories] = useState("");
  const [maxCalories, setMaxCalories] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRecipes = async () => {
    if (!minCalories || !maxCalories) return;
    setLoading(true);
    const data = await getRecipesByNutrition(minCalories, maxCalories);
    setRecipes(data);
    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Find Recipes by Nutrition</h2>

      {/* Input Fields & Search Button */}
      <div className="flex items-center space-x-4 mt-4">
        <input
          type="number"
          placeholder="Min Calories"
          value={minCalories}
          onChange={(e) => setMinCalories(e.target.value)}
          className="border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none shadow-md transition-all duration-200"
        />
        <input
          type="number"
          placeholder="Max Calories"
          value={maxCalories}
          onChange={(e) => setMaxCalories(e.target.value)}
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

            {/* Calories Info */}
            <p className="text-sm text-gray-600">
              <strong>Calories:</strong> {recipe.calories} kcal
            </p>

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

export default FindByNutrition;
