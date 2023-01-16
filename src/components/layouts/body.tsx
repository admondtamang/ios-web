import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { data } from "./footer";
import Icon from "../common/Icon";
type Props = {};

const Body = (props: Props) => {
  const total_apps = data.length;
  const per_page = 16;

  const total_page = Math.ceil(total_apps / per_page);
  let count = 0;

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="swiper"
    >
      {Array.from({ length: total_page }).map((el, i) => {
        count = count + per_page;
        console.log(i * per_page, count);

        return (
          <SwiperSlide key={i}>
            <ul className="grid h-[80vh] w-full grid-cols-4 gap-8 p-8 text-center md:h-[75vh] md:grid-cols-5 md:gap-20 lg:grid-cols-6">
              {Array.isArray(data) &&
                data
                  .slice(i * per_page, count)
                  .map((row, i) => (
                    <Icon
                      img={row.img}
                      link={row.link}
                      name={row.name}
                      key={i}
                    />
                  ))}
            </ul>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
  return (
    <footer className="row pulse animated">
      <ul>
        <li>
          <Link href="https://globfone.com/call-phone/">
            <img src="img/Phone.ico" alt="..." />
          </Link>
        </li>
        <li>
          <Link href="www.facebook.com">
            <img src="img/Messages.ico" alt="..." />
          </Link>
        </li>
        <li>
          <Link href="#">
            <img src="img/Home.ico" alt="..." />
          </Link>
        </li>
        <li>
          <Link href="#">
            <img src="img/App%20Store.ico" alt="..." />
          </Link>
        </li>
        <li>
          <Link href="#">
            <img src="img/Calendar.ico" alt="..." />
          </Link>
        </li>
        <li>
          <Link href="www.camera.com">
            <img src="img/Camera.ico" alt="..." />
          </Link>
        </li>
        <li>
          <Link href="www.youtube.com">
            <img src="img/Clock.ico" alt="..." />
          </Link>
        </li>
        <li>
          <Link href="#">
            <img src="img/Notes.ico" alt="..." />
          </Link>
        </li>
        <li>
          <Link href="#">
            <img src="img/Safari.ico" alt="..." />
          </Link>
        </li>
        <li>
          <Link href="www.maps.google.com">
            <img src="img/Maps.ico" alt="..." />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Body;
