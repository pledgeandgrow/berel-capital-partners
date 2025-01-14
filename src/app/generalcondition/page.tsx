// pages/general-conditions.js
export default function GeneralConditions() {
    return (
      <div className="pt-20">
        {/* Main Content */}
        <main className="container mx-auto py-8 px-4 pt-20">
          <h1 className="text-6xl font-bold text-center mb-6">General Conditions of Sale</h1>
          <p className="text-center text-gray-400 mb-6 ">Last updated: 01/09/2024</p>
  
          {[
            { title: "1. Purpose", content: "These General Terms and Conditions of Sale (GTC) govern the contractual relations between PLEDGE AND GROW and its customers for any order of services. By placing an order, the customer accepts the terms of the GTC." },
            { title: "2. Services Offered", content: "PLEDGE AND GROW offers computer programming services. The descriptions and prices of the services vary depending on the needs of the project. We have a price list and advise you on the right technologies needed for your project." },
            { title: "3. Order", content: "The order is confirmed once the customer has signed the quote and accepted the service conditions. Any subsequent modification must be the subject of a written agreement." },
            { title: "4. Pricing and Payment", content: "The prices of the services are indicated in euros and excluding taxes. Payment is made via the means indicated at the time of the order. Invoices are payable on the date specified, under penalty of penalties." },
            { title: "5. Delivery of Services", content: "The services are provided according to the terms agreed with the client. PLEDGE AND GROW undertakes to respect the agreed deadlines, subject to unforeseen events linked to third parties or causes of force majeure." },
            { title: "6. Right of Withdrawal", content: "In accordance with current legislation, the customer has a period of 14 days to withdraw after signing the contract, unless the execution of the service has begun with his agreement." },
            { title: "7. Responsibility", content: "PLEDGE AND GROW shall not be held liable for any indirect or unforeseen damages resulting from the performance or non-performance of the services." },
            { title: "8. Disputes", content: "Any dispute will be submitted to the jurisdiction of the Paris courts, after an attempt at amicable resolution." },
            { title: "9. Modification of the T&Cs", content: "Pledge and Grow reserves the right to modify these T&Cs at any time. The applicable version is the one in force on the site at the time of use of the services by the Client." },
            { title: "10. Applicable Law and Disputes", content: "These terms and conditions are governed by the laws in force in your country of residence. Any dispute arising from these terms will be submitted to the competent jurisdiction of your region." },
            { title: "11. Contact", content: "If you have any questions or concerns regarding these Terms and Conditions, please contact us at: contact@pledgeandgrow.com." },
          ].map((section, index) => (
            <section key={index} className="mb-8 container px-4">
              <h2 className="text-3xl font-semibold mb-4">{section.title}</h2>
              <hr></hr>
              <p className="text-gray-600 mt-4">{section.content}</p>
            </section>
          ))}
        </main>
  
     
      </div>
    );
  }
  