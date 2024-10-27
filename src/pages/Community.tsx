import React from 'react';
import { MessageSquare, Users, Calendar, Send } from 'lucide-react';

const Community = () => {
  const discussions = [
    {
      title: "Best practices for API security",
      author: "John Doe",
      replies: 15,
      lastActive: "2 hours ago"
    },
    {
      title: "Cloud security challenges",
      author: "Jane Smith",
      replies: 23,
      lastActive: "1 hour ago"
    }
  ];

  const events = [
    {
      title: "Cybersecurity Workshop",
      date: "March 25, 2024",
      time: "2:00 PM EST",
      type: "Online"
    },
    {
      title: "Ethical Hacking Webinar",
      date: "April 1, 2024",
      time: "1:00 PM EST",
      type: "Online"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Community</h1>
          <p className="text-xl text-gray-600">Join our cybersecurity community</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Discussion Forum */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold flex items-center">
                  <MessageSquare className="h-6 w-6 text-cyan-500 mr-2" />
                  Recent Discussions
                </h2>
                <button className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 transition-colors">
                  New Topic
                </button>
              </div>

              <div className="space-y-4">
                {discussions.map((discussion, index) => (
                  <div key={index} className="border-b pb-4">
                    <h3 className="text-xl font-semibold mb-2">{discussion.title}</h3>
                    <div className="flex justify-between text-gray-600">
                      <span>By {discussion.author}</span>
                      <span>{discussion.replies} replies</span>
                      <span>{discussion.lastActive}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Section */}
            <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Users className="h-6 w-6 text-cyan-500 mr-2" />
                Live Chat
              </h2>
              <div className="bg-gray-50 h-64 rounded-lg mb-4 p-4">
                {/* Chat messages would go here */}
                <div className="text-center text-gray-500 mt-20">
                  Join the conversation!
                </div>
              </div>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <button className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-colors">
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Events Section */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Calendar className="h-6 w-6 text-cyan-500 mr-2" />
                Upcoming Events
              </h2>
              <div className="space-y-4">
                {events.map((event, index) => (
                  <div key={index} className="border-b pb-4">
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <div className="space-y-2 text-gray-600">
                      <p>Date: {event.date}</p>
                      <p>Time: {event.time}</p>
                      <p>Type: {event.type}</p>
                    </div>
                    <button className="mt-2 text-cyan-500 hover:text-cyan-600">
                      Register →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;