import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const courseSlides = [
  {
    title: "VAPT Certification",
    description: "Master the art of ethical hacking and penetration testing",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
    features: ["Hands-on Labs", "Real-world Projects", "Industry Certification"]
  },
  {
    title: "SOC Analyst Training",
    description: "Become an expert in security operations and threat detection",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=1000",
    features: ["SIEM Tools", "Incident Response", "Threat Hunting"]
  },
  {
    title: "Cloud Security Expert",
    description: "Master cloud security across major platforms",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
    features: ["AWS Security", "Azure Security", "GCP Security"]
  }
];

const CourseSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      className="w-full h-[500px] mb-12"
    >
      {courseSlides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-white text-center p-8 max-w-2xl">
                <h3 className="text-3xl font-bold mb-4">{slide.title}</h3>
                <p className="text-xl mb-6">{slide.description}</p>
                <ul className="space-y-2">
                  {slide.features.map((feature, idx) => (
                    <li key={idx} className="text-lg">• {feature}</li>
                  ))}
                </ul>
                <button className="mt-6 bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CourseSlider;