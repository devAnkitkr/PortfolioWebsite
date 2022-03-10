import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import PortfolioCard from "./portfolioCard";

const PortfolioSection = () => {
  return (
    <section id="portfolio">
      <div className="flex flex-col py-20 items-center justify-center min-h-screen max-w-screen-lg mx-auto px-6 lg:px-0">
        <h1 className="mb-1 font-bold text-2xl text-primary">Portfolio</h1>
        <span className="text-gray-500 pb-20 text-secondary">
          My technical level
        </span>
        <div className="w-full mx-auto">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <PortfolioCard
                title="GamersFeed"
                link="https://gamersfeed.vercel.app/"
                image="/gamersfeed.jpg"
                text="Gaming news website, build on next js and graphcms"
              />
            </SwiperSlide>
            <SwiperSlide>
              <PortfolioCard
                title="Classy Tulip"
                link="https://classytulip.com/"
                image="/classytulip.jpg"
                text="Home decor e-commerce website, build on wordpress"
              />
            </SwiperSlide>
            <SwiperSlide>
              <PortfolioCard
                title="Crown Store"
                link="https://crownstore.netlify.app/"
                image="/crownstore.jpg"
                text="Clothing store, build on react js and stripe payment"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
