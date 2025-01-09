import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const RefundPolicy = () => {
  return (
    <div>
        {/* Navbar */}
        <Navbar/>
    <div className="max-w-2xl mx-auto mt-8 p-4 bg-[#EEE6E6] shadow-md rounded-md mb-10">
      <h1 className="text-2xl font-bold mb-4">Refund Policy</h1>

      <p>
        At Hindsol Software Private Limited (&quot;Hindsol,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;),
        we strive to provide high-quality IT services to our clients. This
        Refund Policy outlines our guidelines for refunds related to our
        services. By engaging with our services, you agree to adhere to the
        terms of this policy.
      </p>

      <h2 className="text-xl font-bold mt-4 mb-2">Eligibility for Refund:</h2>
      <p>Refunds may be granted under the following circumstances:</p>
      <ul className="list-disc pl-8">
        <li>
          In the event of service cancellation initiated by Hindsol Software
          Private Limited.
        </li>
        <li>
          If there are material defects or issues with the service provided that
          cannot be resolved by Hindsol.
        </li>
        <li>
          If the client has made an overpayment or duplicate payment for
          services.
        </li>
      </ul>

      <h2 className="text-xl font-bold mt-4 mb-2">Refund Process:</h2>
      <p>
        To request a refund, the client must contact Hindsol Software Private
        Limited within the specified timeframe indicated in the agreement
        between the parties or within a reasonable timeframe of discovering the
        issue.
      </p>
      <ul className="list-disc pl-8">
        <li>
          Refund requests must be submitted in writing and include relevant
          details and documentation supporting the request.
        </li>
        <li>
          Hindsol will review the refund request and may require additional
          information or clarification from the client.
        </li>
        <li>
          Refunds will be processed within a reasonable timeframe, typically
          within 3 working days of approval.
        </li>
      </ul>

      <h2 className="text-xl font-bold mt-4 mb-2">Non-Refundable Items:</h2>
      <p>
        Certain services or fees may not be eligible for a refund, including but
        not limited to:
      </p>
      <ul className="list-disc pl-8">
        <li>Fees for services already rendered or completed.</li>
        <li>Third-party expenses incurred on behalf of the client.</li>
        <li>
          Any expenses or costs explicitly stated as non-refundable in the
          agreement.
        </li>
      </ul>

      <h2 className="text-xl font-bold mt-4 mb-2">Dispute Resolution:</h2>
      <p>
        In the event of a dispute regarding a refund request, both parties agree
        to engage in good faith discussions to resolve the issue. If a
        resolution cannot be reached through negotiation, either party may seek
        legal recourse as outlined in the governing law section of the
        agreement.
      </p>

      <h2 className="text-xl font-bold mt-4 mb-2">Changes to Refund Policy:</h2>
      <p>
        Hindsol Software Private Limited reserves the right to modify or update
        this Refund Policy at any time. Any changes will be effective
        immediately upon posting the revised policy on our website. Your
        continued engagement with our services after any such changes
        constitutes your acceptance of the revised Refund Policy.
      </p>

      <h2 className="text-xl font-bold mt-4 mb-2">Contact Us:</h2>
      <p>
        If you have any questions about this Refund Policy or need assistance
        with a refund request, please contact us at{" "}
        <a href="mailto:info@hindsol.com" className="text-blue-500">
          info@hindsol.com
        </a>
        .
      </p>

      <p className="mt-4">
        By engaging with our services, you acknowledge that you have read,
        understood, and agree to the terms of this Refund Policy.
      </p>
    </div>
    {/* Footer */}
      <Footer/>
    </div>
  );
};

export default RefundPolicy;
