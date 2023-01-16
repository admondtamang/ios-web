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
  const per_page = 10;

  const total_page = Math.ceil(total_apps / per_page);
  console.log(total_page);

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {Array.from({ length: total_page }).map((el, i) => (
        <SwiperSlide key={i}>
          <ul className="flex gap-20 p-8">
            {Array.isArray(data) &&
              data.slice(i * total_page, total_apps).map((row, i) => (
                <li key={i}>
                  <Icon img={row.img} link={row.link} name={row.name} />
                </li>
              ))}
          </ul>
        </SwiperSlide>
      ))}
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
