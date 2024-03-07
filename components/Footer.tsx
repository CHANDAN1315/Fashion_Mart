"use client"
const Footer = () => {
  return (
    <section className="bg-white text-xs sm:text-sm flex flex-col md:flex md:flex-row justify-between items-center p-4 border-muted dark:border-[#333333] border-y-2 border-x-2">
      {/* Copyright */}
      <div className="flex flex-wrap font-Poppins text-foreground">
        Copyright 2023 <span className="font-medium dark:text-white px-2">Fashion Mart</span> All
        rights reserved.
      </div>

      {/* Legal Notices */}
      <div className="mt-4 md:mt-0 flex item-center font-Poppins text-foreground">
        <div className="text-nowrap">Terms & conditions</div>
        <div className="flex items-center text-nowrap">
          <div className="w-1 h-1 bg-foreground rounded-full mx-2"></div>
          <div>Privacy policy</div>
        </div>
        <div className="flex items-center text-nowrap ">
          <div className="w-1 h-1 bg-foreground rounded-full mx-2"></div>
          <div>Refund policy</div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
