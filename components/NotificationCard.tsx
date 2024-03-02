import { notification } from "@/data/notification";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const NotificationCard = () => {
  return (
    <div className="mx-4 h-[55vh] w-[90%] overflow-y-scroll no-scrollbar ">
      {notification &&
        notification.map((item) => (
          <>
            <div
              className="flex justify-between items-center my-6"
              key={item.id}
            >
              <div className="flex justify-between items-center space-x-3">
                <div className="flex items-center ">
                  <Image
                    src={item.img}
                    alt="profile"
                    width={40}
                    height={40}
                    className=" bg-muted rounded-full max-md:hidden"
                  />
                </div>
                <div className="">
                  <div className="font-medium text-base">{item.title}</div>
                  <div className="text-sm text-foreground font-poppins notificationText">
                    {item.discription}
                  </div>
                </div>
                <ChevronRightIcon width={30} height={30} />
              </div>
            </div>
            <div className="border-t-2 border-muted mt-4"></div>
          </>
        ))}
    </div>
  );
};

export default NotificationCard;
