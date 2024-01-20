"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Swetha",
    avatar: "S",
    title: "Student Developer",
    description: "Pentaverse is my coding haven. it's an ideal space to experiment, learn, and bring coding projects to life. Pentaverse has become my go-to for exploring the dynamic world of web development!",
  },
  {
    name: "Jake Paul",
    avatar: "R",
    title: "Content Creator",
    description: "The dynamic conversations, image generation, and video production tools have revolutionized how I bring ideas to life. It's the heartbeat of my content creation journey, providing limitless possibilities.",
  },
  {
    name: "Taylor Swift",
    avatar: "A",
    title: "Musician",
    description: "Pentaverse is a melody-maker's paradise. The harmonious music creation feature unleashes my musical ideas, and amplifies the joy of collaboration. It's where my tunes come to life!",
  },
  {
    name: "Andy Budd",
    avatar: "M",
    title: "UI/UX Designer",
    description: "Pentaverse is my creative sanctuary! Seamless integration, device compatibility, and CRM make it a game-changer. Joining PentaVerse has transformed the way I bring ideas to life.",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}
