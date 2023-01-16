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
    link: "www.facebook.com",
    img: "/img/Messages.ico",
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
    <footer className="row pulse animated fixed bottom-0">
      {showModal && <Modal />}

      <ul className="flex gap-20 py-4 px-16">
        {Array.isArray(data) &&
          data.map((row, i) => (
            <li key={i}>
              <Icon img={row.img} link={row.link} name={row.name} />
            </li>
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
