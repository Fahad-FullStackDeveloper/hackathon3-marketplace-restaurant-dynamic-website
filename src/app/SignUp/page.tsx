'use client';

import React from "react";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Image from "next/image";

const SignUpPage = () => {
  const { isLoaded, signUp } = useSignUp();
  const router = useRouter();
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState("");
  const [error, setError] = React.useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded || !signUp) return;

    try {
      await signUp.create({
        firstName: formData.firstName,
        lastName: formData.lastName,
        emailAddress: formData.email,
        password: formData.password,
      });

      // Start the email verification process
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setPendingVerification(true);
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
      setError(err.message || "Something went wrong");
    }
  };

  const verifyEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded || !signUp) return;

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });
      if (completeSignUp.status === "complete") {
        // Sign up successful
        router.push("/"); // Redirect to home page after verification
      } else {
        // Sign up not complete yet
        console.log(JSON.stringify(completeSignUp, null, 2));
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
      setError(err.message || "Verification failed");
    }
  };

  const handleOAuthSignUp = async (strategy: 'oauth_google' | 'oauth_apple') => {
    if (!isLoaded) return;

    try {
      await signUp.authenticateWithRedirect({
        strategy,
        redirectUrl: '/sso-callback',
        redirectUrlComplete: '/'
      });
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
      setError(err.message || "OAuth sign up failed");
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
              <span className="text-white"> up page</span>
              {/* Changed color to brand color #FF9F0D */}
            </h1>

            {/* Page Route */}
            <p className="text-lg">
              Home <span className="mx-2">{">"}</span>
              <span className="text-brand">sign up</span>
              {/* Changed color to brand */}
            </p>
          </div>
        </header>

        {/* Sign-Up Container */}
        <div className="container mx-auto mt-20 mb-20 bg-base-text-base-contrast shadow-lg rounded-lg p-8 w-full max-w-md border-brand border">
          {error && (
            <div className="mb-4 p-2 text-red-500 bg-red-100 rounded">
              {error}
            </div>
          )}

          {!pendingVerification ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* First Name Input */}
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <i className="fas fa-user text-gray-400"></i>
                </span>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                  required
                />
              </div>

              {/* Last Name Input */}
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <i className="fas fa-user text-gray-400"></i>
                </span>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <i className="fas fa-envelope text-gray-400"></i>
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <i className="fas fa-lock text-gray-400"></i>
                </span>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                  required
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

              <button
                type="submit"
                className="w-full bg-brand text-base-contrast py-2 rounded-lg hover:bg-[#e88e0a] transition"
              >
                Sign Up
              </button>
            </form>
          ) : (
            <form onSubmit={verifyEmail} className="space-y-4">
              <h2 className="text-xl font-semibold text-center">
                Verify your email
              </h2>
              <p className="text-center text-gray-600">
                We've sent a verification code to your email
              </p>
              <input
                type="text"
                placeholder="Enter verification code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                required
              />
              <button
                type="submit"
                className="w-full bg-brand text-base-contrast py-2 rounded-lg hover:bg-[#e88e0a] transition"
              >
                Verify Email
              </button>
            </form>
          )}

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="border-t w-full"></div>
            <span className="px-4 text-gray-500">or</span>
            <div className="border-t w-full"></div>
          </div>

          {/* Social Sign-Up */}
          <div className="space-y-4">
            {/* Sign Up with Google */}
            <button
              type="button"
              onClick={() => handleOAuthSignUp('oauth_google')}
              className="w-full flex items-center justify-center pr-24 border border-gray-300 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
            >
              <Image
                src="/icons/Google-logo-png-plants.png"
                alt="Google Logo"
                width={24}
                height={24}
                className="mr-20"
              />
              Sign Up with Google
            </button>

            {/* Sign Up with Apple */}
            <button
              type="button"
              onClick={() => handleOAuthSignUp('oauth_apple')}
              className="w-full flex items-center justify-center pr-24 border border-gray-300 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
            >
              <Image
                src="/icons/apple-logo.png"
                alt="Apple Logo"
                width={24}
                height={24}
                className="mr-24"
              />
              Sign Up with Apple
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUpPage;
