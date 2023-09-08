export default function Recipe({ recipe }) {
    return (
        <div>
            <h2>{recipe.name}</h2>
            <ol>
                {
                    recipe.ingredients.map((ingredient, index) =>
                        <li key={index}>{ingredient}</li>
                    )
                }
            </ol>
            <hr />
        </div>
    )
}
