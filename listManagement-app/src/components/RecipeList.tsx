import { useState } from "react";
import { initialRecipes} from "../data/initialData.ts";
import Recipe from "./Recipe.tsx";

const RecipeList = () => {
    const [recipes, setRecipes] = useState( initialRecipes );
    const handleDelete = (id: number) => {
        setRecipes((recipes) => recipes.filter((recipe) => recipe.id !== id));
    }
    return (
        <>
            <h1>Recipes</h1>
            {recipes.map((recipe) => (
                <Recipe key={recipe.id} {...recipe} handleDelete={handleDelete} />
            ))}
        </>
    )
};

export default RecipeList;