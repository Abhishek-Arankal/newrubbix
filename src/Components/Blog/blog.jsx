import React from "react";

const articles = [
  {
    id: 1,
    type: "Article",
    date: "September 19, 2025",
    title: "How AI For Startups Open Doors To Faster Growth and Success",
    desc: "AI helps startups scale faster and gain a competitive edge by automating processes, improving operations, enhancing customer experience, and driving innovation. This post covers the key benefits, challenges, and applications of AI in startups.",
    image: "https://hcltech.imgix.net/sites/default/files/trends-insights/banner/2025-09/700x357%20%281%29.webp?auto=compress&fit=crop&ixlib=php-3.3.1",
    url: "https://www.bacancytechnology.com/blog/ai-for-startups"
  },
  {
    id: 2,
    type: "Article",
    date: "April 24, 2023",
    title: "How Businesses Are Using Artificial Intelligence",
    desc: "Businesses are using AI to boost efficiency, save time, and cut costs. A Forbes Advisor survey of 600 business owners highlights AI’s impact on cybersecurity, fraud management, content creation, and customer support, including popular chatbots",
    image: "https://thumbor.forbes.com/thumbor/fit-in/1290x/https://www.forbes.com/advisor/wp-content/uploads/2023/04/ai_business_survey_-_article_image.jpg",
    url: "https://www.forbes.com/advisor/business/software/ai-in-business/"
  },
//   {
//     id: 3,
//     type: "Article",
//     date: "September 19, 2025",
//     title: "How AI For Startups Open Doors To Faster Growth and Success",
//     desc: "AI helps startups scale faster and gain a competitive edge by automating processes, improving operations, enhancing customer experience, and driving innovation. This post covers the key benefits, challenges, and applications of AI in startups.",
//     image: "https://hcltech.imgix.net/sites/default/files/trends-insights/banner/2025-09/700x357%20%281%29.webp?auto=compress&fit=crop&ixlib=php-3.3.1",
//     url: "https://www.bacancytechnology.com/blog/ai-for-startups"
//   },
//   {
//     id: 4,
//     type: "Article",
//     date: "September 19, 2025",
//     title: "How AI For Startups Open Doors To Faster Growth and Success",
//     desc: "AI helps startups scale faster and gain a competitive edge by automating processes, improving operations, enhancing customer experience, and driving innovation. This post covers the key benefits, challenges, and applications of AI in startups.",
//     image: "https://hcltech.imgix.net/sites/default/files/trends-insights/banner/2025-09/700x357%20%281%29.webp?auto=compress&fit=crop&ixlib=php-3.3.1",
//     url: "https://www.bacancytechnology.com/blog/ai-for-startups"
//   }
];

const events = [
  {
    id: 1,
    type: "Event",
    date: "October 9–9 | San Francisco, United States",
    title: "The Innodata GenAI Summit",
    url: "https://www.bestaievents.com/events/the-innodata-genai-summit"
  },
  {
    id: 2,
    type: "Event",
    date: "November 18–18, 2025 | Online",
    title: "Tech & AI Live",
    url: "https://www.bestaievents.com/events/tech-ai-live"
  },
];

const BlogSection = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 md:px-12 lg:px-20">
  <div className="max-w-7xl mx-auto">
    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
        Blogs & Events
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Explore latest articles and upcoming events.
      </p>
    </div>

    {/* Main Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/*articles */}
      {articles.slice(0, 4).map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-56 object-cover"
          />
          <div className="p-6">
            <p className="text-sm text-gray-500 mb-2">
              {item.type} | {item.date}
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-700 mb-4">{item.desc}</p>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 font-medium hover:underline inline-flex items-center"
            >
              Read More <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      ))}

      {/* Events */}
      <div className="space-y-8">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-purple-50 rounded-2xl p-6 hover:bg-purple-100 transition"
          >
            <p className="text-sm text-gray-500 mb-2">{event.type}</p>
            <p className="text-sm text-gray-600 mb-2">{event.date}</p>
            <h4 className="text-lg font-semibold text-purple-700 mb-3">
              {event.title}
            </h4>
            <a
              href={event.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 font-semibold hover:underline inline-flex items-center"
            >
              Register now <span className="ml-2">→</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

  );
};

export default BlogSection;
