import Link from "next/link";
import React from "react";
import { capitalizeFirstLetter } from "../../utils/stringManipulation";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";

type Props = { link: string; img: string; name: string };

const Icon = ({ link, img, name }: Props) => {
  const router = useRouter();

  function handleClick(link: string) {
    router.push({
      pathname: "previewApp",
      query: { link },
    });
  }
  return (
    <motion.li
      className="cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div
        onClick={() => handleClick(link)}
        className="flex flex-col justify-center gap-1"
      >
        <Image
          src={img}
          className="max-h-[80px] w-[80px]"
          alt="..."
          width="80"
          height="80"
        />
        <label className="text-center" htmlFor={name}>
          {capitalizeFirstLetter(name)}
        </label>
      </div>
    </motion.li>
  );
};

export default Icon;
