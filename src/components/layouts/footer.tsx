import { useState } from "react";
import Icon from "../common/Icon";
import { motion } from "framer-motion";

type Props = {};

export const data = [
  {
    link: "https://globfone.com/call-phone/",
    img: "/img/Phone.ico",
    name: "phone",
  },
  {
    link: "www.facebook.com",
    img: "/img/Messages.ico",
    name: "Messages",
  },
  {
    link: "https://globfone.com/call-phone/",
    img: "/img/Home.ico",
    name: "Home",
  },
  {
    link: "https://globfone.com/call-phone/",
    img: "/img/Phone.ico",
    name: "d",
  },
  {
    link: "https://globfone.com/call-phone/",
    img: "/img/Phone.ico",
    name: "phone",
  },
  {
    link: "www.facebook.com",
    img: "/img/Messages.ico",
    name: "Messages",
  },
  {
    link: "https://globfone.com/call-phone/",
    img: "/img/Home.ico",
    name: "Home",
  },
  {
    link: "https://globfone.com/call-phone/",
    img: "/img/Phone.ico",
    name: "d",
  },
  {
    link: "www.facebook.com",
    img: "/img/Messages.ico",
    name: "ds",
  },
  {
    link: "https://globfone.com/call-phone/",
    img: "/img/Home.ico",
    name: "ds",
  },
  {
    link: "https://globfone.com/call-phone/",
    img: "/img/Phone.ico",
    name: "phone",
  },
  {
    link: "www.facebook.com",
    img: "/img/Messages.ico",
    name: "Messages",
  },
  {
    link: "https://globfone.com/call-phone/",
    img: "/img/Home.ico",
    name: "Home",
  },
  {
    link: "https://globfone.com/call-phone/",
    img: "/img/Phone.ico",
    name: "d",
  },
  {
    link: "https://globfone.com/call-phone/",
    img: "/img/Phone.ico",
    name: "phone",
  },
  {
    link: "www.facebook.com",
    img: "/img/Messages.ico",
    name: "Messages",
  },
  {
    link: "https://globfone.com/call-phone/",
    img: "/img/Home.ico",
    name: "Home",
  },
  {
    link: "https://globfone.com/call-phone/",
    img: "/img/Phone.ico",
    name: "d",
  },
  {
    link: "www.facebook.com",
    img: "/img/Messages.ico",
    name: "ds",
  },
  {
    link: "https://globfone.com/call-phone/",
    img: "/img/Home.ico",
    name: "ds",
  },
  {
    link: "https://globfone.com/call-phone/",
    img: "/img/Home.ico",
    name: "ds",
  },
];
const Footer = (props: Props) => {
  const [showModal, setShowModal] = useState(false);

  const Modal = () => {
    return (
      <motion.div>
        <button>close</button>
      </motion.div>
    );
  };

  return (
    <footer className="fixed bottom-0 flex h-[15vh] w-full items-center justify-center p-8 py-4 md:h-[20vh] ">
      {showModal && <Modal />}

      <ul className="grid h-full w-full grid-cols-4 items-center justify-center gap-8 rounded-3xl md:gap-20 md:p-0">
        {Array.isArray(data) &&
          data
            .slice(0, 4)
            .map((row, i) => (
              <Icon img={row.img} link={row.link} name={row.name} key={i} />
            ))}

        {/* <li>
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
        </li> */}
      </ul>
    </footer>
  );
};

export default Footer;
