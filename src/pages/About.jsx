import React from "react";

const About = () => {

  return (
    <div name="about" className="text-red-500 px-5 sm:px-10 md:px-15 lg:px-15 py-10 bg-gray-400">
      <h2 className="text-3xl font-bold border-l-6 uppercase">
        &nbsp;About AthletHub
      </h2>
      <br />
      <br />
      <div className="w-4/5">
        <h2 className="text-2xl font-semibold">Welcome to AthletHub!</h2>
        <br />
        <p className="text-white text-lg">
          At AthletHub, we're passionate about connecting athletes of all levels
          with the resources they need to achieve their best performance.
          Whether you're a professional athlete, a weekend warrior, or just
          starting your fitness journey, AthletHub is your ultimate destination
          for all things sports and fitness.
        </p>
        <br />

        <h2 className="text-2xl font-semibold">Our Mission</h2>
        <br />
        <p className="text-white text-lg">
          Our mission is simple: To provide athletes with the best tools,
          information, and community to help them succeed. We believe that every
          athlete deserves access to high-quality training resources, expert
          advice, and a supportive community. That's why we created AthletHub –
          a platform that brings everything you need under one roof.
        </p>
        <br />

        <h2 className="text-2xl font-semibold">What We Offer</h2>
        <br />
        <p className="text-white text-lg">
          <li>Training Programs: Access a wide range of training programs designed by top coaches and trainers.</li>
          <li>Expert Advice: Get tips and guidance from experienced athletes and fitness professionals.</li> 
          <li>Community Support: Connect with like-minded athletes, share your journey, and find motivation.</li> 
          <li>Latest News: Stay updated with the latest trends, news, and events in the world of sports and fitness. </li>
          <li>Gear Reviews: Discover reviews and recommendations for the best sports gear and equipment.</li>
        </p>
      </div>
      <br />

      <h2 className="text-2xl font-semibold">Get in Touch</h2>
      <p className="text-white text-lg">We'd love to hear from you! If you have any questions, suggestions, or just want to say hello, feel free to reach out to us at xxxxx-xxxxx.</p>
    </div>
  );
};

export default About;
