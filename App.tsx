import React, { useState } from 'react';
import { FaHome, FaTools, FaGraduationCap, FaEnvelope } from 'react-icons/fa';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
              <img 
                src="/pp.jpg" 
                alt="Harikrishna Pinninti"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4 text-center md:text-left">
              <h1 className="text-4xl font-bold">Harikrishna Pinninti</h1>
              <p className="text-xl">B.Tech Student at MVGRCE</p>
              <p className="text-gray-600">Welcome to my portfolio! I'm passionate about technology and constantly learning new skills.</p>
            </div>
          </div>
        );
      case 'skills':
        return (
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-xl font-semibold">Web Designing</h3>
                <p>Creating responsive and user-friendly web interfaces</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-xl font-semibold">AI Tools</h3>
                <p>Experience with various artificial intelligence tools and applications</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-xl font-semibold">Python</h3>
                <p>Programming and development using Python</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-xl font-semibold">C++</h3>
                <p>Object-oriented programming and algorithm implementation</p>
              </div>
            </div>
          </div>
        );
      case 'education':
        return (
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Education</h2>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">B.Tech</h3>
              <p className="text-lg">MVGR College of Engineering</p>
              <p className="text-gray-600">2nd Year</p>
              <div className="mt-2 flex items-center">
                <span className="font-medium text-gray-700">CGPA:</span>
                <span className="ml-2 text-blue-600 font-semibold">7.63</span>
              </div>
            </div>
          </div>
        );
      case 'contact':
        return (
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Contact</h2>
            <div className="bg-white p-6 rounded-lg shadow">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" rows={4}></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Send Message</button>
              </form>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg">Portfolio</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setActiveSection('home')}
                className={`flex items-center px-4 py-2 rounded-md ${activeSection === 'home' ? 'bg-blue-500 text-white' : 'text-gray-500 hover:bg-gray-100'}`}
              >
                <FaHome className="mr-2" /> Home
              </button>
              <button
                onClick={() => setActiveSection('skills')}
                className={`flex items-center px-4 py-2 rounded-md ${activeSection === 'skills' ? 'bg-blue-500 text-white' : 'text-gray-500 hover:bg-gray-100'}`}
              >
                <FaTools className="mr-2" /> Skills
              </button>
              <button
                onClick={() => setActiveSection('education')}
                className={`flex items-center px-4 py-2 rounded-md ${activeSection === 'education' ? 'bg-blue-500 text-white' : 'text-gray-500 hover:bg-gray-100'}`}
              >
                <FaGraduationCap className="mr-2" /> Education
              </button>
              <button
                onClick={() => setActiveSection('contact')}
                className={`flex items-center px-4 py-2 rounded-md ${activeSection === 'contact' ? 'bg-blue-500 text-white' : 'text-gray-500 hover:bg-gray-100'}`}
              >
                <FaEnvelope className="mr-2" /> Contact
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-6xl mx-auto px-4 py-8">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;