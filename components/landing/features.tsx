import React from "react";
import Image from "next/image";

const FeatureSection = () => {
  const features = [
    {
      title: "Are those head phones?",
      subtitle: "Listen to your favorite audio books",
      image:
        "https://images.pexels.com/photos/3466163/pexels-photo-3466163.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Multitask",
      subtitle: "Learn with us while you do your thing, it's self paced",
      image:
        "https://images.pexels.com/photos/4620862/pexels-photo-4620862.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Online Classes",
      subtitle: "Study anywhere, anytime",
      image:
        "https://media.istockphoto.com/id/1300822206/photo/african-american-female-student-studying-from-home-and-taking-notes-from-professor.jpg?b=1&s=612x612&w=0&k=20&c=N7gfopYHXxCy3Jh03nI_08b4Mu22t5SD3sBFwMRY06g=",
    },
  ];

  return (
    <section id="features" style={{ height: "450px" }}>
      <h1 className="flex font-bold text-2xl px-2 pt-4 justify-center align-middle mt-7">
        Features
      </h1>
      <div className="max-w-7xl mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="rounded-xl relative">
            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
              <p className="font-bold text-2xl px-2 pt-4">{feature.title}</p>
              <p className="px-2">{feature.subtitle}</p>
            </div>
            <Image
              className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
              src={feature.image}
              alt={feature.title}
              width={600} // Specify the width of the image
              height={500} // Specify the height of the image
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
