import classes from "./AvailableRecipes.module.css"
import Card from "../UI/Card"
import RecipeItem from "./RecipeItem/RecipeItem";

const DUMMY_RECIPES = [
    {
    id: 'r1',
    name: 'Sushi',
    ingredients: 'Finest fish and veggies',
    instructions: 22.99,
    },
    {
    id: 'r2',
    name: 'Schnitzel',
    ingredients: 'A german specialty!',
    instructions: 16.5,
    },
    {
    id: 'r3',
    name: 'Barbecue Burger',
    ingredients: 'American, raw, meaty',
    instructions: 12.99,
    },
    {
    id: 'r4',
    name: 'Green Bowl',
    ingredients: 'Healthy...and green...',
    instructions: 18.99,
    },
];
    
const AvailableRecipes = () => {
    const recipesList = DUMMY_RECIPES.map((recipe) => 
    <li>
        <RecipeItem key={recipe.id} name={recipe.name} ingredients={recipe.ingredients} instructions={recipe.instructions} />
    </li>)

    return (
        <section className={classes.recipes}>
            <Card>
                <ul>{recipesList}</ul>
            </Card>
        </section>
    )
}

export default AvailableRecipes;