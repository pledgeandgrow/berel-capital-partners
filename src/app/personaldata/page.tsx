// pages/personal-data.js
export default function PersonalData() {
    return (
      <div className="pt-20">
        
  
        {/* Main Content */}
        <main className="container mx-auto py-8 px-6 pt-20">
          <h1 className="text-6xl font-bold text-center mb-6">Personal Data</h1>
          <p className="text-center text-gray-400 mb-6">Last updated: 01/09/2024</p>
          <p className="text-center text-gray-600 mb-8 px-10">
            We are committed to protecting the privacy and security of our customers' and website visitors' personal
            information. This Privacy Policy explains how we collect, use, disclose, and protect your personal
            information, in accordance with French law and the GDPR.
          </p>
  
          {[
            {
              title: "1. Collection of Personal Information:",
              content:
                "We collect personal information when you use our IT consulting and marketing services, visit our website, or communicate with us. The types of information we may collect include your name, email address, phone number, professional information, and any other information you choose to provide to us.",
            },
            {
              title: "2. Use of Information:",
              content: (
                <ul className="list-disc list-inside space-y-2">
                  <li>Provide, manage, and improve our services.</li>
                  <li>Communicate with you about our services or respond to your requests.</li>
                  <li>Comply with our legal and regulatory obligations.</li>
                  <li>Analyze the use of our services to improve the user experience.</li>
                </ul>
              ),
            },
            {
              title: "3. Sharing of Information:",
              content: (
                <ul className="list-disc list-inside space-y-2">
                  <li>With your consent.</li>
                  <li>To provide a service you have requested.</li>
                  <li>When required by law or to respond to legal proceedings.</li>
                  <li>
                    To protect the rights, property, or safety of Pledge and Grow, our customers, or the public.
                  </li>
                </ul>
              ),
            },
            {
              title: "4. Data Security:",
              content:
                "We take technical and organizational security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.",
            },
            {
              title: "5. Your Rights:",
              content:
                "In accordance with the GDPR, you have the right to access, rectify, transfer, restrict processing, or delete your personal information. To exercise these rights, please contact us at contact@pledgeandgrow.com.",
            },
            {
              title: "6. Cookies and Similar Technologies:",
              content:
                "We use cookies and similar technologies to improve your experience on our website. You can adjust your cookie preferences in your browser settings. For more information, please see our cookie policy.",
            },
            {
              title: "7. Changes to the Privacy Policy:",
              content:
                "We may update our Privacy Policy to reflect changes in our information practices. If we make significant changes, we will notify you by email or through our website prior to the changes becoming effective.",
            },
            {
              title: "8. Contact Us:",
              content:
                "If you have any questions or concerns regarding this policy or your personal information, please contact PLEDGE AND GROW at contact@pledgeandgrow.com.",
            },
          ].map((section, index) => (
            <section key={index} className="mb-8 px-6">
              <h2 className="text-3xl font-semibold mb-4">{section.title}</h2>
              <hr />
              {typeof section.content === "string" ? (
                <p className="text-gray-600 mt-4">{section.content}</p>
              ) : (
                section.content
              )}
            </section>
          ))}
        </main>
  
      
      </div>
    );
  }
  