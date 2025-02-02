import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import { useState } from "react"; // Import useState to manage menu visibility
import Home from "./pages/Home";
import RecipeGenerator from "./pages/RecipeGenerator";

function App() {
  // State to toggle mobile menu visibility
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
            {/* Left Side - Logo */}
            <h1 className="text-4xl font-extrabold text-green-600 tracking-wide">GrocierMate</h1>

            {/* Right Side - Navigation Links (visible on medium and large screens) */}
            <div className="hidden md:flex space-x-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-xl font-semibold text-green-600" : "text-xl font-semibold text-gray-700 hover:text-green-600"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/recipe-generator"
                className={({ isActive }) =>
                  isActive ? "text-xl font-semibold text-green-600" : "text-xl font-semibold text-gray-700 hover:text-green-600"
                }
              >
                Recipe Generator
              </NavLink>
            </div>

            {/* Mobile Menu Button (Hamburger) */}
            <div className="md:hidden">
              <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-green-600 transition duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu (Hidden on medium and larger screens) */}
          <div className={`md:hidden bg-white shadow-lg ${isMobileMenuOpen ? "block" : "hidden"}`}>
            <div className="flex flex-col items-center py-4 space-y-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-xl font-semibold text-green-600" : "text-xl font-semibold text-gray-700 hover:text-green-600"
                }
                onClick={toggleMobileMenu} // Close the menu when a link is clicked
              >
                Home
              </NavLink>
              <NavLink
                to="/recipe-generator"
                className={({ isActive }) =>
                  isActive ? "text-xl font-semibold text-green-600" : "text-xl font-semibold text-gray-700 hover:text-green-600"
                }
                onClick={toggleMobileMenu} // Close the menu when a link is clicked
              >
                Recipe Generator
              </NavLink>
            </div>
          </div>
        </nav>

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe-generator" element={<RecipeGenerator />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
