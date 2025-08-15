import { useState, ReactNode } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Faq {
  question: string;
  answer: ReactNode;
}

const faqs: Faq[] = [
  {
    question: 'How do I become a member of Helb Sacco?',
    answer: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Fill in a membership application form.</li>
        <li>Fill nominee form and next of kin form.</li>
        <li>Pay registration fee (KES 1,500 individual / KES 5,000 corporate).</li>
        <li>Pay minimum share capital of KES 1,000.</li>
        <li>Attach passport photo, copy of ID, and KRA PIN certificate.</li>
        <li>Approval by the Central Management Committee (CMC).</li>
      </ul>
    ),
  },
  {
    question: 'What is the difference between share capital, member deposits and saving?',
    answer: (
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Share capital:</strong> Ownership in the Sacco. Non-withdrawable but transferable upon exit.</li>
        <li><strong>Member deposits:</strong> Monthly contributions used to determine loan eligibility. Earns interest and is refundable.</li>
        <li><strong>Savings:</strong> Additional funds deposited voluntarily for investment or security.</li>
      </ul>
    ),
  },
  {
    question: 'Is share capital refundable?',
    answer: 'No. It is non-refundable but may be transferred or sold to another Sacco member upon exit.',
  },
  {
    question: 'How long does it take a new member to qualify for a loan?',
    answer: 'At least 3 months of consistent saving, plus meeting the requirements of the specific loan product.',
  },
  {
    question: 'How do I make my monthly share contribution and saving?',
    answer: 'Via bank standing order, direct debits, personal cheques, M-Pesa (Paybill 522522, Account: 1104723948), or employer check-off.',
  },
  {
    question: 'Will I continue being a member if I change my employer?',
    answer: 'Yes. You can continue your membership and contribute monthly while servicing loans.',
  },
  {
    question: 'How long do you take to process a loan?',
    answer: 'Short-term loans: 1 day. Long-term loans: up to 3 weeks.',
  },
  {
    question: 'Do I need security to get Sacco loans?',
    answer: 'Yes. Your deposits act as primary security. You’ll also need up to 3 guarantors depending on the loan size.',
  },
  {
    question: 'Can I take more than one loan?',
    answer: 'Yes, provided you demonstrate the ability to repay.',
  },
  {
    question: 'Can one clear a loan in full before repayment is over?',
    answer: 'Yes. Early clearance is allowed without penalties.',
  },
  {
    question: 'What forms the basis of loan qualification?',
    answer: 'You qualify for up to 4× your deposit amount. Deductions should not exceed 2/3 of your salary. Retired members can access 3/4 of their deposits.',
  },
  {
    question: 'Who is a nominee?',
    answer: (
      <ul className="list-disc pl-5 space-y-1">
        <li>The person designated to receive your Sacco benefits in the event of your death.</li>
        <li>Nominee details are provided upon registration.</li>
        <li>You can update nominee information anytime.</li>
      </ul>
    ),
  },
  {
    question: 'Can I self-guarantee my loans?',
    answer: 'Yes, if your savings are higher than your current loans and are uncommitted.',
  },
  {
    question: 'How long does it take for a member to be refunded deposits after resignation?',
    answer: 'Up to 2 months. This allows time to clear any pending obligations.',
  },
  {
    question: 'Can I change my next of kin/nominee?',
    answer: 'Yes. Fill in the next of kin or nominee update form to make changes.',
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      {/* Navigation Bar */}
      <Header />

      {/* Hero Section */}
      <section className="bg-helb-green-800 text-yellow-300 py-16 text-center">
        <h1 className="text-4xl font-bold mb-3">FREQUENTLY ASKED QUESTIONS</h1>
        <p className="text-lg">Everything you need to know before joining or borrowing</p>
      </section>

      {/* FAQ Accordion Section */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg shadow-sm transition-all duration-200">
              <button
                className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-50"
                onClick={() => toggle(index)}
              >
                <span className="font-medium text-gray-800">
                  {index + 1}. {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-helb-green-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-5 pb-4 text-gray-700 text-sm">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Faqs;
