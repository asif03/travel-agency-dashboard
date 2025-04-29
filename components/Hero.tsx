import React from "react";
import Header from "./Header";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="bg-hero bg-origin-content bg-cover">
      <section className="wrapper">
        <div className="flex flex-col">
          <Header />
          <article>
            <h1 className="p-72-bold text-dark-100">
              Plan Your Trip with Ease
            </h1>

            <p className="text-dark-400">
              Customize your travel itinerary in minutes—pick your destination,
              set your preferences, and explore with confidence.
            </p>
          </article>

          <Link href="/"></Link>
        </div>
      </section>
    </div>
  );
};
export default Hero;
