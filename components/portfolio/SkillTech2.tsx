import { Card, CardMedia, Chip, Typography } from "@mui/material";
import { height, width } from "@mui/system"
import { FC } from "react"
import { ISkill } from "../../src/interfaces/ISkill"
import FavoriteIcon from '@mui/icons-material/Favorite';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LensIcon from '@mui/icons-material/Lens';
import Grid from "@mui/material/Unstable_Grid2";
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
        
                        <Box sx={{
                            background: '#fff',
                            boxShadow: 'inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15), 0px 2px 3px 0px rgba(0, 0, 0, 0.1)',
                            padding: 1
                        }}  >
							<section className="">
								<span className="icon featured fa-comments"></span>
								<h3>{ title }</h3>
                            <Box sx={{ flexGrow: 1,
                            
                            }}>
                                <Grid container spacing={1}>

                                {
                                    skills.map( skill => (
                                        
                                        <Grid
                                            xs={4}
                                            key={skill.name} 
                                            className=""
                                            // minWidth={'134px'}
                                            // maxWidth={'154px'}
                                            style={{border: 'solid 1px black', display:'flex', flexDirection:'column', aspectRatio:'1/1', alignItems: 'center', justifyContent:'space-between', 
                                            
                                                // , width: '130px', height:'130px'  
                                            }
                                        } 
                                        
                                        > 
                                            {/* <Box style={{ marginTop: '1px'}}>


                                            </Box> */}
                                            <Typography>
                                                {skill.name}  

                                            </Typography>
                                            <Card sx={{ maxWidth: 40 , display:'flex', justifyContent:'center'}}>
                                                <CardMedia
                                                    component="img"
                                                    width="10px"
                                                    image={ skill.image }
                                                    alt={ skill.name }>
                                                    
                                                </CardMedia>
                                            </Card>
                                            <Box style={{ marginBottom: '1px', display:'flex', flexDirection:'column', alignItems:'flex-end'}}>
                                                <StyledRating
                                                    name="customized-color"
                                                    defaultValue={ (skill.knowledge * 5)/100 || 0 }
                                                    getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                                    precision={0.1}
                                                    icon={<LensIcon fontSize="small" />}
                                                    emptyIcon={<LensIcon fontSize="small" />}
                                                    contentEditable={ false }
                                                    disabled={ true }
                                                    style={{ marginBottom: '0px'}}
                                                    
                                                />
                                                <Chip label={`Manejo: ${skill.knowledge || 0 }%`} />
                                                {/* <Typography component="legend" variant="caption" style={{marginTop: '0px'}}>Conocimiento: { skill.knowledge || 0 }%</Typography> */}
                                            </Box>


                                        </Grid>
                                        
                                    ))
                                }
                                </Grid>
                            </Box>

							</section>
						</Box>            
        </>
    )
}

export default SkillTech2
