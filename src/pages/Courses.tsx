import React from 'react';
import { BookOpen, Clock, Award, Users } from 'lucide-react';
import CourseSlider from '../components/CourseSlider';

const Courses = () => {
  const courses = [
    {
      title: "VAPT Certification",
      description: "Master vulnerability assessment and penetration testing techniques",
      duration: "12 weeks",
      level: "Advanced",
      students: "1000+",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      topics: ["Web App Testing", "Network Testing", "Mobile App Testing"]
    },
    {
      title: "SOC Analyst Training",
      description: "Learn security operations center management and threat detection",
      duration: "8 weeks",
      level: "Intermediate",
      students: "800+",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=800",
      topics: ["SIEM Tools", "Incident Response", "Threat Hunting"]
    },
    {
      title: "Forensics Expert",
      description: "Digital forensics and incident response certification",
      duration: "10 weeks",
      level: "Advanced",
      students: "500+",
      image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&q=80&w=800",
      topics: ["Digital Evidence", "Memory Analysis", "Network Forensics"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Courses</h1>
          <p className="text-xl text-gray-600">Advanced cybersecurity training programs</p>
        </div>

        <CourseSlider />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-700">
                    <Clock className="h-4 w-4 text-cyan-500 mr-2" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Award className="h-4 w-4 text-cyan-500 mr-2" />
                    <span>{course.level}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Users className="h-4 w-4 text-cyan-500 mr-2" />
                    <span>{course.students} Students</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-2">Key Topics:</h4>
                  <ul className="space-y-1">
                    {course.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <BookOpen className="h-4 w-4 text-cyan-500 mr-2" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="mt-6 w-full bg-cyan-500 text-white py-2 rounded-lg hover:bg-cyan-600 transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;