import Navbar from "@/app/components/Navbar";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Chef {
  name: string;
  position: string;
  experience: number;
  specialty: string;
  image: string;
  description: string;
  available: boolean;
  slug: {
    current: string;
  };
  [Symbol.toStringTag]: string;
}

async function getChef(slug: string): Promise<Chef | null> {
  const slugQuery = `*[_type == "chef" && slug.current == $slug][0]{
    name,
    position,
    experience,
    specialty,
    image,
    description,
    available,
    slug
  }`;

  try {
    const chef = await client.fetch(slugQuery, { slug });
    return chef;
  } catch (error) {
    console.error("Error fetching chef:", error);
    return null;
  }
}

export default async function ChefDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  // Ensure params is resolved before accessing slug
  const slug = await Promise.resolve(params.slug);
  const chef = await getChef(slug);

  if (!chef) {
    notFound();
  }

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
        <div className="absolute inset-0 bg-opacity-10"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-brand">Chef</span>
            <span className="text-white"> Detail</span>
          </h1>
          <p className="text-lg">
            Home <span className="mx-2">{">"}</span>
            Chef {">"}
            <span className="text-brand"> Chef Detail</span>
          </p>
        </div>
      </header>

      <main className="min-h-screen text-gray-800 bg-white dark:bg-zinc-950 dark:text-white">
        <article className="px-5 py-12 max-w-4xl mx-auto">
          {/* Chef Image */}
          {chef.image && (
            <div className="my-6 flex justify-center">
              <Image
                src={urlForImage(chef.image).url()}
                alt={chef.name}
                width={800}
                height={400}
                className="w-full max-w-3xl object-cover rounded-lg shadow-md"
              />
            </div>
          )}
          {/* Chef Name */}
          <h1 className="text-4xl font-bold mb-4 text-center">{chef.name}</h1>

          {/* Chef Position */}
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
            <span className="font-semibold">{`"${chef.position}"`}</span>
          </p>

          {/* Experience & Specialty */}
          <p className="mt-2 text-md text-gray-500 dark:text-gray-400 text-center">
            <span className="font-semibold text-brand">{chef.experience}</span>{" "}
            years of experience in{" "}
            <span className="font-semibold text-brand">{chef.specialty}</span>
          </p>

          {/* Description */}
          <p className="text-lg mb-6 leading-relaxed text-center">
            {chef.description}
          </p>

          {/* Availability Status */}
          <div className="flex justify-center">
            <p
              className={`inline-block px-4 py-2 rounded text-white font-semibold ${
                chef.available ? "bg-green-600" : "bg-red-600"
              }`}
            >
              {chef.available ? "Available" : "Not Available"}
            </p>
          </div>
        </article>
      </main>
    </>
  );
}

// Generate static params for all chef pages at build time
export async function generateStaticParams() {
  const query = `*[_type == "chef"]{ slug { current } }`;
  const chefs = await client.fetch(query);

  return chefs.map((chef: { slug: { current: string } }) => ({
    slug: chef.slug.current,
  }));
}
