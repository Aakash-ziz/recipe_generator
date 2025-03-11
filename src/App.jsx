import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import RecipeGenerator from "./pages/RecipeGenerator";
import FindByNutrition from "./pages/FindByNutrition"; // Import the new page

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 font-sans">
        {/* Navbar */}
        <nav className="bg-white shadow-lg p-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-4xl font-extrabold text-green-600 tracking-wide">GrocierMate</h1>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <NavLink to="/" className={({ isActive }) => isActive ? "text-xl font-semibold text-green-600" : "text-xl font-semibold text-gray-700 hover:text-green-600"}>
                Home
              </NavLink>
              <NavLink to="/recipe-generator" className={({ isActive }) => isActive ? "text-xl font-semibold text-green-600" : "text-xl font-semibold text-gray-700 hover:text-green-600"}>
                Recipe Generator
              </NavLink>
              <NavLink to="/find-by-nutrition" className={({ isActive }) => isActive ? "text-xl font-semibold text-green-600" : "text-xl font-semibold text-gray-700 hover:text-green-600"}>
                Find by Nutrition
              </NavLink>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-green-600 transition duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden bg-white shadow-lg ${isMobileMenuOpen ? "block" : "hidden"}`}>
            <div className="flex flex-col items-center py-4 space-y-4">
              <NavLink to="/" className={({ isActive }) => isActive ? "text-xl font-semibold text-green-600" : "text-xl font-semibold text-gray-700 hover:text-green-600"} onClick={toggleMobileMenu}>
                Home
              </NavLink>
              <NavLink to="/recipe-generator" className={({ isActive }) => isActive ? "text-xl font-semibold text-green-600" : "text-xl font-semibold text-gray-700 hover:text-green-600"} onClick={toggleMobileMenu}>
                Recipe Generator
              </NavLink>
              <NavLink to="/find-by-nutrition" className={({ isActive }) => isActive ? "text-xl font-semibold text-green-600" : "text-xl font-semibold text-gray-700 hover:text-green-600"} onClick={toggleMobileMenu}>
                Find by Nutrition
              </NavLink>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe-generator" element={<RecipeGenerator />} />
            <Route path="/find-by-nutrition" element={<FindByNutrition />} /> {/* New Route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
