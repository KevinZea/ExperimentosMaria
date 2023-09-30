import './BestRecipes.css'
import './ResponsiveRecipes.css'
import { RecipePost } from './Post/RecipePost'

import EXPERIMENTOS from '../../data'

export const BestRecipes = () => {
    return (
        <section className="bRecipes">
            <div className="recipes">
                <div className="infos">
                    <h2>Mis Experimentos</h2>
                    <p>COLEGIO PARAISO MIRADOR</p>
                </div>
                
                <div className="recipe-posts">
                    {EXPERIMENTOS.map((e) => {
                        return(
                            <RecipePost title={e.title}
                            color={e.color}
                            src={e.imagen}
                            >
                            </RecipePost>
                        )
                    })}
                    
                </div>
            </div>
        </section>
    )
}