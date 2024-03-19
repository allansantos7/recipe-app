import recipesImage from "../../assets/recipes.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <h1>Recipes</h1>
                
            </header>
            <div className={classes['main-image']}>
                <img src={recipesImage} alt="A book of recipes." />
            </div>
        </>
    )
}

export default Header