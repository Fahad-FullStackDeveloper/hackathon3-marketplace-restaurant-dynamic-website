"use client";
import React from "react";
import SignUpPage from "@/app/SignUp/page"; // Adjust the import path as needed
import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const SignInPage = () => {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSignUp, setShowSignUp] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  if (showSignUp) {
    return <SignUpPage />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return;

    try {
      const result = await signIn.create({
        identifier: email,
        password,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        router.push("/dashboard"); // Redirect after successful sign in
      }
    } catch (err: any) {
      setError(err.message || "An error occurred during sign in");
    }
  };

  // Handle OAuth
  const handleOAuthSignIn = async (provider: "oauth_google" | "oauth_apple") => {
    if (!isLoaded) return;

    try {
      await signIn.authenticateWithRedirect({
        strategy: provider,
        redirectUrl: "/sso-callback",
        redirectUrlComplete: "/dashboard",
      });
    } catch (err: any) {
      setError(err.message || `Failed to sign in with ${provider}`);
    }
  };

  return (
    <>
      <section className="min-h-screen bg-gray-0 items-center justify-center">
        <Navbar />
        {/* Header Component */}
        <header className="relative h-[300px] flex items-center justify-center text-white overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/HeaderBG.png"
              alt="Header Background"
              fill // Replaces layout="fill"
              style={{ objectFit: "cover" }} // Replaces objectFit="cover"
              quality={100}
              priority
            />
          </div>

          {/* Overlay to darken the background image (optional) */}
          <div className="absolute inset-0 bg-opacity-10"></div>

          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Main Heading */}
            <h1 className="text-5xl font-bold mb-4">
              <span className="text-brand">Sign</span>
              <span className="text-white"> in page</span>
              {/* Changed color to brand color #FF9F0D */}
            </h1>

            {/* Page Route */}
            <p className="text-lg">
              Home <span className="mx-2">{">"}</span>
              <span className="text-brand">sign in</span>
              {/* Changed color to brand */}
            </p>
          </div>
        </header>

        {/* Sign-In Container */}
        <div className="container mx-auto bg-white shadow-lg rounded-lg flex flex-col mt-20 mb-20 p-8 w-full max-w-md border-brand border">
          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Sign In
          </h2>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
              {error}
            </div>
          )}

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <i className="fas fa-envelope text-gray-400"></i>
              </span>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <i className="fas fa-lock text-gray-400"></i>
              </span>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
              />
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 text-brand border-gray-300 rounded focus:ring-brand"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                Remember me?
              </label>
            </div>

            {/* Sign-In Button */}
            <button
              type="submit"
              className="w-full bg-brand text-white py-2 rounded-lg hover:bg-brand-dark transition"
              disabled={!isLoaded}
            >
              Sign In
            </button>
          </form>

          {/* Forgot Password */}
          <p className="text-right text-sm text-gray-600 mt-4">
            <a href="#" className="text-brand hover:underline">
              Forgot password?
            </a>
          </p>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="border-t w-full"></div>
            <span className="px-4 text-gray-500">or</span>
            <div className="border-t w-full"></div>
          </div>

          {/* Social Sign-In */}
          <div className="space-y-4">
            {/* Sign In with Google */}
            <button
              type="button"
              onClick={() => handleOAuthSignIn("oauth_google")}
              className="w-full flex items-center justify-center pr-24 border border-gray-300 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
              disabled={!isLoaded}
            >
              <Image
                src="/icons/Google-logo-png-plants.png"
                alt="Google Logo"
                width={24}
                height={24}
                className="mr-20"
              />
              Sign In with Google
            </button>

            {/* Sign In with Apple */}
            <button
              type="button"
              onClick={() => handleOAuthSignIn("oauth_apple")}
              className="w-full flex items-center justify-center pr-24 border border-gray-300 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
              disabled={!isLoaded}
            >
              <Image
                src="/icons/apple-logo.png"
                alt="Apple Logo"
                width={24}
                height={24}
                className="mr-24"
              />
              Sign In with Apple
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Do not have an account?
            <button
              onClick={() => setShowSignUp(true)}
              className="text-brand hover:underline"
            >
              Sign Up
            </button>
          </p>
        </div>
      </section>
    </>
  );
};

export default SignInPage;
