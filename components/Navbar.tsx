"use client";

import Image from "next/image";

const Navbar = () => {
  return (
    <section className=" flex justify-between border-b-gray-600 border ">
      <Image
        src="/assets/logo/logo.png"
        alt="logo"
        width={130}
        height={130}
        className="m-4"
      />
      <div className="flex space-x-4 mr-4">
        <div className="flex justify-center bg-gray-200 rounded-full m-2 px-2 ">
          <Image
            src="/assets/icons/svg/black/ic_black_bell.svg"
            alt="notificaiton"
            width={25}
            height={25}
          />
        </div>
        <div className="flex justify-center bg-gray-200 rounded-full m-2 px-2 ">
          <Image
            src="/assets/icons/svg/black/ic_black_gear.svg"
            alt="gear"
            width={25}
            height={25}
          />
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/assets/avatar/user_1.png"
            alt="user_logo"
            width={40}
            height={0}
          />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
