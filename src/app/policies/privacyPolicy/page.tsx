// PrivacyPolicy.tsx

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div>
        {/* Navbar */}
        <Navbar/>
    <div className="max-w-2xl mx-auto mt-8 p-4 bg-[#EEE6E6] mb-10 shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>

      <p>
        At Hindsol Software Private Limited (&quot;Hindsol,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), we are committed to protecting your
        privacy. This Privacy Policy describes how we collect, use, and disclose personal information when you use our
        website and services. By accessing or using our website and services, you agree to the terms of this Privacy
        Policy.
      </p>

      <h2 className="text-xl font-bold mt-4 mb-2">Information We Collect:</h2>
      <p>We may collect personal information from you when you use our website or services. This may include:</p>
      <ul className="list-disc pl-8">
        <li>Contact information such as name, email address, phone number, and mailing address.</li>
        <li>Information you provide when you communicate with us or request information about our services.</li>
        <li>Information about your device and how you interact with our website, such as IP address, browser type, and pages visited.</li>
      </ul>

      <h2 className="text-xl font-bold mt-4 mb-2">How We Use Your Information:</h2>
      <p>We may use the personal information we collect for the following purposes:</p>
      <ul className="list-disc pl-8">
        <li>To provide and improve our services.</li>
        <li>To communicate with you about our services, promotions, and updates.</li>
        <li>To respond to your inquiries and provide customer support.</li>
        <li>To analyze how users interact with our website and services and improve their functionality.</li>
      </ul>

      <h2 className="text-xl font-bold mt-4 mb-2">Sharing of Information:</h2>
      <p>We may share your personal information with third parties for the following purposes:</p>
      <ul className="list-disc pl-8">
        <li>With service providers who assist us in providing our services, such as hosting providers, payment processors, and marketing agencies.</li>
        <li>With our business partners and affiliates for marketing and promotional purposes, with your consent.</li>
        <li>In response to legal process or government requests, or to protect our rights or property.</li>
      </ul>

      <h2 className="text-xl font-bold mt-4 mb-2">Data Security:</h2>
      <p>
        We take reasonable measures to protect the personal information we collect from unauthorized access, disclosure,
        alteration, or destruction. However, no method of transmission over the Internet or electronic storage is 100%
        secure, and we cannot guarantee absolute security.
      </p>

      <h2 className="text-xl font-bold mt-4 mb-2">Your Choices:</h2>
      <p>
        You may choose not to provide certain personal information, but this may limit your ability to use certain
        features of our website and services. You may also opt-out of receiving promotional emails from us by following
        the instructions in the email.
      </p>

      <h2 className="text-xl font-bold mt-4 mb-2">Children&apos;s Privacy:</h2>
      <p>
        Our website and services are not intended for children under the age of 13. We do not knowingly collect personal
        information from children under the age of 13. If you are a parent or guardian and believe that your child has
        provided us with personal information, please contact us to have it removed.
      </p>

      <h2 className="text-xl font-bold mt-4 mb-2">Changes to this Privacy Policy:</h2>
      <p>
        We reserve the right to modify or update this Privacy Policy at any time. Any changes will be effective
        immediately upon posting the revised Privacy Policy on our website. Your continued use of our website and services
        after any such changes constitutes your acceptance of the revised Privacy Policy.
      </p>

      <h2 className="text-xl font-bold mt-4 mb-2">Contact Us:</h2>
      <p>
        If you have any questions about this Privacy Policy or our privacy practices, please contact us at{' '}
        <span className="text-blue-500">[contact email/phone number]</span>.
      </p>

      <p className="mt-4">
        By using our website and services, you acknowledge that you have read, understood, and agree to the terms of this
        Privacy Policy.
      </p>
    </div>
    {/* Footer */}
    <Footer/>
    </div>
  );
};

export default PrivacyPolicy;
