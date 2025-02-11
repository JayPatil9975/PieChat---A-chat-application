import Image from 'next/image';
import React from 'react';
import { Button } from "@/components/ui/button"
import Link from 'next/link';

const topics = [
  {
    text: "Python",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    desc: "Let's discuss everything related to Python and Machine Learning.",
    slug: "Python-new"
  },
  {
    text: "JavaScript",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    desc: "Dive into JavaScript for web development, frameworks, and more.",
    slug: "Js-new"
  },
  {
    text: "React",
    img: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
    desc: "Explore React's powerful features for building dynamic UIs.",
    slug: "React-new"
  },
  {
    text: "Node.js",
    img: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
    desc: "Discuss backend development with Node.js and related technologies.",
    slug: "Node-new"
  },
  {
    text: "Tailwind CSS",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    desc: "Share insights on styling with the utility-first Tailwind CSS framework.",
    slug: "CSS-new"
  },
  {
    text: "Next.js",
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    desc: "Talk about server-side rendering and advanced React with Next.js.",
    slug: "NextJs-new"
  },
];

const Forums = () => {
  return (
    <div className="container mx-auto my-28 px-4">
      <h1 className="text-4xl text-center font-serif font-bold mb-10 text-gray-800">
        Discussion Forums
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <div
            key={topic.img}
            className="shadow-lg bg-white rounded-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="relative mb-4" style={{ height: '80px', width: '80px' }}>
              <Image
                src={topic.img}
                alt={topic.text}
                layout="fill"
                objectFit="contain"
                className="mb-4"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2 text-gray-900">
              {topic.text}
            </h2>
            <p className="text-gray-600 mb-4">{topic.desc}</p>
            <Link href={`/forum/${topic.slug}`}>
              <Button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
                Discuss Now
              </Button>
            </Link>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forums;
