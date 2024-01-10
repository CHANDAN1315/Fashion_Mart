const Footer = () => {
  return (
    <section className="flex justify-between items-center p-4 border-muted border-y-2 border-l-2">
      <div className="font-Poppins text-foreground">
        Copyright 2023 <span className="font-medium"> Fashion Mart</span> All
        rights reserved.
      </div>

      <div className="flex item-center font-Poppins text-foreground">
        <div>Terms & conditions</div>
        <div className="flex items-center">
          <div className="w-1 h-1 bg-foreground rounded-full mx-2"></div>
          <div>Privacy policy</div>
        </div>
        <div className="flex items-center ">
          <div className="w-1 h-1 bg-foreground rounded-full mx-2"></div>
          <div>Refund policy</div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
