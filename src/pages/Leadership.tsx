import { useEffect, useState } from "react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const placeholderImage = "https://via.placeholder.com/400x300?text=No+Image";

// -----------------------
// Member Detail Modal
// -----------------------
const MemberDetailModal = ({ member, onClose }) => {
  if (!member) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full relative overflow-hidden">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row p-6 gap-6">
          <img
            src={member.image}
            alt={member.name}
            onError={(e) => (e.currentTarget.src = placeholderImage)}
            className="w-40 h-40 object-cover rounded-full border-4 border-helb-green-700 mx-auto md:mx-0"
          />
          <div>
            <h2 className="text-2xl font-bold text-helb-green-700">
              {member.name}
            </h2>
            <p className="text-gray-600 mb-4">{member.position}</p>
            <p className="text-sm text-gray-700 whitespace-pre-line">
              {member.bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// -----------------------
// Main Component
// -----------------------
const Leadership = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // -----------------------
  // Data
  // -----------------------
  const boardMembers = [
    {
      name: "Josiah Muema Nzuki",
      position: "Board Chairman – HELB SACCO",
      image: "staffpics/Josiah.jpg",
      bio: `Josiah holds a master’s degree in leadership (MAL) from Pan Africa Christian University (PACU), a post graduate diploma in corporate governance from KCA University and a Bachelor of Commerce degree (Accounting) from University of Nairobi (UON)
Currently retired he has experience and practical skills in Public financial management, audit, corporate leadership and governance, and risk management, having worked in the public sector for a period spanning over thirty (30) years. 
He is passionate and a strong advocate of Good corporate governance, Leadership and Ethics.
`
    },
    {
      name: "Solomon Nabiswa Wanyama",
      position: "Board Vice Chairman – Chair Education Committee",
      image: "staffpics/Solomon Nabiswa Wanyama.jpg",
      bio: `Solomon holds a Bachelors degree in Education from University of Nairobi (UON)
Currently working with Higher Education Loans Board, he has wide experience in Higher Education financing, Credit Management and Administration spanning over 18 years in the public sector service. He is passionate about training, people empowerment and governance issues.
`
    },
    {
      name: "Beatrice Kibiti",
      position: "Hon Secretary – Member Credit Committee",
      image: "staffpics/Beatrice kibiti.jpg",
      bio: `Beatrice holds a Bachelor’s degree in Human Resources from Kenya Methodist University. Currently working with Higher education loans board, she has wide experience in office administration, credit management and administration.
She is passionate and a strong advocate of effective communication, teamwork, good corporate governance, financial inclusion, efficient service delivery, proper structures, transparency, accountability, trustworthiness and promotion of responsible lending practices.`
    },
    {
      name: "CPA Seth M. King’ori",
      position: "Treasurer – Member of Finance Committee",
      image: "staffpics/Seth.jpg",
      bio: `CPA Seth M. King’ori is a seasoned Accountant with extensive experience in financial management and accounting. He holds a Master of Business Administration - Strategic Management from the University of Nairobi and Bachelor of Commerce - Accounting option from Multimedia University of Kenya. In addition, he is a Certified Public Accountant of Kenya (CPA-K) and a member of Institute of Certified Public Accountant of Kenya in good standing.`
    },
    {
      name: "Anne Wanjiku Kibugu",
      position: "Board Director – Chairperson Credit Committee",
      image: "staffpics/Anne Wanjiku Kibugu.jpg",
      bio: `Anne holds a Master of Science in Distributed Computing Technology from the University of Nairobi, a Bachelor of Science in Information Technology and a Diploma in Information Technology from Jomo Kenyatta University of Agriculture and Technology. She also holds a Diploma in Legal Studies from the Institute of Commercial Management and is a certified Data Scientist by the International Association of Business Analytics Certifications (IABAC).
Currently working with Higher Education Loans Board, she has experience in credit administration, strategic planning, monitoring and evaluation, quality assurance, and institutional collaborations & partnerships spanning over 15 years.`
    },
    {
      name: "Claude Mwaikwasi",
      position: "Chairman Finance Committee",
      image: "staffpics/Claude.jpg",
      bio: `Claude holds a bachelor of Science in Statistics from University of Nairobi and a masters degree (MBA) in strategic management from the same University. Currently working with Higher Education Loans Board, he has wide experience in Credit Management and Administration spanning over 25 years. He is a strong advocate of accountability, transparency and personal financial management and wellness.`
    },
    {
      name: "Sallo Hukka Wario",
      position: "Secretary Finance Committee – Member Education Committee",
      image: "staffpics/Sallo Hukka Wario.jpg",
      bio: `She has a Bachelor of Accounting Degree from the University of Namibia and a part 1 ACCA holder.
Currently working at HELB in the Debt Management Division, she has wide experience in financial and debt management. 
She is passionate about effective communication and inclusivity.`
    },
    {
      name: "Fredrick Okoth",
      position: "Secretary Credit Committee",
      image: "staffpics/Fred Okoth.jpg",
      bio: `Fredrick Holds a Bachelor of Science in Information Science from Moi University and is currently pursuing Master’s degree of Science in Data Analytics at KCA University. He has also completed several professional courses in Data Science, Quantitative Analysis, Business Intelligence, and Research.
Currently working with HELB, he has been instrumental in developing data analytics models and reporting techniques that have enhanced decision-making across the organization. . His expertise spans tools such as Power BI, Tableau, and Python, and he has contributed significantly to high-impact projects, including the Customer Relationship Management System (CRM) and the Unified Communication System (UCS).
He is passionate on transforming data into actionable insights and blends technical skill with strategic thinking, always aiming to bridge the gap between data and impact.
`
    }
  ];

  const supervisoryCommittee = [
    {
      name: "CPA John Nyakiti",
      position: "Chairperson – Supervisory Committee",
      image: "staffpics/nyatiki.jpg",
      bio: `John holds of Masters in Business Administration and CPA (K). Member of ICPAK in good standing. 
  Currently working with Higher Education Loans board (HELB), he is Results-driven professional with over 20 years expertise in the Higher education student financing, Credit Management, strategic planning & execution, and project management.
  He is passionate in driving innovation by fostering a culture of creativity and continuous improvement, leveraging data-driven insights to facilitate sound decision making and creation of a forward-thinking organization.
`
    },
    {
      name: "Kennedy S. Lengoiboni",
      position: "Secretary – Supervisory Committee",
      image: "staffpics/Ken lengoiboni.jpg",
      bio: `Kennedy holds both a Bachelor's and a Master’s degree in economics. He has further enhanced his professional expertise through management and leadership training at the Eastern and Southern Africa Management Institute (ESAMI) and the Kenya School of Government (KSG).
Currently serving in the Debt Management Department at the Higher Education Loans Board (HELB), he has over 19 years of experience in credit management, loan recovery, and customer experience. His career reflects a deep commitment to financial discipline and operational efficiency.
He passionate and a firm advocate of accountability, transparency, and integrity principles that continue to guide his oversight role within the HELB SACCO.
`
    },
    {
      name: "CPA Kerin Lidoroh",
      position: "Member – Supervisory Committee",
      image: "staffpics/Kerin.jpg",
      bio: `Kerin holds a Master’s Degree in Business Administration (Finance) from the University of Nairobi and a Bachelor’s degree in Commerce (Accounting Option) from the Catholic University of Eastern Africa.
Currently with Higher Education loans Board (HELB) as a Deputy Director Financial Accounting, she has over 20 years’ experience in the field of Finance and Accountancy in both private and public sectors of the Kenyan economy. She is a Certified Public Accountant of Kenya [CPAK] and a member of the Institute of Certified Public Accountants, Kenya (ICPAK) in good standing. She is also a full member of the Association of Women Accountants of Kenya (AWAK) in good standing. 
She has attended various leadership courses such as the Senior Management Course (SMC) and Strategic Leadership Development Programme (SLDP) all from the Kenya School of Management. 
She is passionate and a strong advocate in financial transferency and accountability. 

`
    }
  ];

  const management = [
    {
      name: "Elvis Otieno Okeyo",
      position: "Chief Executive Officer (CEO)",
      image: "staffpics/Okeyo.jpg",
      bio: `Elvis Otieno Okeyo is a seasoned Accountant with extensive experience in financial management and accounting. He holds a Master of Business Administration - Finance from the University of Nairobi and Bachelor of Commerce - Finance option from The Technical University of Kenya. In addition, he is a Certified Public Accountant of Kenya (CPA-K) and a member of Institute of Certified Public Accountant of Kenya in good standing.`
    },
    {
      name: "Samuel Chege Ngariuri",
      position: "Credit and Relations Officer",
      image: "staffpics/Samuel Chege Ngariuri.jpg",
      bio: `Samuel is a Bachelor in Co-operative Management graduate from Co-operative University with over five years of SACCO operations experience. He is passionate about financial inclusion and community empowerment through cooperative finance.`
    },
    {
      name: "Martin Ochieng Onyango",
      position: "Assistant Accountant",
      image: "staffpics/Martin Ochieng Onyango.jpg",
      bio: `Martin Ochieng is a dedicated finance professional with a Bachelor of Commerce degree in Finance from Taita Taveta University and a CPA II holder. He currently serves as an Assistant Accountant at HELB SACCO, where he has accumulated over three years of hands-on experience in financial reporting, reconciliation, and budgeting. Martin is known for his attention to detail, strong analytical skills, and commitment to maintaining accurate financial records. His goal is to continue advancing in the accounting field while contributing to the financial growth and stability of the organization.`
    }
  ];

  // -----------------------
  // Card Renderer
  // -----------------------
  const renderMemberCard = (member) => (
    <Card
      key={member.name}
      className="transition-all hover:shadow-lg cursor-pointer"
    >
      <CardContent className="p-0 flex flex-col h-full">
        <img
          src={member.image}
          alt={member.name}
          onError={(e) => (e.currentTarget.src = placeholderImage)}
          className="w-full h-48 object-contain"
        />
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="font-bold text-lg">{member.name}</h3>
          <p className="text-sm text-gray-600 mb-4">{member.position}</p>
          <button
            onClick={() => setSelectedMember(member)}
            className="mt-auto bg-helb-green-700 hover:bg-helb-green-800 text-white px-3 py-1 rounded text-sm"
          >
            View Details
          </button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
  title="Leadership & Governance - HELBSacco"
  description="Meet the leadership and governance team behind HELBSacco. Experienced professionals committed to transparency, accountability, and strategic growth."
  keywords="helbsacco leadership, sacco board of directors, governance, sacco management, helb sacco kenya leaders, supervisory committee"
  url="https://helbsacco.co.ke/leadership"
  image="https://helbsacco.co.ke/logo.png"
/>
      <Header />

      {/* Hero */}
      <section className="bg-helb-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-helb-gold-400">
            Leadership & Governance
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 container mx-auto px-4 space-y-16">
        {/* Board */}
        <div>
          <h2 className="text-3xl font-bold text-helb-green-700 mb-8 text-center">
            Management Board of Directors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {boardMembers.map(renderMemberCard)}
          </div>
        </div>

        {/* Supervisory */}
        {/* <div>
          <h2 className="text-3xl font-bold text-helb-green-700 mb-8 text-center">
            Supervisory Board Directors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {supervisoryCommittee.map(renderMemberCard)}
          </div>
        </div> */}

        {/* Management */}
        {/* <div>
          <h2 className="text-3xl font-bold text-helb-green-700 mb-8 text-center">
            Management
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {management.map(renderMemberCard)}
          </div>
        </div> */}
      </section>

      <Footer />

      {/* Modal */}
      <MemberDetailModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </div>
  );
};

export default Leadership;
