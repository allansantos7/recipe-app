import classes from "./AvailableRecipes.module.css"
import Card from "../UI/Card"
import RecipeItem from "./RecipeItem/RecipeItem";
import AddRecipeForm from "./AddRecipeForm/AddRecipeForm";
import { useEffect } from "react";
import { useState } from "react";
    
const AvailableRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);

    useEffect(() => {
        const fetchRecipes = async () => {
            const response = await fetch("https://recipe-app-1f1e5-default-rtdb.firebaseio.com/recipes.json"
            );
            const responseData = await response.json();

            const loadedRecipes = []

            for (const key in responseData) {
                loadedRecipes.push({
                    id: key,
                    name: responseData[key].name,
                    ingredients: responseData[key].ingredients,
                    instructions: responseData[key].instructions,
                })
            }

            setRecipes(loadedRecipes);
            setIsLoading(false);
        }
        
        fetchRecipes();
    }, []);

    if (isLoading) {
        return (
            <section className={classes.RecipesLoading}>
                <p>Loading...</p>
            </section>
        )
    }

    const recipesList = recipes.map((recipe) => 
    <li>
        <RecipeItem key={recipe.id} name={recipe.name} ingredients={recipe.ingredients} instructions={recipe.instructions} />
    </li>)

    const submitRecipeHandler = async (recipeData) => {
        setIsSubmitting(true);
        await fetch('https://recipe-app-1f1e5-default-rtdb.firebaseio.com/recipes.json', {
            method: 'POST',
            body: JSON.stringify({
                name: recipeData.name,
                ingredients: recipeData.ingredients,
                instructions: recipeData.instructions,
            })
        })
        setIsSubmitting(false);
        setDidSubmit(true);
    }

    const isSubmittingContent = <p>Sending recipe data...</p>;
    const didSubmitContent = <p>Successfully sent recipe data!</p>;

    return (
        <section className={classes.recipes}>
            <Card>
                <ul>{recipesList}</ul>
            </Card>
            <Card>
                <AddRecipeForm onConfirm={submitRecipeHandler} />
            </Card>
        </section>

    )
}

export default AvailableRecipes;