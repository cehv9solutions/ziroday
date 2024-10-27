import React, { useState } from 'react';
import { FileText, Video, Book, Download, BookOpen } from 'lucide-react';
import Glossary from '../components/Glossary';

const Resources = () => {
  const [activeTab, setActiveTab] = useState('resources');

  const resources = {
    articles: [
      {
        title: "Understanding OWASP Top 10",
        description: "A comprehensive guide to web application security risks",
        readTime: "10 min read"
      },
      {
        title: "Cloud Security Best Practices",
        description: "Essential security measures for cloud deployments",
        readTime: "15 min read"
      }
    ],
    videos: [
      {
        title: "Penetration Testing Tutorial",
        description: "Step-by-step guide to ethical hacking",
        duration: "45 mins"
      },
      {
        title: "SOC Analysis Fundamentals",
        description: "Basic concepts of security operations",
        duration: "30 mins"
      }
    ],
    tools: [
      {
        title: "Security Scanner",
        description: "Automated vulnerability assessment tool",
        size: "25MB"
      },
      {
        title: "Encryption Tool",
        description: "File and data encryption utility",
        size: "15MB"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Resources</h1>
          <p className="text-xl text-gray-600">Free learning materials and tools</p>
        </div>

        <div className="mb-8 flex justify-center space-x-4">
          <button
            onClick={() => setActiveTab('resources')}
            className={`px-6 py-2 rounded-lg ${
              activeTab === 'resources'
                ? 'bg-cyan-500 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            Resources
          </button>
          <button
            onClick={() => setActiveTab('glossary')}
            className={`px-6 py-2 rounded-lg ${
              activeTab === 'glossary'
                ? 'bg-cyan-500 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            Glossary
          </button>
        </div>

        {activeTab === 'resources' ? (
          <>
            {/* Articles Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <FileText className="h-6 w-6 text-cyan-500 mr-2" />
                Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resources.articles.map((article, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                    <p className="text-gray-600 mb-4">{article.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">{article.readTime}</span>
                      <button className="text-cyan-500 hover:text-cyan-600">Read More →</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Videos Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Video className="h-6 w-6 text-cyan-500 mr-2" />
                Video Tutorials
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resources.videos.map((video, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
                    <p className="text-gray-600 mb-4">{video.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">{video.duration}</span>
                      <button className="text-cyan-500 hover:text-cyan-600">Watch Now →</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Download className="h-6 w-6 text-cyan-500 mr-2" />
                Free Tools
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resources.tools.map((tool, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
                    <p className="text-gray-600 mb-4">{tool.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">Size: {tool.size}</span>
                      <button className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 transition-colors">
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <BookOpen className="h-6 w-6 text-cyan-500 mr-2" />
              Cybersecurity Glossary
            </h2>
            <Glossary />
          </div>
        )}
      </div>
    </div>
  );
};

export default Resources;