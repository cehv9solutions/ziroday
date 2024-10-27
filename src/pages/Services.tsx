import React from 'react';
import { Shield, Server, Cloud, Code, Lock, Database } from 'lucide-react';
import ServiceSlider from '../components/ServiceSlider';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Application Security",
      description: "Comprehensive security assessment and protection for web applications, including vulnerability scanning, penetration testing, and secure coding practices.",
      features: ["OWASP Top 10 Protection", "API Security", "Security Code Review"]
    },
    {
      icon: Server,
      title: "Network Security",
      description: "Advanced network protection solutions including firewall configuration, intrusion detection, and network monitoring.",
      features: ["24/7 Monitoring", "Threat Detection", "Incident Response"]
    },
    {
      icon: Cloud,
      title: "Cloud Security",
      description: "Secure cloud infrastructure implementation and management for AWS, Azure, and Google Cloud platforms.",
      features: ["Cloud Configuration", "Access Management", "Data Protection"]
    },
    {
      icon: Lock,
      title: "DevSecOps",
      description: "Integration of security practices within DevOps processes, ensuring security at every stage of development.",
      features: ["CI/CD Security", "Container Security", "Automated Testing"]
    },
    {
      icon: Shield,
      title: "Security Consulting",
      description: "Expert guidance on security strategy, compliance, and risk management for your organization.",
      features: ["Risk Assessment", "Compliance Guidance", "Security Training"]
    },
    {
      icon: Database,
      title: "Data Security",
      description: "Comprehensive data protection services including encryption, access control, and data privacy compliance.",
      features: ["Encryption Services", "Access Control", "Privacy Compliance"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">Comprehensive cybersecurity solutions for your organization</p>
        </div>

        <ServiceSlider />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <service.icon className="h-12 w-12 text-cyan-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <Shield className="h-4 w-4 text-cyan-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;