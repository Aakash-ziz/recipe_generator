const apiKey = import.meta.env.VITE_REACT_APP_SPOONACULAR_API_KEY;  // Load API key from environment variables
const baseUrl = "https://api.spoonacular.com/recipes";

export const getRecipesByIngredients = async (ingredients) => {
  try {
    const url = `${baseUrl}/findByIngredients?ingredients=${encodeURIComponent(ingredients)}&number=6&apiKey=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return response.ok ? data : [];
  } catch (error) {
    console.error("Error fetching recipes by ingredients:", error);
    return [];
  }
};

export const getRecipesByNutrition = async (minCalories, maxCalories) => {
  try {
    const url = `${baseUrl}/findByNutrients?minCalories=${minCalories}&maxCalories=${maxCalories}&number=10&apiKey=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return response.ok ? data : [];
  } catch (error) {
    console.error("Error fetching recipes by nutrition:", error);
    return [];
  }
};
