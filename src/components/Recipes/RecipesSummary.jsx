import classes from "./RecipesSummary.module.css"

const RecipesSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>Delicious Food Recipes, Presented to You</h2>
            <p>Choose your favorite recipe from our board
                selection of available recipes and enjoy a delicious meal at home.
            </p>
            <p>All our recipes are prepared with high-quality knowledge,
                just-in-time and
                of course by experienced chefs!
            </p>
        </section>
    )
}

export default RecipesSummary;