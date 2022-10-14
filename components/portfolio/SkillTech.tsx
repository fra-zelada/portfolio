import { height, width } from "@mui/system"
import { FC } from "react"
import { ISkill } from "../../src/interfaces/ISkill"

interface Props {
    title  : string; 
    skills : ISkill[]
}
// {border: 'solid 1px black', display:'flex', flexDirection:'column', width: '120px', height:'120px', margin: '0 0 0 0' }
// {
//     display: 'flex',
//     flexDirection:'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     margin:  '0 auto',
//     border: 'solid 1px black',
//     width: '100%',
//     height:'100%',
//     aspectRatio: '1/1'
//   }
const SkillTech:FC<Props> = ({ skills, title }) => {
    return (
        <>
                        <div className="col-4 col-6-medium col-12-small " >
							<section className="box style1">
								<span className="icon featured fa-comments"></span>
								<h3>{ title }</h3>
                                <div  className="parent">

                                {
                                    skills.map( skill => (
                                        
                                        <div 
                                            key={skill.name} 
                                            className="elementSkill"
                                            style={{border: 'solid 1px black', display:'flex', flexDirection:'column', width: '100%', height:'100%', margin: '0 0 0 0', aspectRatio:'1/1' }
                                        } 
                                        
                                        > 
                                        {skill.name}  
                                            <picture>
                                                <img src={ skill.image } alt={ skill.name } style={{ width: '30px' }} />
                                            </picture>

                                        </div>
                                        
                                    ))
                                }
                                </div>
                                

							</section>
						</div>            
        </>
    )
}

export default SkillTech
