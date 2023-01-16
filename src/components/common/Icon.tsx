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
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => handleClick(link)}
      className="flex cursor-pointer flex-col items-center justify-center gap-1 self-start"
    >
      <Image
        src={img}
        className="mb-1 max-h-[60px] min-w-[60px] object-contain md:max-h-[80px] md:min-w-[80px]"
        alt="..."
        width="80"
        height="80"
      />
      <label className="text-center font-normal" htmlFor={name}>
        {capitalizeFirstLetter(name)}
      </label>
    </motion.li>
  );
};

export default Icon;
