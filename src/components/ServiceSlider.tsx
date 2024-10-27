import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const serviceSlides = [
  {
    title: "Web Application Security",
    description: "Protect your web applications from modern threats",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1000",
    features: ["OWASP Top 10 Protection", "API Security Testing", "Secure Code Review"]
  },
  {
    title: "Network Security",
    description: "Comprehensive network protection and monitoring",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000",
    features: ["24/7 Monitoring", "Intrusion Detection", "Threat Response"]
  },
  {
    title: "Cloud Security",
    description: "Secure your cloud infrastructure and deployments",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1000",
    features: ["Cloud Config Review", "Access Management", "Data Protection"]
  }
];

const ServiceSlider = () => {
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
      {serviceSlides.map((slide, index) => (
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
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;