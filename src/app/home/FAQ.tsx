import Mainbtn from '../components/mainBtn';
import Accordion from './Accordion';

const faqItems = [
  { question: 'How does SEO differ from PPC?', answer: 'Common mistakes include keyword stuffing, neglecting mobile optimization, ignoring technical SEO, using duplicate content, not optimizing for local search, and failing to monitor and analyze SEO performance.' },
  { question: 'What is local SEO and who needs it?', answer: 'Common mistakes include keyword stuffing, neglecting mobile optimization, ignoring technical SEO, using duplicate content, not optimizing for local search, and failing to monitor and analyze SEO performance.' },
  { question: 'What are some common SEO mistakes to avoid?', answer: 'Common mistakes include keyword stuffing, neglecting mobile optimization, ignoring technical SEO, using duplicate content, not optimizing for local search, and failing to monitor and analyze SEO performance.' },
  { question: 'How does SEO differ from PPC?', answer: 'Common mistakes include keyword stuffing, neglecting mobile optimization, ignoring technical SEO, using duplicate content, not optimizing for local search, and failing to monitor and analyze SEO performance.' },
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-between ">
      <div className="flex justify-between align-middle mx-auto p-4">
              <h1 className="me-5"> <span className='uppercase font-bold text-8xl'>faq </span><Mainbtn text='Explore More' link='/'></Mainbtn>
              <p className='uppercase text-8xl'>section</p></h1>
        <Accordion items={faqItems} />
      </div>
    </div>
  );
}

export default FAQ;
