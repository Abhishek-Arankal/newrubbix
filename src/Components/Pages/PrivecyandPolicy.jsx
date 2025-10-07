// import React from "react";
// import { Link } from "react-router-dom";

// const PrivacyPolicy = () => {
//   return (
//     <>
//     <main className="flex flex-col justify-center items-center text-center flex-1 p-6 md:p-12 lg:p-20 bg-[#08110E] text-white">
//         {/* <p className="text-sm md:text-base mb-4">Privacy Statement</p> */}
//         <h2 className="text-4xl md:text-6xl font-bold md:mb-8 mb-4">Privacy Policy</h2>
//         <Link
//   to="/"
//   className="bg-white text-black font-semibold px-6 py-1 rounded-lg hover:bg-gray-100 transition inline-block"
// >
//   Home
// </Link>

//     </main>
//     <section className="flex flex-col justify-center items-center px-6 md:px-16 lg:px-32 py-12 bg-[#F9FAFB] text-gray-800">
//       {/* Title */}
//       <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 text-[#0B0B45]">
//         Privacy Policy
//       </h1>
//       <p className="text-gray-500 text-sm md:text-base mb-10 text-center">
//         for Rubix It Solution's
//       </p>

//       {/* Content */}
//       <div className="max-w-3xl w-full text-justify space-y-8 leading-relaxed">
//         <div>
//           <h2 className="font-semibold text-lg text-[#0B0B45] mb-2">
//             What information do we collect?
//           </h2>
//           <p>
//             When you interact with us, we may collect your name, address, email
//             address(es), telephone number(s), and, where appropriate, date of
//             birth.
//           </p>
//         </div>

//         <div>
//           <h2 className="font-semibold text-lg text-[#0B0B45] mb-2">
//             How do we collect information?
//           </h2>
//           <p>
//             We may collect information about you whenever you interact with us.
//             For example, when you contact us regarding our activities, register
//             as a supporter, send or receive information, or sign a petition, you
//             specifically and knowingly provide us with your personal
//             information. We may also receive information about you from third
//             parties – but only if you have given them permission to share your
//             information.
//           </p>
//         </div>

//         <div>
//           <h2 className="font-semibold text-lg text-[#0B0B45] mb-2">
//             Confidentiality
//           </h2>
//           <p>
//             We will not be responsible for the privacy of data collected by
//             websites not owned or managed by us, including those linked through
//             our website.
//           </p>
//         </div>

//         <div>
//           <h2 className="font-semibold text-lg text-[#0B0B45] mb-2">
//             Making a complaint
//           </h2>
//           <p>
//             If you are not satisfied with our response, please contact us at{" "}
//             <a
//               href="mailto:info@beingmash.com"
//               className="text-orange-500 hover:underline"
//             >
//               rubixit@gmail.com
//             </a>
//             .
//             with the details explaining your concerns. We will review your complaint and investigate if the right procedures have been followed and respond back to you as appropriate. We aim to complete this investigation within 15 working days of receiving your complaint, however, in some cases it may take longer. If you are still unsatisfied with the response, you may contact us.
//           </p>
//         </div>
//       </div>
//     </section>
//     </>
//   );
// };

// export default PrivacyPolicy;
import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicyPage = () => {
  const sections = [
    {
      title: "1. Information We Collect",
      content: `We may collect Personal Information such as name, email address, phone number, billing information, and other details you provide voluntarily. 
      Non-Personal Information such as IP address, browser type, device information, and website usage data may also be collected automatically. 
      Additionally, we may collect User-Generated Content such as feedback, messages, or comments you submit.`
    },
    {
      title: "2. How We Use Information",
      content: `Your information is used to provide, maintain, and improve our services, communicate updates or promotions (if you opt-in), analyze usage trends, and comply with legal obligations.`
    },
    {
      title: "3. How We Share Information",
      content: `We do not sell your personal data. We may share your information with trusted service providers for hosting, analytics, payment processing, or customer support. 
      We may also disclose information to comply with legal obligations or during business transitions such as mergers or acquisitions.`
    },
    {
      title: "4. Cookies and Tracking Technologies",
      content: `We use cookies and similar technologies to enhance website functionality, analyze traffic, and improve user experience. 
      You can manage or disable cookies via your browser settings; however, some features may not function properly without them.`
    },
    {
      title: "5. Data Security",
      content: `We implement appropriate technical and organizational measures to protect your data from unauthorized access, disclosure, or misuse. 
      While we strive to protect your information, no system can guarantee absolute security.`
    },
    {
      title: "6. Data Retention",
      content: `We retain personal data only as long as necessary to provide our services, comply with legal obligations, or enforce agreements. 
      Users may request deletion of their personal data by contacting us.`
    },
    {
      title: "7. User Rights",
      content: `Depending on your jurisdiction, you may have the right to access, correct, or delete your personal information, and opt-out of marketing communications. 
      Requests can be submitted to `,
      email: "rubixit@gmail.com"
    },
    {
      title: "8. Third-Party Links",
      content: `Our website may contain links to external websites. We are not responsible for the privacy practices or content of third-party websites. We encourage users to review their privacy policies.`
    },
    {
      title: "9. Children’s Privacy",
      content: `Our services are intended for individuals aged 13 and above (or the applicable local age). We do not knowingly collect personal information from children under this age.`
    },
    {
      title: "10. Making a Complaint",
      content: `If you are not satisfied with our response, please contact us at `,
      email: "rubixit@gmail.com",
      extra: ` with the details explaining your concerns. We aim to complete investigations within 15 working days.`
    },
    {
      title: "11. Changes to This Policy",
      content: `We may update this Privacy Policy periodically. The Effective Date will be revised, and updates will be posted on this page. We encourage users to review this policy regularly.`
    },
    {
      title: "12. Contact Information",
      content: `For questions or concerns, contact us at `,
      email: "rubixit@gmail.com",
      extra: ` or visit us at Kukatpally, Pragathi Nagar Road Telangana, 500018 India.`
    },
  ];

  return (
    <>
      <main className="flex flex-col justify-center items-center text-center flex-1 p-6 md:p-12 lg:p-20 bg-[#08110E] text-white">
        <h2 className="text-4xl md:text-6xl font-bold md:mb-8 mb-4">
          Privacy Policy
        </h2>
        <Link
          to="/"
          className="bg-white text-black font-semibold px-6 py-2 rounded-lg hover:bg-gray-100 transition inline-block"
        >
          Home
        </Link>
      </main>

      {/* Policy Section */}
      <section className="flex flex-col justify-center items-center px-6 md:px-16 lg:px-32 py-12 bg-[#F9FAFB] text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 text-[#0B0B45]">
          Privacy Policy
        </h1>
        <p className="text-gray-500 text-sm md:text-base mb-10 text-center">
          for Rubix IT Solution
        </p>

        <div className="max-w-3xl w-full text-justify space-y-8 leading-relaxed">
          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="font-semibold text-lg text-[#0B0B45] mb-2">
                {section.title}
              </h2>
              <p>
                {section.content}
                {section.email && (
                  <a
                    href={`mailto:${section.email}`}
                    className="text-orange-500 hover:underline"
                  >
                    {section.email}
                  </a>
                )}
                {section.extra && <> {section.extra}</>}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;

