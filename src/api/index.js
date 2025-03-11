const apiKey = "10fbd4d9f27240d08fe3f276f9de2d98"; // Replace with your API Key

export const getRecipesByIngredients = async (ingredients) => {
  try {
    const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${encodeURIComponent(
      ingredients
    )}&number=6&apiKey=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};
