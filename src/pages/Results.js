import React, { useContext } from "react";
import SearchBar from "../components/SearchBar";
import SearchContext from "../components/SearchContext";
import RecipeCard from "../components/RecipeCard";

function Results() {
  const { searchResults } = useContext(SearchContext);

  return (
    <div>
        <SearchBar />
        <div className="row mx-2 my-2">
      {searchResults &&
        searchResults.map(
          (drink, index) =>
            (
            <div className="my-2 col-6 col-md-4 col-lg-3">
             <RecipeCard 
             key={index}
             title={drink.strDrink}
             description={drink.strInstructions}
             image={drink.strDrinkThumb}
             link={`/recipe/${drink.idDrink}`}
             />
            </div>
            )
        )}
        </div>
    </div>
  );
}

export default Results;
