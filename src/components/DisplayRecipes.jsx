import { recipes } from "../data/data"
import Recipe from "./Recipe"
export default function DisplayRecipes() {
    return (
        <div>
            <h1>DisplayRecipes</h1>
            {
                recipes.map(recipe =>
                    <Recipe recipe={recipe} key={recipe.id} />
                )
            }
        </div>
    )
}
