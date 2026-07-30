import React, { useEffect, useState } from 'react'

function Home() {
    const [recipes, setrecipes] = useState([])

    const API_KEY = "76f628a143b94f248a89c6d12dd34f09";
    useEffect(() => {
        const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&sort=id&sortDirection=asc&number=10&addRecipeInformation=true`;

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setrecipes(data.results || []);
                // setTotalResults(data.totalResults || 0);
            })
            .catch((err) => {
                console.error("Error fetching recipes:", err);
            });
    }, [])
    console.log(recipes);

    return (
        <div>
            <div>
                <div>Recipe</div>
            </div>
            <div className="recipe-grid">
                {recipes.map((recipe) => {
                    const cleanSummary = recipe.summary
                        ? recipe.summary.replace(/<[^>]*>?/gm, '').slice(0, 85) + '...'
                        : 'A delicious recipe to try out!';

                    return (
                        <div className="recipe-card" key={recipe.id}>
                            <div className="card-image">
                                <img src={recipe.image} alt={recipe.title} />
                                {/* <span className="badge-id">ID: {recipe.id}</span> */}
                            </div>

                            <div className="card-body">
                                <div className="card-content">
                                    <h3 className="recipe-title">{recipe.title}</h3>
                                    <p className="recipe-description">{cleanSummary}</p>

                                    <div className="recipe-meta">
                                        <span>⏱️ {recipe.readyInMinutes} mins</span>
                                        <span>🍽️ {recipe.servings} servings</span>
                                    </div>
                                </div>

                                <div className="card-footer">
                                    <a href={`/recipe/${recipe.id}`} className="recipe-btn">
                                        View Recipe Details
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Home