import { Chip, Typography } from "@mui/material";
import { height, width } from "@mui/system"
import { FC } from "react"
import { ISkill } from "../../src/interfaces/ISkill"
import FavoriteIcon from '@mui/icons-material/Favorite';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LensIcon from '@mui/icons-material/Lens';
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
const SkillTech2:FC<Props> = ({ skills, title }) => {

    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
          color: '#02BB02',
        },
        '& .MuiRating-iconHover': {
          color: '#06F406',
        },
      });

    return (
        <>
                        <div  >
							<section className="">
								<span className="icon featured fa-comments"></span>
								<h3>{ title }</h3>
                                <div  className="card__container_techs">

                                {
                                    skills.map( skill => (
                                        
                                        <div 
                                            key={skill.name} 
                                            className=""
                                            style={{border: 'solid 1px black', display:'flex', flexDirection:'column', aspectRatio:'1/1' , width: '130px', height:'130px'  }
                                        } 
                                        
                                        > 
                                            <div style={{ marginTop: '1px'}}>


                                            </div>
                                            {skill.name}  
                                                <picture>
                                                    <img src={ skill.image } alt={ skill.name } style={{ aspectRatio:'1/1' , width: '30px', height:'30px' }} />
                                                </picture>
                                            <div style={{ marginBottom: '1px'}}>
                                                <StyledRating
                                                    name="customized-color"
                                                    defaultValue={ (skill.knowledge * 5)/100 || 0 }
                                                    getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                                    precision={0.1}
                                                    icon={<LensIcon fontSize="inherit" />}
                                                    emptyIcon={<LensIcon fontSize="inherit" />}
                                                    contentEditable={ false }
                                                    disabled={ true }
                                                    style={{ marginBottom: '0px'}}
                                                    
                                                />
                                                <Chip label={`Manejo: ${skill.knowledge || 0 }%`} />
                                                {/* <Typography component="legend" variant="caption" style={{marginTop: '0px'}}>Conocimiento: { skill.knowledge || 0 }%</Typography> */}
                                            </div>


                                        </div>
                                        
                                    ))
                                }
                                </div>
                                

							</section>
						</div>            
        </>
    )
}

export default SkillTech2
