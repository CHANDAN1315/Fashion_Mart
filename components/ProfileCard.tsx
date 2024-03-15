import {
  ArrowRightStartOnRectangleIcon,
  ChevronRightIcon,
  CogIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ProfileCard = () => {
  return (
    <div className="mx-4 h-[43vh] w-[90%] overflow-y-scroll no-scrollbar ">
      <div className="md:flex items-center  gap-4 py-2">
        <Image
          src="/assets/avatar/memoji.png"
          alt="profile"
          width={80}
          height={80}
        />
        <div className="flex flex-col justify-center">
          <div className="flex gap-2">
            <div className="font-rufina font-bold text-black  text-[28px]">
              Steven Rogers
            </div>
            <Image
              src="/assets/icons/svg/general/greentick.svg"
              alt="greentick"
              width={24}
              height={24}
            />
          </div>
          <div className="text-foreground">nevaeh.simmons@example.com</div>
          <div className="text-foreground">(316) 555-0116</div>
        </div>
      </div>

      <div className="border-t-2 border-muted  my-4"></div>

      <div className="space-y-2">
        <Link href="http://localhost:3000/admin/my_profile">
        <div className="flex item-center justify-between hover:bg-muted py-2 px-1 cursor-pointer rounded-md ">
          <div className="flex items-center  space-x-4">
            <UserIcon width={25} height={25} />
            <div className="text-foreground  font-roboto">My Profile</div>
          </div>
          <ChevronRightIcon width={25} height={25} />
        </div>
        </Link>

        <div className="flex item-center justify-between hover:bg-muted py-2 px-1 cursor-pointer rounded-md ">
          <div className="flex items-center  space-x-4">
            <CogIcon width={25} height={25} />
            <div className="text-foreground font-roboto">Account Settings</div>
          </div>
          <ChevronRightIcon width={25} height={25} />
        </div>
      </div>

      <div className="border-t-2 border-muted  mt-3 mb-1"></div>
      <AnimatePresence>
        <div className="flex space-x-4 items-center cursor-pointer hover:bg-red-200 rounded-md py-2 px-1">
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 15 }}
            transition={{
              duration: 0.5,
            }}
            className=""
          >
            <ArrowRightStartOnRectangleIcon
              width={25}
              height={25}
              color="red"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{
              duration: 0.5,
            }}
            className="font-roboto text-red-500"
          >
            Log out account
          </motion.div>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default ProfileCard;
