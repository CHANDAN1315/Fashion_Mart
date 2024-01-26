"use client";
import { PencilIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Radio, Stepper } from "rizzui";
import { paymentMethods } from "@/data/paymentMethod";

const Orderdetails = () => {
  return (
    <>
      {/* Heading and edit order  */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <div className="flex items-center text-black dark:text-white font-rufina font-bold text-[24px] gap-2">
            Order
            <span className="text-black dark:text-white font-roboto text-[1rem]">
              #FC6723757651DB74
            </span>
          </div>
          <div className="flex items-center space-x-2 text-foreground">
            <div>E-commerce</div>
            <div className="w-1 h-1 bg-black rounded-full"></div>
            <div>Order details</div>
          </div>
        </div>

        <button className="flex justify-center items-center bg-black text-white hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white space-x-2 hover:border-muted border-2 py-2 px-4  rounded-full">
          <PencilIcon strokeWidth="2" className="h-4 w-4 space-x-4 " />
          <span>Edit Order</span>
        </button>
      </div>

      {/* Date and total spent */}
      <div className="flex items-center py-3 border-y-2 space-x-4 mb-6">
        <div className="text-foreground">January 18,2024 at 12:48 PM</div>
        <div className="w-[2px] h-6 bg-muted"></div>
        <div className="text-foreground">Total $590.00</div>
        <div className="w-[2px] h-6 bg-muted"></div>
        <div className="bg-green-100 px-2 py-1 text-green-default font-medium rounded-full">
          Paid
        </div>
      </div>

      <div className="flex">
        {/* Order summary section*/}
        <div className="w-[67%] ">
          <div className="flex justify-between item-center py-2 px-4 bg-gray-100 dark:bg-[#18181B] rounded-lg">
            <div className="text-foreground font-medium">Products</div>
            <div className="flex gap-24 item-center">
              <span className="text-foreground font-medium">Product price</span>
              <span className="text-foreground font-medium">Quantity</span>
            </div>
            <div className="text-foreground font-medium ">Total price</div>
          </div>

          {/* Product details */}
          <div className="flex justify-between item-center py-4 px-4 border-b-2 border-muted text-foreground">
            <div className="flex items-center gap-4">
              <Image
                src="/assets/images/products/8.png"
                alt="product_img"
                width={50}
                height={50}
              />
              <div className="text-black dark:text-white font-medium">Denim Jacket</div>
            </div>
            <div className="mr-10 pt-4">$295.00</div>
            <div className="mr-28 pt-4">3</div>
            <div className="pt-4">$885.00</div>
          </div>

          {/* Order summary */}
          <div className="text-black dark:text-white font-rufina font-bold text-[1.3rem] py-4">
            Order summery
          </div>
          <div className="flex justify-between item-center py-1">
            <span className="">Total</span>
            <span className="text-foreground font-medium">$885.00</span>
          </div>

          <div className="flex justify-between item-center py-2">
            <span className="">Store Credit</span>
            <span className="text-foreground font-medium">$0.00</span>
          </div>
          <div className="flex justify-between item-center py-1 mb-4">
            <span className="">Subtotal</span>
            <span className="text-foreground font-medium">$885.00</span>
          </div>

          <div className="flex justify-between item-center py-1 border-t-2 border-muted">
            <span className="font-medium dark:text-white">Total Price:</span>
            <span className="text-foreground dark:text-white font-bold">$885.00</span>
          </div>

          <div className="text-black dark:text-white font-rufina font-bold text-[1.3rem] pt-4">
            Transactions
          </div>
          {paymentMethods &&
            paymentMethods.map((payment) => (
              <div
                key={payment.id}
                className="flex justify-between items-center hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black border-2 border-muted dark:border-[#333333] rounded-full py-3 px-2 my-4"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src={payment.logo}
                    alt="paypal payment"
                    width={28}
                    height={28}
                  />
                  <div className="">{payment.title}</div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="">{payment.amount}</div>
                  <Radio className="accent-black "/>
                </div>
              </div>
            ))}
        </div>

        {/* order status division */}
        <div className="w-[33%] ml-4 ">
          <div className="text-black dark:text-white font-rufina font-bold text-[1.3rem] pb-2">
            Order status
          </div>
          <Stepper
            direction="vertical"
            className="border-2 border-muted  p-4 rounded-lg "
          >
            <Stepper.Step title="Order pending" />
            <Stepper.Step title="Order processing" />
            <Stepper.Step title="Order at local facility" />
            <Stepper.Step title="Order out for delivery" />
            <Stepper.Step title="Order completed" />
          </Stepper>

          <div className="text-black dark:text-white font-rufina font-bold text-[1.3rem] mt-6 mb-4">
            Customer Details
          </div>
              {/* Customer details */}
          <div className="flex  items-center gap-4 border-muted border-2 p-4 rounded-lg">
            <Image
              src="/assets/avatar/user_1.png"
              alt="profile"
              width={70}
              height={70}
            />
            <div>
              <div className="font-bold font-roboto text-black dark:text-white">
                Steven rogers
              </div>
              <div className="text-foreground font-roboto">
                nevaeh.simmons@example.com
              </div>
              <div className="text-foreground font-roboto">(316) 555-0116</div>
            </div>
          </div>

              {/* Shipping Address */}
          <div className="text-black dark:text-white font-rufina font-bold text-[1.3rem] mt-4 mb-4">
            Shipping Address
          </div>
          <div className=" border-muted border-2 p-4 rounded-lg">
            <div className="font-bold font-roboto text-black dark:text-white pb-2">Home</div>
            <div className="text-foreground font-roboto">
              Mr John Smith. 132, My Street. US California
            </div>
            <div className="text-foreground font-roboto">(316) 555-0116</div>
          </div>

              {/* Billing address */}
          <div className="text-black dark:text-white font-rufina font-bold text-[1.3rem] mt-4 mb-4">
            Billing Address
          </div>
          <div className=" border-muted border-2 p-4 rounded-lg mb-6">
            <div className="font-bold font-roboto text-black dark:text-white pb-2">Home</div>
            <div className="text-foreground font-roboto">
              Mr John Smith. 132, My Street. US California
            </div>
            <div className="text-foreground font-roboto">(316) 555-0116</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orderdetails;
