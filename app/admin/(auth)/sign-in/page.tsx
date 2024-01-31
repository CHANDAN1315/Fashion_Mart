"use client";

// Imports
import {
  ActionIcon,
  Button,
  Checkbox,
  Input,
  Modal,
  Password,
  Text,
} from "rizzui";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";

// Functional component
const SignIn = () => {
  // Local states
  const [modalState, setModalState] = useState<boolean>(false);

  // Returning
  return (
    <>
    <div className="h-full md:h-[100vh] flex flex-col md:flex-row my-4 md:my-0">
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
              <Link
                href={"javascript:void(0)"}
                onClick={() => setModalState(true)}
              >
                <Text fontWeight="medium">Forgot password?</Text>
              </Link>
            </div>

            {/* Button */}
            <Button rounded="pill" size="xl" className="w-full bg-white text-black border-gray-200 hover:bg-black hover:text-white dark:bg-black dark:text-white dark:border-[#333333] dark:hover:bg-white dark:hover:text-black space-x-2">
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
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint velit officia consequat duis.
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

      {/* Modal */}
      <Modal isOpen={modalState} onClose={() => setModalState(false)}>
        <div className="m-auto px-4 pt-6 pb-8">
          <div className="mb-4 flex  justify-between">
            <div className="space-y-2">
              <div className="text-black font-rufina font-bold text-3xl">
                Recover password.
              </div>
              <div className="text-sm text-foreground">Enter your email to recover your password.</div>
            </div>
            <ActionIcon
              size="sm"
              variant="text"
              onClick={() => setModalState(false)}
            >
              <XMarkIcon className="h-auto w-6" strokeWidth={1.8} />
            </ActionIcon>
          </div>

          <Input
            label="Email"
            placeholder="Enter email"
            className="mb-4"
            rounded="pill"
            size="xl"
          />

          <Checkbox
            size="lg"
            className="mb-4 accent-black"
            label={
              <Text className="text-sm">
                I agree to FashionMart&lsquo;s{" "}
                <Link href="javascript:void(0)" className="underline">
                  Terms of Service
                </Link>
              </Text>
            }
          />

          {/* Button */}
          <Button
            type="button"
            className="w-full text-black hover:text-white border-2 border-muted"
            rounded="pill"
            size="xl"
            onClick={() => setModalState(false)}
          >
            Recover password
          </Button>
        </div>
      </Modal>
    </>
  );
};

// Exporting
export default SignIn;
