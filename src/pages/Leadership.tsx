import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const Leadership = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const placeholderImage = "https://via.placeholder.com/400x300?text=No+Image";

  const boardMembers = [
    { name: "Anne Wanjiku Kibugu", position: "Board Member", color: "bg-teal-500", image: "staffpics/Anne Wanjiku Kibugu.jpg" },
    { name: "Beatrice Kibiti", position: "Board Member", color: "bg-orange-500", image: "staffpics/Beatrice kibiti.jpg" },
    { name: "Claude Mwaikasi", position: "Board Member", color: "bg-amber-500", image: "staffpics/Claude.jpg" },
    { name: "CPA Seth M. King'ori", position: "Board Treasurer", color: "bg-purple-500", image: "staffpics/Seth.jpg" },
    { name: "Elvis Otieno OKeyo", position: "Board Member", color: "bg-indigo-500", image: "staffpics/Okeyo.jpg" }
  ];

  const supervisoryCommittee = [
    { name: "Fred Okoth", position: "Committee Member", color: "bg-teal-600", image: "staffpics/Fred Okoth.jpg" },
    { name: "Josiah Mwema Nzuki", position: "Committee Member", color: "bg-teal-600", image: "staffpics/Josiah.jpg" },
    { name: "Ken Lengoiboni", position: "Committee Member", color: "bg-teal-600", image: "staffpics/Ken lengoiboni.jpg" },
    { name: "Solomon Nabiswa Wanyama", position: "Member", color: "bg-teal-600", image: "staffpics/Solomon Nabiswa Wanyama.jpg" }
  ];

  const management = [
    { name: "Martin Ochieng Onyango", position: "Member", color: "bg-orange-600", image: "staffpics/Martin Ochieng Onyango.jpg" },
    { name: "Kerin", position: "Member", color: "bg-orange-600", image: "staffpics/Kerin.jpg" },
    { name: "Michael Abuli Juma", position: "Member", color: "bg-orange-600", image: "staffpics/Michael Abuli Juma.jpg" },
    { name: "Sallo Hukka Wario", position: "Member", color: "bg-orange-600", image: "staffpics/Sallo Hukka Wario.jpg" },
    { name: "Samuel Chege Ngariuri", position: "Member", color: "bg-orange-600", image: "staffpics/Samuel Chege Ngariuri.jpg" }
  ];

  const renderMemberCard = (member: { name: string; position: string; color: string; image: string }) => (
    <Card key={member.name} className="hover-lift">
      <CardContent className="p-0">
        <div className={`${member.color} text-white p-4 rounded-t-lg`}>
          <h3 className="font-bold text-lg">{member.name}</h3>
          <p className="text-sm opacity-90">{member.position}</p>
        </div>
        <div className="h-47 bg-gray-100 flex items-center justify-center">
          <img 
            src={member.image}
            alt={member.name} 
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = placeholderImage }}
            className="w-full h-full object-cover" 
          />
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-helb-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-helb-gold-400">
            Leadership & Governance
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 animate-on-scroll">
            <h2 className="text-3xl font-bold text-helb-green-700 mb-6">
              Leadership & Governance
            </h2>
            <p className="text-gray-600 mb-4"><strong>Organizational Chart</strong></p>
            <p className="text-gray-600 mb-4"><em>Members | Delegates - Directors - Chief Executive - Staff</em></p>
            <div className="mb-6">
              <h3 className="font-semibold text-helb-green-700 mb-2">• Board of Directors</h3>
              <p className="text-gray-600">
                The HELB SACCO Board is elected by and from the membership at the Annual Delegates Conference (ADC) and consists of nine (9) Directors. The following are the current Directors:
              </p>
            </div>
          </div>

          {/* Board of Directors */}
          <div className="mb-16 animate-on-scroll">
            <h2 className="text-3xl font-bold text-helb-green-700 mb-8 text-center">
              Board of Directors
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {boardMembers.map(renderMemberCard)}
            </div>
          </div>

          {/* Supervisory Committee */}
          <div className="mb-16 animate-on-scroll">
            <h2 className="text-3xl font-bold text-helb-green-700 mb-6 text-center">
              Supervisory Committee
            </h2>
            <p className="text-gray-600 mb-8 text-center max-w-4xl mx-auto">
              The Supervisory Committee is elected by the general membership at the Annual Delegates Conference. The supervisory committee consists of members who are primarily responsible for compliance, internal control, and oversight.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {supervisoryCommittee.map(renderMemberCard)}
            </div>
          </div>

          {/* Senior Management */}
          <div className="animate-on-scroll">
            <h2 className="text-3xl font-bold text-helb-green-700 mb-6 text-center">
              Senior Management
            </h2>
            <p className="text-gray-600 mb-8 text-center max-w-4xl mx-auto">
              Working under the overall leadership and strategic direction of the CEO, the HELB SACCO management is responsible for achieving the SACCO's objectives in accordance with strategic plans. The current senior management includes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {management.map(renderMemberCard)}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Leadership;
