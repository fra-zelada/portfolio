import { IProject } from "../../src/interfaces/IProject";
import Project from "./Project"
import { FC } from 'react';

interface Props {
	projects: IProject[];
}

const Projects:FC<Props> = ({ projects }) => {

	const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quas pariatur voluptates consequatur voluptas blanditiis ipsa at, fugiat saepe dolorum quos reprehenderit ab assumenda laudantium a minima fuga beatae, magnam iusto magni incidunt voluptatum animi libero. Laudantium, asperiores ducimus cupiditate atque dolor voluptate saepe nobis quia similique itaque voluptatibus voluptatum, provident, recusandae excepturi doloremque velit praesentium quos. Temporibus velit vero illum est laudantium atque ipsam quae veniam sequi sunt. Debitis a reprehenderit aliquam dicta? Vero veniam corporis sint ipsum veritatis facere consectetur deleniti blanditiis nesciunt facilis soluta placeat error quasi in, minus illum perferendis praesentium odio tenetur? Aut aspernatur saepe beatae natus laborum. Labore neque fugit aliquid exercitationem cumque harum voluptatum a esse, necessitatibus quos pariatur sit illo molestiae sed impedit doloribus sint. Voluptatibus vero fuga perferendis totam molestiae non, facilis nesciunt voluptatum culpa adipisci esse praesentium magnam quia, vel vitae! Perferendis minus sit dicta neque. Sequi ex nisi ducimus placeat molestiae, ratione autem reiciendis odit necessitatibus doloremque odio laborum omnis beatae quo dicta, voluptas fugiat reprehenderit perferendis similique a neque rem maxime corrupti iste? Aliquid veritatis eligendi labore rerum est, recusandae esse repellat earum pariatur dolores quidem quaerat, minus amet aliquam quam odit consequatur provident delectus aspernatur rem repudiandae.';

    return (
        <>
                <div className="container">
					<header>
						<h2>Here’s some stuff I made recently.</h2>
						<p>Proin odio consequat  sapien vestibulum consequat lorem dolore feugiat.</p>
					</header>
					<div className="row">
						{
							projects.map((project) => 
							(		<Project  
										key={ project.gitHubRepo }
										project={ project }
										image={"https://res.cloudinary.com/dwvkka6mz/image/upload/v1665513433/teslo_u3hjz7.png"} 
									/>

							))
						}
						
						
					</div>
					<footer>
						<p>Lorem ipsum dolor sit sapien vestibulum ipsum primis?</p>
						<a href="#contact" className="button large scrolly">Get in touch with me</a>
					</footer>
				</div>   
        </>
    )
}

export default Projects
