// TermsAndConditions.tsx

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

const TermsAndConditions = () => {
  return (
    <div>
        {/* Navbar */}
        <Navbar/>
    <div className="max-w-2xl mx-auto mt-8 p-4 bg-[#EEE6E6] mb-10 shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Terms and Conditions of Service</h1>

      <p>
        Welcome to Hindsol Software Private Limited! These Terms and Conditions (&quot;Terms&quot;) govern your use of our IT
        services, including but not limited to software development, web development, mobile application development, IT
        consulting, and any other services provided by Hindsol Software Private Limited (&quot;Hindsol,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
        By accessing or using our services, you agree to be bound by these Terms. If you do not agree with any part of
        these Terms, please do not use our services.
      </p>

      <h2 className="text-xl font-bold mt-4 mb-2">Acceptance of Terms:</h2>
      <p>
        By using our services, you agree to comply with these Terms and any additional terms and conditions that may apply
        to specific services. These Terms constitute a legally binding agreement between you and Hindsol Software Private
        Limited.
      </p>

      <h2 className="text-xl font-bold mt-4 mb-2">Description of Services:</h2>
      <p>
        Hindsol Software Private Limited provides a range of IT services, including software development, web development,
        mobile application development, IT consulting, and related services. The specific details of the services will be
        outlined in the agreement between Hindsol and the client.
      </p>

      <h2 className="text-xl font-bold mt-4 mb-2">User Responsibilities:</h2>
      <p>
        You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for
        maintaining the confidentiality of any login information associated with your account and for all activities that
        occur under your account.
      </p>

      <h2 className="text-xl font-bold mt-4 mb-2">Intellectual Property Rights:</h2>
      <p>
        All content, including but not limited to text, graphics, logos, images, and software, provided through our
        services is the property of Hindsol Software Private Limited and is protected by copyright, trademark, and other
        intellectual property laws.
      </p>

      <h2 className="text-xl font-bold mt-4 mb-2">Payment Terms:</h2>
      <p>
        Payment terms will be outlined in the agreement between Hindsol Software Private Limited and the client. Payment for
        services rendered is due according to the agreed-upon terms.
      </p>

      <h2 className="text-xl font-bold mt-4 mb-2">Confidentiality:</h2>
      <p>
        Hindsol Software Private Limited agrees to maintain the confidentiality of any proprietary or confidential
        information provided by the client. Likewise, the client agrees to keep confidential any proprietary or
        confidential information provided by Hindsol.
      </p>

      <h2 className="text-xl font-bold mt-4 mb-2">Limitation of Liability:</h2>
      <p>
        Hindsol Software Private Limited shall not be liable for any direct, indirect, incidental, special, or
        consequential damages arising out of or in any way connected with the use of our services or the inability to use
        our services.
      </p>

      <h2 className="text-xl font-bold mt-4 mb-2">Indemnification:</h2>
      <p>
        You agree to indemnify, defend, and hold harmless Hindsol Software Private Limited, its officers, directors,
        employees, and agents, from and against any and all claims, damages, obligations, losses, liabilities, costs, or
        debt, and expenses (including but not limited to attorney&apos;s fees) arising from your use of our services.
      </p>

      <h2 className="text-xl font-bold mt-4 mb-2">Governing Law:</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict
        of law provisions.
      </p>

      <h2 className="text-xl font-bold mt-4 mb-2">Changes to Terms:</h2>
      <p>
        Hindsol Software Private Limited reserves the right to modify or revise these Terms at any time. Any changes will
        be effective immediately upon posting the revised Terms on our website. Your continued use of our services after
        any such changes constitutes your acceptance of the revised Terms.
      </p>

      <h2 className="text-xl font-bold mt-4 mb-2">Contact Us:</h2>
      <p>
        If you have any questions about these Terms, please contact us at <a href="mailto:info@hindsol.com" className="text-blue-500">info@hindsol.com</a>.
      </p>

      <p className="mt-4">
        By using our website and services, you acknowledge that you have read, understood, and agree to the terms of these
        Terms and Conditions.
      </p>
    </div>
    {/* Footer */}
    <Footer/>
    </div>
  );
};

export default TermsAndConditions;
