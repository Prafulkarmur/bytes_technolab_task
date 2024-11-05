// pages/index.js
import React from "react";

export default function Home() {
  return (
    <div className="bg-background min-h-screen font-sans">
      {/* Header */}
      <header className="bg-primary text-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Figma Design</h1>
          <nav className="flex space-x-4">
            <a href="#about" className="hover:text-accent">About</a>
            <a href="#services" className="hover:text-accent">Services</a>
            <a href="#contact" className="hover:text-accent">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-secondary text-white p-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to Our Page</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          {`Discover our services and see how we can help you achieve your goals.`}
        </p>
        <button className="bg-accent text-white px-6 py-3 rounded-full font-semibold hover:bg-primary">
          Get Started
        </button>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto p-8 grid gap-8 grid-cols-1 md:grid-cols-3">
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h3 className="text-xl font-bold text-darkText mb-2">Service One</h3>
          <p className="text-gray-700">High-quality service tailored to your needs.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h3 className="text-xl font-bold text-darkText mb-2">Service Two</h3>
          <p className="text-gray-700">Expert solutions at affordable prices.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h3 className="text-xl font-bold text-darkText mb-2">Service Three</h3>
          <p className="text-gray-700">Professional team to guide you all the way.</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-primary text-white p-16 text-center">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-lg max-w-3xl mx-auto">
          {`We are a team of dedicated professionals with years of experience helping clients reach their full potential. `}
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto p-8">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg mx-auto">
          <h3 className="text-2xl font-bold text-darkText mb-4 text-center">Contact Us</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded h-32"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-accent text-white p-3 rounded font-semibold hover:bg-primary"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-darkText text-white text-center p-4">
        <p>&copy; 2024 My Figma Design. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
