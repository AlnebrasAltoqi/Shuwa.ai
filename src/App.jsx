import React, { useState } from 'react';
import avocadoImg from './assets/shuwa.jpg'; // ensure this path & file exists

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const recipes = [
    {
      id: 1,
      title: 'Omani Shuwa',
      category: 'Traditional',
      time: 'Overnight + 12-14 hrs',
      servings: 'The whole family',
      description:
        "A centuries-old Omani delicacy: lamb marinated in fragrant spices, wrapped in banana leaves and buried in a sand-pit oven for an unforgettable slow-cooked flavor.",
      image: avocadoImg,
      ingredients: [
        "2 kg bone-in lamb leg or shoulder",
    "6 cloves garlic, peeled",
    "1 tbsp sea salt",
    "1 tsp ground turmeric",
    "2 tsp ground cumin",
    "1 tsp ground coriander",
    "½ tsp ground cloves",
    "½ tsp ground cinnamon",
    "½ tsp black pepper",
    "½ tsp saffron threads, soaked in 2 tbsp warm water",
    "2 bay leaves, lightly crushed",
    "100 ml plain yogurt",
    "2 tbsp olive oil",
    "Juice of 1 lemon",
    "6–8 large banana leaves (or heavy-duty foil)",
    "Coconut husks or dry brushwood, for embers",
    "Hot stones (optional)",
    "Dry sand or earth, to cover the pit"
      ],
      instructions: [
        "Mix garlic, salt, turmeric, cumin, coriander, cloves, cinnamon, pepper, saffron (with its soaking water), bay leaves, yogurt, olive oil and lemon juice into a smooth paste.",
    "Massage the spice paste all over the lamb, coating thoroughly. Cover and refrigerate for at least 8–12 hours (overnight) to marinate.",
    "Line a clean, fireproof pit (2–3 ft deep) with stones or bricks. Build a small wood fire or use coconut husks/brushwood and heat until glowing embers form.",
    "Remove most coals, leaving a bed of hot embers and stones at the bottom of the pit.",
    "Lay out your banana leaves in overlapping layers on a flat board or clean surface. Place the lamb in the center and wrap tightly, folding edges up to seal all sides. If using foil, double-wrap inside your leaves.",
    "Carefully lower the wrapped lamb onto the embers. Cover completely with more hot stones (if you have them), then shovel dry sand or earth back into the pit until fully buried.",
    "Leave to cook underground for 12–14 hours (traditionally from sundown to the next morning). The heavy thermal mass of stones and earth holds in the heat overnight.",
    "To serve: dig up your parcel, unwrap the leaves (beware of steam!), and transfer the succulent, fall-off-the-bone lamb to a platter. Slice and enjoy with rice or flatbreads."
      ],
    },
  ];

  const filtered = recipes.filter((r) =>
    r.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      {/* Full-width Header */}
      <header className="bg-gradient-to-r from-orange-400 to-orange-600 text-white py-4 flex flex-wrap justify-between items-center">
        <h1 className="text-3xl font-bold">Shuwa.AI</h1>
        <div className="search-bar flex items-center bg-white rounded-full px-4 py-2 max-w-md w-full mt-2 sm:mt-0">
          <input
            type="text"
            placeholder="Search recipes..."
            className="flex-grow outline-none text-gray-800"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 005.65-1.85z" />
          </svg>
        </div>
      </header>

      {/* Categories (full-width, centered pills) */}
      <div className="categories flex flex-wrap justify-center gap-2 mt-4">
        {['All', 'Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Vegetarian'].map(
          (cat) => (
            <button
              key={cat}
              className="category-pill px-4 py-2 bg-white rounded-full shadow text-gray-800"
            >
              {cat}
            </button>
          )
        )}
      </div>

      {/* Section Title */}
      <h2 className="section-title text-2xl font-semibold mt-6">
        Popular Recipes
      </h2>

      {/* Responsive Grid (full-width, centered) */}
      <div className="recipe-grid grid gap-6 mt-4">
        {filtered.map((recipe) => (
          <div key={recipe.id} className="recipe-card bg-white rounded-xl overflow-hidden shadow-md">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="text-sm text-gray-500">{recipe.category}</div>
              <h3 className="text-lg font-semibold text-gray-800 mt-1">
                {recipe.title}
              </h3>
              <p className="text-gray-600 mt-2 line-clamp-2">
                {recipe.description}
              </p>
              <div className="flex justify-between text-sm text-gray-500 mt-3 mb-4">
                <span>⏱ {recipe.time}</span>
                <span>🍯 {recipe.servings}</span>
              </div>
              <button
                className="view-button w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg"
                onClick={() => setSelectedRecipe(recipe)}
              >
                View Recipe
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedRecipe && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedRecipe(null)}
        >
          <div
            className="modal-content bg-white rounded-xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold">{selectedRecipe.title}</h2>
            <p className="mt-2">{selectedRecipe.description}</p>
            <h3 className="mt-4 font-semibold">Ingredients</h3>
            <ul className="list-disc ml-5">
              {selectedRecipe.ingredients.map((ing, i) => (
                <li key={i}>{ing}</li>
              ))}
            </ul>
            <h3 className="mt-4 font-semibold">Instructions</h3>
            <ol className="list-decimal ml-5">
              {selectedRecipe.instructions.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
            <button
              className="mt-6 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
              onClick={() => setSelectedRecipe(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
