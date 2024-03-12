import {
  BellAlertIcon,
  ChevronRightIcon,
  LanguageIcon,
  LockClosedIcon,
  PencilIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
// import { Switch } from "rizzui";
import { Switch } from "./Switch";
import { useState } from "react";
import Link from "next/link";

const SettingCard = () => {
  const [enabled, setEnabled] = useState<boolean>(false);
  const [theme, setTheme] = useState<boolean>(false);

  return (
    <div className="mx-4 h-[55vh] w-[90%] overflow-y-scroll no-scrollbar ">
      <div className="mt-6">
        <div className="font-rufina mb-2 text-xl font-bold">
          Profile & Security
        </div>

        <div className="space-y-2">
          <Link href="http://localhost:3000/admin/edit_profile">
            <div className="flex item-center justify-between hover:bg-muted py-2 px-1 cursor-pointer rounded-md ">
              <div className="flex items-center  space-x-4">
                <PencilIcon width={25} height={25} />
                <div className="text-foreground  font-roboto">Edit Profile</div>
              </div>
              <ChevronRightIcon width={25} height={25} />
            </div>
          </Link>

          <div className="flex item-center justify-between hover:bg-muted py-2 px-1 cursor-pointer rounded-md ">
            <div className="flex items-center  space-x-4">
              <LockClosedIcon width={25} height={25} />
              <div className="text-foreground font-roboto">Reset Password</div>
            </div>
            <ChevronRightIcon width={25} height={25} />
          </div>

          <div className="flex item-center justify-between hover:bg-muted py-2 px-1 cursor-pointer rounded-md">
            <div className="flex items-center  space-x-4">
              <LanguageIcon width={25} height={25} />
              <div className="text-foreground font-roboto">Languages</div>
            </div>
            <ChevronRightIcon width={25} height={25} />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="font-rufina mb-2 text-xl font-bold">
          Notifications & Theming
        </div>

        <div className="space-y-2 my-4">
          <div className="flex item-center justify-between ">
            <div className="flex items-center  space-x-4">
              <BellAlertIcon width={25} height={25} />
              <div className="text-foreground  font-roboto">Notifications</div>
            </div>
            <Switch
              checked={enabled}
              onChange={(e) => setEnabled(e.target.checked)}
            />
          </div>

          <div className="flex item-center justify-between py-2 ">
            <div className="flex items-center  space-x-4">
              <SunIcon width={25} height={25} />
              <div className="text-foreground font-roboto">Light Theme </div>
            </div>
            <Switch
              checked={theme}
              onChange={(e) => setTheme(e.target.checked)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingCard;
