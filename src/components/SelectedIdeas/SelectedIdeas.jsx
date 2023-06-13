import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PropTypes from 'prop-types'
import {Card,CardContent, Typography , Button} from '@mui/material';
import css from "./SelectedIdeas.module.css";


export default function SelectedIdeas({getIdeasById, ideas}) {
   
  return (
    <>
      <Swiper
        className={css.swiper}
        navigation={true}
        slidesPerView={1}
        spaceBetween={10}
        modules={[Navigation, Pagination]}
        pagination={{
          type: "fraction",
        }}
      >
        {ideas.map(idea => (
          <SwiperSlide key={idea._id}>
            <Card
              className={css.ideaItem}
              key={idea.id}>
              <CardContent>
                <Typography
                variant='h4'
                component="p"
                mb={3}       
                className={css.ideaAction}>
                {idea.action}
                </Typography>

                <Typography
                variant='h5'
                style={{ fontWeight: 700}}        
                component="p"        
                mb={6}  
                >
                {idea.theme}
                </Typography>
                <Button
                variant='contained'
                onClick={() => getIdeasById(idea._id)}>
                  <span className={css.getIdeaBtnText}>
                   Idea sucsess
                  </span>
                </Button>
            </CardContent>    
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};



SelectedIdeas.propTypes = {
  ideas: PropTypes.arrayOf(
    PropTypes.shape({
         _id: PropTypes.string.isRequired,
          action: PropTypes.string.isRequired,
          date: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
          done: PropTypes.bool.isRequired,
          theme: PropTypes.string.isRequired,
          status: PropTypes.string.isRequired
    })
    ), getIdeasById: PropTypes.func.isRequired,
}