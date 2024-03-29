"use client";
import { PencilIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Radio, Stepper } from "rizzui";
import { paymentMethods } from "@/data/paymentMethod";

const Orderdetails = () => {
  return (
    <div className="h-full ">
      {/* Heading and edit order  */}
      <div className="md:flex justify-between items-center mb-4">
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

        <button className="w-full md:w-[25%] lg:w-[18%]  py-2 px-4 mt-4 flex justify-center items-center bg-black text-white hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white space-x-2 hover:border-muted border-2 rounded-full">
          <PencilIcon strokeWidth="2" className="h-4 w-4 space-x-4" />
          <span className="text-nowrap">Edit Order</span>
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

      <div className="lg:flex">
        {/* Order summary section*/}
        <div className="w-full lg:w-[67%] ">
          <div className="overflow-x-scroll  no-scrollbar">
            <table className="w-full table-auto md:table-fixed text-sm text-gray-500   ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100 rounded-lg">
                <tr className="">
                  <th scope="col" className="text-start py-2 px-2  ">
                    Products
                  </th>
                  <th scope="col" className="text-center text-nowrap px-2" >
                    Product price
                  </th>
                  <th scope="col" className="text-center  px-2">
                    Quantity
                  </th>
                  <th scope="col" className="text-center text-nowrap px-2">
                    Total price
                  </th>
                </tr>
              </thead>

              <tbody className="">
                <tr className=" text-center gap-2 mt-6 items-center bg-white border-b-2">
                  <td className="p-4 border-gray-700 flex justify-start gap-4">
                    <Image
                      src="/assets/images/products/8.png"
                      alt="product_img"
                      width={50}
                      height={50}
                      className="hidden md:block"
                    />

                    <div className="text-black dark:text-white font-medium text-nowrap my-auto">
                      Denim Jacket
                    </div>
                  </td>
                  <td>
                    <span className="">$295.00</span>
                  </td>
                  <td>
                    <span className="">3</span>
                  </td>

                  <td>
                    <div className="">$885.00</div>
                  </td>
                </tr>
              </tbody>
            </table>
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
            <span className="text-foreground dark:text-white font-bold">
              $885.00
            </span>
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
                  <Radio className="accent-black " />
                </div>
              </div>
            ))}
        </div>

        {/* order status division */}
        <div className="w-full lg:w-[33%] lg:ml-4 ">
          <div className="text-black dark:text-white font-rufina font-bold text-[1.3rem] pb-2">
            Order status
          </div>
          <Stepper
            direction="vertical"
            className="border-2 border-muted max-md:w-full max-lg:w-[70%]  p-4 rounded-lg "
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
          <div className="flex flex-wrap overflow-hidden items-center gap-4 border-muted border-2 p-4 rounded-lg">
            <Image
              src="/assets/avatar/user_1.png"
              alt="profile"
              width={70}
              height={70}
            />
            <div className="">
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
            <div className="font-bold font-roboto text-black dark:text-white pb-2">
              Home
            </div>
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
            <div className="font-bold font-roboto text-black dark:text-white pb-2">
              Home
            </div>
            <div className="text-foreground font-roboto">
              Mr John Smith. 132, My Street. US California
            </div>
            <div className="text-foreground font-roboto">(316) 555-0116</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orderdetails;
