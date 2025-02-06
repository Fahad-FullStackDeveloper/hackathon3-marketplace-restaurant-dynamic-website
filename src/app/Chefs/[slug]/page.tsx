import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Chef {
  _id: string;
  name: string;
  position: string;
  experience: number;
  specialty: string;
  image?: string; // Optional to avoid errors
  description: string;
  available: boolean;
  slug: string;
}

export default async function ChefPage({ params }: { params: { slug: string } }) {
  const slugQuery = `*[_type == "chef" && slug.current == $slug][0]{
    _id,
    name,
    position,
    experience,
    specialty,
    image,
    description,
    available,
    "slug": slug.current
  }`;

  const chef = await client.fetch<Chef | null>(slugQuery, { slug: params.slug });

  if (!chef) {
    await new Promise((resolve) => setTimeout(resolve, 200)); // Delay for better UX
    return notFound();
  }

  return (
    <main className="min-h-screen text-gray-800 bg-white dark:bg-zinc-950 dark:text-white">
      <article className="px-5 py-12 max-w-4xl mx-auto">
        {/* Chef Image */}
        {chef.image ? (
          <div className="my-6 flex justify-center">
            <Image
              src={urlForImage(chef.image).url()}
              alt={chef.name}
              width={800}
              height={400}
              className="w-full max-w-3xl object-cover rounded-lg shadow-md"
            />
          </div>
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No Image Available
          </p>
        )}

        {/* Chef Name */}
        <h1 className="text-4xl font-bold mb-4 text-center">{chef.name}</h1>

        {/* Chef Position */}
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
          <span className="font-semibold">{`"${chef.position}"`}</span>
        </p>

        {/* Experience & Specialty */}
        <p className="mt-2 text-md text-gray-500 dark:text-gray-400 text-center">
          <span className="font-semibold text-blue-500">{chef.experience}</span> years of experience in 
          <span className="font-semibold text-blue-500">{chef.specialty}</span>
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
  );
}
