import { Link } from "react-router-dom"; // Import Link for navigation
import RightImage from '../assets/RightImage.jpg'; // Correct import path

function Home() {
  return (
    <div className="min-m-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-1 items-center gap-10 p-8">
        {/* Left Side - Explanation (Now at the top) */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-green-600 mb-6 leading-tight">
            Welcome to GrocierMate!
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed">
            GrocierMate helps you create delicious meals with the ingredients you already have in your kitchen.
            Whether you have leftovers or just a few basic groceries, we provide creative recipe ideas to inspire your next meal.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
            Simply enter your available ingredients, and GrocierMate will suggest recipes that minimize waste, save you money, and help you discover new meal ideas.
          </p>
          {/* Link to Recipe Generator page */}
          <Link
            to="/recipe-generator"
            aria-label="Get Started with GrocierMate"
            className="mt-6 text-lg font-semibold text-white bg-green-600 hover:bg-green-700 transition duration-300 px-8 py-3 rounded-lg shadow-lg transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>

        {/* Right Side - Full Image (Now at the bottom) */}
        <div className="relative w-full h-full">
          <img
            src={RightImage}
            alt="Recipe Generator"
            className="w-full h-full max-h-[600px] object-cover rounded-2xl shadow-2xl transition-transform duration-500 transform hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
