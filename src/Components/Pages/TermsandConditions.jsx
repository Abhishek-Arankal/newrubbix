import React from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <>
    <main className="flex flex-col justify-center items-center text-center flex-1 p-6 md:p-12 lg:p-20 bg-[#08110E] text-white">
        {/* <p className="text-sm md:text-base mb-4">Privacy Statement</p> */}
        <h2 className="text-3xl md:text-6xl font-bold md:mb-8 mb-4">Terms and Conditions</h2>
        <Link
  to="/"
  className="bg-white text-black font-semibold px-6 py-1 rounded-lg hover:bg-gray-100 transition inline-block"
>
  Home
</Link>

    </main>
    <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-20 lg:px-32">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
        Terms and Conditions
      </h1>

      <p className="text-gray-700 mb-6">
        Welcome to <strong>Rubix It Solutions's</strong>. By accessing or using our website and services, you agree to comply with and be bound by the following terms and conditions. These terms apply to all users of our website, applications, and other services offered.
      </p>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">1. Acceptance of Terms</h2>
        <p className="text-gray-700">
          By using our services, you acknowledge that you have read, understood, and agree to these Terms and Conditions. If you do not agree, you must not use our services.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">2. User Accounts</h2>
        <p className="text-gray-700">
          Users may be required to create accounts to access certain services. You agree to provide accurate, current, and complete information and maintain the confidentiality of your login credentials. You are responsible for all activities performed under your account.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">3. Use of Services</h2>
        <p className="text-gray-700">
          You agree to use our services only for lawful purposes. Prohibited activities include, but are not limited to, unauthorized access, distributing malware, violating intellectual property rights, or interfering with other users’ access.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">4. Payment Terms</h2>
        <p className="text-gray-700">
          If you purchase any paid services, you agree to provide valid payment information. Payments are processed securely, and subscription fees are billed according to the chosen plan. All fees are non-refundable unless explicitly stated.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">5. Intellectual Property</h2>
        <p className="text-gray-700">
          All content, logos, trademarks, software, and data on our platform are the property of <strong>Rubix It solutions's</strong> or its licensors. You may not copy, reproduce, modify, or distribute any materials without written permission.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">6. Privacy Policy</h2>
        <p className="text-gray-700">
          Your use of our services is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information. By using our services, you consent to our data practices.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">7. Termination</h2>
        <p className="text-gray-700">
          We reserve the right to suspend or terminate your account at our discretion for violations of these Terms, unlawful activity, or inactivity. Upon termination, you must stop using our services and delete any materials obtained from the platform.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">8. Limitation of Liability</h2>
        <p className="text-gray-700">
          To the maximum extent permitted by law, <strong>Rubix It solution's</strong> will not be liable for any indirect, incidental, special, or consequential damages, including loss of profits or data, arising from your use of our services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">9. Governing Law</h2>
        <p className="text-gray-700">
          These Terms shall be governed by and construed in accordance with the laws of India/Telengana. Any disputes arising under these terms will be subject to the exclusive jurisdiction of the courts located in [City/State].
        </p>
      </section>

    
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">10. Changes to Terms</h2>
        <p className="text-gray-700">
          We may update these Terms periodically. The updated Terms will be posted on this page, and continued use of our services constitutes acceptance of the new Terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">11. Contact Us</h2>
        <p className="text-gray-700">
          For questions about these Terms or your account, please contact us at{" "}
          <a href="mailto:contact@yourstartup.com" className="text-blue-600 hover:underline">
            rubixit@gmail.com
          </a>.
        </p>
      </section>
    </div>
    </>
  );
};

export default TermsAndConditions;
