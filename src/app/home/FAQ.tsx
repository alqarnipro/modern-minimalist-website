import Mainbtn from "../components/mainBtn";
import Accordion from "./Accordion";

const faqItems = [
  {
    question: "How does SEO differ from PPC?",
    answer:
      "Common mistakes include keyword stuffing, neglecting mobile optimization, ignoring technical SEO, using duplicate content, not optimizing for local search, and failing to monitor and analyze SEO performance.",
  },
  {
    question: "What is local SEO and who needs it?",
    answer:
      "ocal SEO (Search Engine Optimization) is a specialized branch of SEO that focuses on optimizing a business’s online presence to attract more customers from relevant local searches. This includes optimizing for local search queries on search engines like Google, Bing, and Yahoo, often incorporating Google My Business (GMB) listings, local keywords, citations, and reviews.",
  },
  {
    question: "What are some common SEO mistakes to avoid?",
    answer: `Brick-and-Mortar Businesses: Physical stores, such as restaurants, retail shops, and service providers (plumbers, electricians) that serve local customers can greatly benefit from local SEO.
Service-Based Businesses: Companies that offer services within a specific geographic area (e.g., home repair, landscaping) need local SEO to ensure potential customers can find them.
Healthcare Providers: Doctors, dentists, and other healthcare professionals who want to attract local patients should utilize local SEO strategies.
Franchises: Businesses that operate in multiple locations can leverage local SEO to optimize each franchise location for its specific area.
Events and Venues: Organizations hosting events or managing venues that cater to local audiences should utilize local SEO to drive attendance.`,
  },
  {
    question: "How does SEO differ from PPC?",
    answer:
      "Common mistakes include keyword stuffing, neglecting mobile optimization, ignoring technical SEO, using duplicate content, not optimizing for local search, and failing to monitor and analyze SEO performance.",
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-between ">
      <div className="flex justify-between align-middle mx-auto p-4">
        <h1 className="me-5">
          {" "}
          <span className="uppercase font-bold text-8xl">faq </span>
          <Mainbtn text="Explore More" link="/"></Mainbtn>
          <p className="uppercase text-8xl">section</p>
        </h1>
        <Accordion items={faqItems} />
      </div>
    </div>
  );
};

export default FAQ;
