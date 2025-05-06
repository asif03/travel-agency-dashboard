import React from "react";
import Header from "./Header";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="bg-hero bg-origin-content bg-cover ">
      <section className="wrapper">
        <div className="flex flex-col min-h-[680px]">
          <Header />
          <article className="flex flex-col gap-4 min-h-[cal(100%-100px)]">
            <h1>Plan Your Trip with Ease</h1>

            <p className="subtile">
              Customize your travel itinerary in minutes—pick your destination,
              set your preferences, and explore with confidence.
            </p>
            <Link
              href="/"
              className="text-lg text-white bg-blue-300 rounded-lg px-6 py-3 max-w-[200px] text-center"
            >
              Get Started
            </Link>
          </article>
        </div>
      </section>
    </div>
  );
};
export default Hero;
