 import new1 from "../../assets/new1.avif"
 import new2 from "../../assets/new2.jpeg"
 import new3 from "../../assets/new3.avif"
 import new4 from "../../assets/new4.avif"
 import { MdCloudDone } from "react-icons/md";
import { SiCyberdefenders } from "react-icons/si";
import { FaUserEdit } from "react-icons/fa";
import { Brain } from 'lucide-react';
 
 
const services = [
  {
    id: 1,
    icon: MdCloudDone,
    title:'Web application development',
    para:'Web Application Development service is the main feature of Rubix IT Solution. Our designers and professional software engineers.',
    image: new1,
    fullPara: "Web Application Development service is the main feature of Rubix IT Solution. Our designers and professional software engineers are dedicated to offer a full cycle application development as per client requirement. We choose most appropriate technologies and platforms to develop flexible and user centric application as per your business needs. We offer Consulting, Development, Testing, Deployment & Maintenance."
  },
  {
    id: 2,
    icon: SiCyberdefenders,
    title:'Mobile app development',
    para:'We create custom, scalable, and user-friendly mobile apps that help businesses engage customers and drive growth on iOS and Android platforms.',
    image: new2,
    fullPara: "Mobile Application plays vital role in any business development. It’s a basic requirement for every business that targets branding in the market since it is a user friendly. Our creative mobile development team will develop customized user friendly mobile applications in all platforms like Android, iOS & Cross platform with latest frameworks as per your business goals & promotions."
  },
  {
    id: 3,
    icon: FaUserEdit,
    title:'Digital Marketing',
    para:'We provide result-driven digital marketing to boost visibility, engagement, and growth through SEO, social media, and targeted campaigns.',
    image: new3,
    fullPara: "We help startups accelerate growth through agile, data-driven digital marketing strategies that build brand visibility, drive targeted leads, engage audiences across search, social, and content platforms, enhance customer retention through personalized campaigns, and continuously optimize performance using real-time analytics, A/B testing, and conversion tracking"

  },
  {
    id: 4,
    icon: Brain,
    title: 'Artificial Inteligence',
    para: 'We deliver AI-powered solutions that help businesses automate processes, gain insights from data, and make smarter decisions to drive growth and innovation.',
    image: new4,
    fullPara: "We provide tech-enabled digital marketing and AI-powered solutions that help businesses grow smarter—combining advanced Search Engine Optimization, targeted Paid Media Management, and strategic Social Media Management with intelligent automation, personalized customer experiences, and data-driven insights to drive scalable engagement, efficiency, and innovation."
  }
]
 export default services;