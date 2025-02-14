import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import Navbar from "../components/Navbar";
import React from "react";

interface Chef {
  name: string;
  slug: string;
  imageUrl?: string; // URL
}

export default async function MyChefs(): Promise<React.ReactElement> {
  try {
    const query = `*[_type == "chef"] {
      name,
      "slug": slug.current,
      "imageUrl": image.asset->url
    }`;

    const chefs: Chef[] = await client.fetch(query);

    return (
      <>
        <Navbar />
        <header className="relative h-[300px] flex items-center justify-center text-white overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/HeaderBG.png"
              alt="Header Background"
              fill // Replaces layout="fill"
              style={{ objectFit: "cover" }}
              quality={100}
              priority
            />
          </div>
          <div className="absolute inset-0 bg-opacity-10 bg-black"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-5xl font-bold mb-4">
              <span className="text-brand">Our</span>
              <span className="text-white"> Chefs</span>
            </h1>
            <p className="text-lg">
              Home <span className="mx-2">{">"}</span>
              <span className="text-brand">Chefs</span>
            </p>
          </div>
        </header>

        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl text-brand mb-4 font-greatvibes">
                Meet Our Chefs
              </h2>
              <h3 className="text-5xl font-semibold text-gray-800">
                Culinary <span className="text-brand">Masters</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {chefs.map((chef) => (
                <Link href={`/Chefs/${chef.slug}`} key={chef.slug}>
                  <div className="flex flex-col items-center bg-white p-2 rounded-lg shadow-lg hover:transition duration-300 transform hover:scale-95">
                    <Image
                      src={chef.imageUrl || "/placeholder.svg"}
                      alt={chef.name}
                      width={300}
                      height={300}
                      className="rounded-lg mb-4"
                    />
                    <h4 className="text-lg font-semibold text-gray-800">
                      {chef.name}
                    </h4>
                    <p className="text-sm text-gray-600">Chef</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  } catch (error) {
    console.error('Error fetching chefs:', error);
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl text-gray-800">Unable to load chefs at this time.</h2>
        </div>
      </>
    );
  }
}
