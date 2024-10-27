import React from 'react';
import { Users, Award, Target, BookOpen } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Security Officer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Michael Chen",
      role: "Lead Security Researcher",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Emily Rodriguez",
      role: "Training Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Ziroday</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading the way in cybersecurity education and services, empowering organizations and individuals to secure their digital future.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Target className="h-12 w-12 text-cyan-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To provide world-class cybersecurity education and services that enable organizations to protect their digital assets.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Award className="h-12 w-12 text-cyan-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To be the global leader in cybersecurity training and consulting, setting industry standards for excellence.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <BookOpen className="h-12 w-12 text-cyan-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Approach</h3>
            <p className="text-gray-600">
              Combining practical experience with theoretical knowledge to deliver comprehensive security solutions.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-cyan-500">5000+</div>
              <div className="text-gray-600">Students Trained</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-500">100+</div>
              <div className="text-gray-600">Corporate Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-500">50+</div>
              <div className="text-gray-600">Expert Instructors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-500">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;