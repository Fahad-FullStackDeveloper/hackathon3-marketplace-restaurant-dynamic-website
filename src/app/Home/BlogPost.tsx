import Image from "next/image";
import React from "react";
import { FaThumbsUp, FaComment, FaShareAlt } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    image: "/images/blog_img4.png",
    date: "Jan 30, 2025",
    title: "Mastering Next.js for Web Development",
    link: "/blog/mastering-nextjs",
  },
  {
    id: 2,
    image: "/images/blog_img2.png",
    date: "Jan 25, 2025",
    title: "Top Tailwind CSS Tips for Responsive UI",
    link: "/blog/tailwind-tips",
  },
  {
    id: 3,
    image: "/images/blog_img1.png",
    date: "Jan 20, 2025",
    title: "Best Practices for Building Scalable Web Apps",
    link: "/blog/scalable-web-apps",
  },
];

export default function BlogPost() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl text-brand mb-4 mt-14 flex justify-center font-greatvibes">Blog Post</h2>
        <h3 className="text-3xl font-bold text-center mb-8">
          <span className="text-brand">La</span>test News & Blog
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className=" rounded-lg shadow-lg overflow-hidden border border-gray-200"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={600}
                height={500}
                className="w-full h-52 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-brand">{blog.date}</p>
                <h3 className="text-xl font-semibold mt-2">{blog.title}</h3>
                <div className="flex justify-between items-center mt-4">
                  <a
                    href={blog.link}
                    className="text-blue-600 font-medium hover:underline"
                  >
                    Learn More →
                  </a>
                  <div className="flex space-x-3 text-gray-500">
                    <FaThumbsUp className="cursor-pointer hover:text-green-500" />
                    <FaComment className="cursor-pointer hover:text-blue-500" />
                    <FaShareAlt className="cursor-pointer hover:text-brand" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
