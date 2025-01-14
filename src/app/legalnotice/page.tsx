// pages/legal-notices.js
export default function LegalNotices() {
    return (
      <div className="pt-20">
       
  
        {/* Main Content */}
        <main className="container mx-auto py-8 px-4 pt-20">
          <h1 className="text-6xl font-bold text-center mb-6">Legal Notices</h1>
          <p className="text-center text-gray-400 mb-6">Last updated: 01/09/2024</p>
  
          <section className="mb-8 px-6">
            <h2 className="text-3xl font-semibold mb-4">1. Identification of the publisher and host of the site:</h2>
            <hr />
            <div className="mb-6 mt-4">
              <h3 className="text-2xl font-medium mb-2">Publisher and Owner:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Company name: PLEDGE AND GROW</li>
                <li>Head office: 48bis Rue Alfred Nobel – Champs-sur-Marne – France</li>
                <li>SIREN: 935175662</li>
                <li>NAF code: 62.012 – Computer programming</li>
                <li>Phone: +33 7 53 59 58 40</li>
                <li>Website: pledgeandgrow.com</li>
                <li>Email: contact@pledgeandgrow.com</li>
              </ul>
            </div>
            <div className="">
              <h3 className="text-2xl font-medium mb-2">Hosts:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Vercel Inc</li>
                <li>440 N Barranca Ave #4133</li>
                <li>Covina, CA 91723</li>
                <li>Email: privacy@vercel.com</li>
                <li>
                  For more information, visit:{" "}
                  <a href="https://vercel.com" className="text-green-400 underline">
                    Vercel.com
                  </a>
                </li>
              </ul>
            </div>
          </section>
  
          {[
            {
              title: "2. General conditions of use:",
              content:
                "Use of the PLEDGE AND GROW website implies full and complete acceptance of the general conditions of use described in our policy. Please consult this page for more information.",
            },
            {
              title: "3. Personal data:",
              content:
                "In accordance with the amended 'Data Protection' law of 6 January 1978 and European Regulation 2016/679 (GDPR), you have the right to access, rectify, limit, oppose, erase, and transfer data concerning you. Please consult our cookie policy or the personal data page. The data collected is intended for the exclusive use of PLEDGE AND GROW or any subcontractors, and will not be communicated to third parties.",
            },
            {
              title: "4. Intellectual property:",
              content:
                "The contents of this site (logos, texts, images, etc.) are protected by copyright and any unauthorized use of the site or any of the elements it contains is considered to constitute an infringement and will be prosecuted.",
            },
            {
              title: "5. Limitations of liability:",
              content:
                "PLEDGE AND GROW cannot be held responsible for any direct or indirect damage caused to the user's equipment when accessing the pledgeandgrow.com website. Similarly, PLEDGE AND GROW cannot be held responsible for indirect damages (such as loss of market or loss of opportunity) resulting from the use of the pledgeandgrow.com site.",
            },
            {
              title: "6. Applicable law and attribution of jurisdiction:",
              content:
                "Any dispute relating to the use of the pledgeandgrow.com website is subject to French law. In the event of a dispute, the French courts will have sole jurisdiction.",
            },
          ].map((section, index) => (
            <section key={index} className="mb-8 px-6">
              <h2 className="text-3xl font-semibold mb-4">{section.title}</h2>
              <hr />
              <p className="text-gray-600 mt-4">{section.content}</p>
            </section>
          ))}
        </main>
  
        
      </div>
    );
  }
  