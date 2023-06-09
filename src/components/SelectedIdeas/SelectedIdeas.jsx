import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
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
          <SwiperSlide key={idea.id}>
            <li
              className={css.ideaItem}
              key={idea.id}>
              <p className={css.ideaAction}>{idea.action}</p>
              <p>{idea.theme}</p>
              <button onClick={() => getIdeasById(idea.id)}>Idea sucsess</button>
            </li>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};



