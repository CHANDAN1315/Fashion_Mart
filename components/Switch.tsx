"use client";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import { forwardRef } from "react";


function Switch(props: any, ref: any) {
  return (
    <label className="cursor-pointer">
      <input type="checkbox" className="hidden" ref={ref} {...props} />
      <div
        className={`w-14 p-1 rounded-full ${
          props.checked ? "bg-green-400" : "bg-gray-200"
        }`}
      >
        <div
          className={`w-fit p-3 shadow-sm rounded-full transition-all duration-300 text-white ${
            props.checked ? "bg-white translate-x-6" : "bg-white -rotate-180"
          }`}
        >
          {props.checked && <CheckBadgeIcon />}
        </div>
      </div>
    </label>
  );
}

export default forwardRef(Switch);