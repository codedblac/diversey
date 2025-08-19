
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Award,  Star, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-helb-green-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Who We Are</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Learn about HELB REGULATED Non-WDT Sacco Society Limited and our commitment to serving our members
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="img/helb1.jpg"
                alt="HELB Sacco Team Meeting"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-helb-green-600 pl-6">
                <h2 className="text-2xl font-bold text-helb-green-800 mb-4">Our Story</h2>
              </div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
  <p>
    HELB Savings and Credit Society Ltd was established and registered in March 1997 to provide HELB staff with an avenue for savings and offer loans at low interest rates for the advancement of their economic well-being. Over the years, the Sacco has grown steadily in membership, share capital, deposits, and other savings.
  </p>

  <p>
    The Sacco is registered under the Co-operative Society Act Cap 490 Laws of Kenya and adheres to the cooperatives act, regulations, and principles of good corporate governance in its day-to-day operations.
  </p>

  <p>
    The membership at the time of registration in March 1997 was thirty (30) members. We have grown steadily over the years to a current membership of three hundred (300).
  </p>
</div>

            </div>
          </div>









          
          {/* Our Motto Section */}
          <div className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="border-l-4 border-helb-gold-500 pl-6 text-left inline-block">
                <h2 className="text-2xl font-bold text-helb-green-800 mb-4">Our Motto</h2>
              </div>
              <h3 className="text-4xl font-bold text-helb-green-800 mb-6">
                "Together for Prosperity."
              </h3>
              <img
                src="img/helb5.jpg"
                alt="Team Collaboration"
                className="rounded-lg shadow-xl w-full h-64 object-cover mb-8"
              />
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: Users,
                title: "Member-Owned",
                description: "A cooperative owned and controlled by our members"
              },
              {
                icon: Target,
                title: "Mission-Driven",
                description: "Focused on improving members' financial well-being"
              },
              {
                icon: Award,
                title: "Licensed & Regulated",
                description: "Fully licensed Non Withdrawable deposit-taking SACCO"
              },
              {
                icon: TrendingUp,
                title: "Growing Strong",
                description: "Continuously expanding our services and reach"
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-helb-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-helb-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-helb-green-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Information */}
          <div className="bg-helb-green-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-helb-green-800 mb-6">Why Choose HELB REGULATED Non-WDT Sacco?</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-helb-green-700 mb-3">Our Core Business</h4>
                <p className="text-gray-700 mb-4">
                  Our core business revolves around promoting the socio-economic well-being of our members 
                  through the provision of affordable, quality financial services based on cooperative ideals.
                </p>
                
                <h4 className="text-lg font-semibold text-helb-green-700 mb-3">Our Commitment</h4>
                <p className="text-gray-700">
                  We are committed to maintaining the highest standards of service delivery while ensuring 
                  the security and growth of our members' investments. Our dedicated team works tirelessly 
                  to provide personalized solutions that meet the unique needs of each member.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-helb-green-700 mb-3">Service Excellence</h4>
                <p className="text-gray-700 mb-4">
                  We pride ourselves on delivering exceptional customer service through our network of 
                  branches and digital platforms. Our modern banking solutions ensure that our members 
                  can access their accounts and conduct transactions conveniently and securely.
                </p>
                
                <h4 className="text-lg font-semibold text-helb-green-700 mb-3">Future Vision</h4>
                <p className="text-gray-700">
                  As we continue to grow, we remain focused on innovation and expanding our service 
                  offerings to better serve our members' evolving financial needs while maintaining 
                  our commitment to cooperative principles and values.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
