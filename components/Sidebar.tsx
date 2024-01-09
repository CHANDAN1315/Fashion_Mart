"use client";
import Image from "next/image";
const Sidebar = () => {
  return (
    <div>
      <div className="flex space-x-4 items-center p-2    ">
        <Image
          src="/assets/assets/icons/svg/black/ic_black_home.svg"
          alt="home"
          width={24}
          height={24}
        />
        <span className="text-black font-roboto">Dashboard</span>
      </div>
      {/* <div className="mt-10">
            {sidebarData.map((item) => (
               <div key={item.title}>
                  <p className="text-gray-500 font-bold m-2 mt-8">
                     {item.title}
                  </p>
                  {item.links.map((link) => link.dropdown ? (
                     <div key={link.name} className="flex items-center m-3 justify-between text-gray-400 text-sm font-bold py-1">
                        <div className="flex space-x-4" >
                           <span className="flex mt-1">{link.icon}</span>
                           <span>{link.name}</span>
                        </div>
                        <span >{link.dropdown}</span>
                     </div>
                  ) :
                     (<div key={link.name} className="flex items-center m-3 space-x-4 text-gray-400 text-sm font-bold py-1">
                        <span>{link.icon}</span>
                        <span>{link.name}</span>
                     </div>
                     ))}
               </div>

            ))}
         </div> */}
    </div>
  );
};

export default Sidebar;
