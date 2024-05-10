// components/AboutSection.jsx
import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800">About Elimu</h2>
          <p className="text-lg text-gray-600 mt-2">
            Elimu is an innovative online education system designed to empower
            learners of all ages with access to quality education.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800">Mission</h3>
            <p className="mt-2 text-gray-600">
              Our mission is to democratize education by making it accessible
              and affordable to everyone, regardless of their location or
              financial status.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800">Benefits</h3>
            <ul className="list-disc pl-5 mt-2 text-gray-600">
              <li>Flexible learning schedules</li>
              <li>Expert tutors available 24/7</li>
              <li>Interactive learning materials</li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800">Community</h3>
            <p className="mt-2 text-gray-600">
              Join a vibrant community of learners and educators dedicated to
              lifelong learning and personal growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
