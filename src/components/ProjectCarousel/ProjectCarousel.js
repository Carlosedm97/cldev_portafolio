import "./ProjectCarousel.css";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ProjectCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const [projects, setProjects] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch ('https://portafolio-api.onrender.com/projects');
        const projects = await data.json();
        setProjects(projects);
      } catch (event) {
        console.log(event);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="slider__container">
      <Slider {...settings} className="slider">
        {projects.map((project) => {
          const { image, name, description, demo, code } = project;
          return <Card sx={{ 
              width: 345,
              height: 350
            }}>
            <CardMedia
              sx={{ height: 160 }}
              image={ image }
              title={ name }
            />
            <CardContent sx={{ display: "flex", flexDirection: "column", flexGrow: 1}}>
              <Typography gutterBottom variant="h6" component="div">
                { name }
              </Typography>
              <Typography variant="body2" color="text.secondary">
                { description }
              </Typography>
            </CardContent>
            <CardActions>
              <Button href={ demo } target='_blank' rel='noopener noreferrer' size="small">Demo</Button>
              <Button href={ code } target='_blank' rel='noopener noreferrer' size="small">Código</Button>
            </CardActions>
          </Card>
        })}
      </Slider>
    </div>
  )
};

export default ProjectCarousel;
