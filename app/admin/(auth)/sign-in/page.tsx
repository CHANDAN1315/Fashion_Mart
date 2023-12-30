"use client";

// Imports
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, Input, Password, Text } from "rizzui";

// Functional component
const SignIn = () => {
  // Returning
  return (
    <div className="flex h-screen">
      <div className="w-1/2 max-md:w-full h-full flex flex-col bg-white justify-center">
        <div className="px-12">
          {/* Heading */}
          <h1 className="mb-2 text-4xl font-rufina font-bold">
            Welcome back! Please sign in to continue.
          </h1>

          {/* Paragraph */}
          <p className="mb-6 text-1xl text-gray-500 font-roboto font-normal">
            By signing up, you will gain access to exclusive content, special
            offers, and be the first to hear about exciting news and updates
          </p>

          {/* Input */}
          <Input
            label="Email"
            placeholder="Enter email"
            className="mb-4"
            rounded="pill"
            size="xl"
          />

          {/* Input */}
          <Password
            label="Password"
            placeholder="Enter password"
            rounded="pill"
            size="xl"
          />

          {/* Link */}
          <div className="my-4 flex justify-end">
            <Link href={"#"}>
              <Text fontWeight="medium">Forgot password?</Text>
            </Link>
          </div>

          {/* Button */}
          <Button rounded="pill" size="xl" className="w-full">
            Sign in
          </Button>
        </div>
      </div>
      <div className="w-1/2 max-md:hidden h-full bg-gray-100  flex flex-col justify-center">
        <div className="px-12 flex flex-col justify-center items-center text-center">
          {/* Heading */}
          <h1 className="mb-2 text-4xl font-rufina font-bold">
            The simplest way to manage your workspace.
          </h1>

          {/* Paragraph */}
          <p className="mb-6 text-1xl text-gray-500 font-roboto font-normal">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint velit officia consequat duis.
          </p>

          {/* Paragraph */}
          <Image
            src={
              "https://isomorphic-furyroad.vercel.app/_next/image?url=https%3A%2F%2Fisomorphic-furyroad.s3.amazonaws.com%2Fpublic%2Fauth%2Fsign-up.webp&w=1920&q=75"
            }
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="w-full xl:w-9/12 2xl:w-1/2 h-auto"
          />
        </div>
      </div>
    </div>
  );
};

// Exporting
export default SignIn;
