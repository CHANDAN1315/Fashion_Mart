import {
    ArrowRightStartOnRectangleIcon,
  ChevronRightIcon,
  CogIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

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
            <div className="font-rufina font-bold text-black dark:text-white text-[28px]">
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

      <div className="border-t-2 border-muted dark:border-[#333333] my-4"></div>

      <div className="space-y-6">
        <div className="flex item-center justify-between ">
          <div className="flex items-center  space-x-4">
            <UserIcon width={25} height={25} />
            <div className="text-foreground  font-roboto">My Profile</div>
          </div>
          <ChevronRightIcon width={25} height={25} />
        </div>

        <div className="flex item-center justify-between ">
          <div className="flex items-center  space-x-4">
            <CogIcon width={25} height={25} />
            <div className="text-foreground font-roboto">Account Settings</div>
          </div>
          <ChevronRightIcon width={25} height={25} />
        </div>
      </div>

      <div className="border-t-2 border-muted dark:border-[#333333] my-4"></div>

        <div className="flex items-center space-x-4 mb-4" >
            <ArrowRightStartOnRectangleIcon width={25} height={25} color="red"/>
            <div className="font-roboto text-red-500">Log out account</div>
        </div>
    </div>
  );
};

export default ProfileCard;
