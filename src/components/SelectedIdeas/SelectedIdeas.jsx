import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PropTypes from 'prop-types'
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
            <li
              className={css.ideaItem}
              key={idea.id}>
              <p className={css.ideaAction}>{idea.action}</p>
              <p>{idea.theme}</p>
              <button onClick={() => getIdeasById(idea._id)}>Idea sucsess</button>
            </li>
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