import {  BookmarkIcon, TrashIcon } from "@heroicons/react/24/outline";
import React from "react";

const ThreeDotCard = () => {
  return (
    <div className="mx-4 absolute w-[500%] z-10 top-10 right-5 overflow-y-scroll no-scrollbar bg-white py-3 px-4 rounded-xl shadow-lg ">
      <div className="flex space-x-2">
        <TrashIcon width={25} height={25} />
        <div className="text-foreground font-roboto">Delete notification</div>
      </div>

      <div className="border-t-2 border-muted my-4"></div>
      <div className="flex space-x-2">
        <BookmarkIcon  width={25} height={25} />
        <div className="text-foreground font-roboto">Book mark</div>
      </div>
    </div>
  );
};

export default ThreeDotCard;
