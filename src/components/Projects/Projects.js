import "./Projects.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Projects = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <section className="projects" id="proyectos">
            <h2 className="projects__title">
                <span className="quotes">{"< "}</span>Proyectos
                <span className="quotes">{" >"}</span>
            </h2>
            <Slider {...settings}>
                <div>
                    <Card
                        sx={{
                            width: "100%",
                            height: "70%",
                            display: "flex",
                            borderRadius: "1rem",
                            "@media (max-width: 768px)": {
                                flexDirection: "column",
                                height: "auto",
                            },
                        }}
                    >
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="100%"
                            image="https://i.ibb.co/3BfQBcc/encriptador.jpg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over
                                6,000 species, ranging across all continents except Antarctica
                            </Typography>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <Card
                        sx={{
                            width: "100%",
                            height: "70%",
                            display: "flex",
                            borderRadius: "1rem",
                            "@media (max-width: 768px)": {
                                flexDirection: "column",
                                height: "auto",
                            },
                        }}
                    >
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="100%"
                            image="https://i.ibb.co/jR7QqcK/alurageek.jpg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over
                                6,000 species, ranging across all continents except Antarctica
                            </Typography>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <Card
                        sx={{
                            width: "100%",
                            height: "70%",
                            display: "flex",
                            borderRadius: "1rem",
                            "@media (max-width: 768px)": {
                                flexDirection: "column",
                                height: "auto",
                            },
                        }}
                    >
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="100%"
                            image="https://i.ibb.co/fH6Dd2w/image1.jpg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over
                                6,000 species, ranging across all continents except Antarctica
                            </Typography>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </CardContent>
                    </Card>
                </div>
            </Slider>
        </section>
    );
};

export default Projects;
