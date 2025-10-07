import React from "react";
import { Link } from "react-router-dom";

const CookiePolicy = () => {
  return (
    <>
    <main className="flex flex-col justify-center items-center text-center flex-1 p-6 md:p-12 lg:p-20 bg-[#08110E] text-white">
        <h2 className="text-4xl md:text-6xl font-bold md:mb-8 mb-4">Cookie Policy</h2>
        <Link
  to="/"
  className="bg-white text-black font-semibold px-6 py-1 rounded-lg hover:bg-gray-100 transition inline-block"
>
  Home
</Link>

    </main>
    <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-20 lg:px-32">
        
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
        Cookie Policy
      </h1>

      <p className="text-gray-700 mb-6">
        At <strong>Rubix It Solution's</strong>, we use cookies and similar tracking technologies to improve your experience on our website, analyze site usage, and personalize content and ads. By using our website, you consent to the use of cookies as described in this policy.
      </p>

      {/* 1. What are cookies */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">1. What Are Cookies?</h2>
        <p className="text-gray-700">
          Cookies are small text files stored on your device by your browser. They help our website remember your preferences, login information, and improve your overall experience.
        </p>
      </section>

      {/* 2. Types of Cookies */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">2. Types of Cookies We Use</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>Essential Cookies:</strong> Required for the basic functionality of the website, such as navigation and secure login.
          </li>
          <li>
            <strong>Performance Cookies:</strong> Collect anonymous information about website usage to improve performance and user experience.
          </li>
          <li>
            <strong>Functional Cookies:</strong> Remember your preferences, settings, and choices across sessions.
          </li>
          <li>
            <strong>Marketing/Advertising Cookies:</strong> Track browsing habits to deliver relevant ads and marketing campaigns.
          </li>
        </ul>
      </section>

      {/* 3. How We Use Cookies */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">3. How We Use Cookies</h2>
        <p className="text-gray-700">
          Cookies help us:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Remember your login and preferences.</li>
          <li>Analyze website traffic and user behavior.</li>
          <li>Provide personalized content and targeted advertising.</li>
          <li>Improve site functionality and performance.</li>
        </ul>
      </section>

      {/* 4. Third-Party Cookies */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">4. Third-Party Cookies</h2>
        <p className="text-gray-700">
          We may allow third-party service providers to place cookies on your device to help us analyze traffic, deliver advertising, or provide other services. These cookies are governed by the respective third-party privacy policies.
        </p>
      </section>

      {/* 5. Managing Cookies */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">5. Managing Cookies</h2>
        <p className="text-gray-700">
          You can control or disable cookies via your browser settings. Note that blocking certain cookies may affect the functionality of our website. For detailed instructions, visit your browser's help section.
        </p>
      </section>

      {/* 6. Changes to this Policy */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">6. Changes to this Policy</h2>
        <p className="text-gray-700">
          We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated revision date. Continued use of our services constitutes acceptance of any changes.
        </p>
      </section>

      {/* 7. Contact Us */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">7. Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions regarding this Cookie Policy, please contact us at{" "}
          <a href="mailto:contact@yourstartup.com" className="text-blue-600 hover:underline">
            contact@yourstartup.com
          </a>.
        </p>
      </section>

      {/* <p className="text-gray-500 text-center mt-12">
        &copy; {new Date().getFullYear()} [Your Startup Name]. All rights reserved.
      </p> */}
    </div>
    </>
  );
};

export default CookiePolicy;
