import React from 'react';
import { FileCheck, Briefcase, BookOpen, Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Other = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Heading Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight mb-4">Accelerate Your Career Journey</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Powerful tools to help you land your dream job, from resume optimization to interview preparation.
          </p>
          <div className="mt-8">
            <Link to="/get-started" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-800 bg-white hover:bg-gray-100 transition-colors">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Feature Highlight */}
      <div className="mt-12 pt-8 border-t border-gray-800">
        <h3 className="text-2xl font-bold text-center mb-8">Our Career Acceleration Tools</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <FileCheck size={32} className="text-blue-400 mb-4" />
            <h4 className="text-lg font-semibold">Resume ATS Checker</h4>
            <p className="text-gray-400">Optimize your resume for Applicant Tracking Systems.</p>
            <Link to="/resume-checker" className="text-blue-400 mt-4 inline-flex items-center">Learn more<ArrowRight className="ml-2 h-4 w-4" /></Link>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <Briefcase size={32} className="text-green-400 mb-4" />
            <h4 className="text-lg font-semibold">Application Tracker</h4>
            <p className="text-gray-400">Track your job applications all in one place.</p>
            <Link to="/application-tracker" className="text-green-400 mt-4 inline-flex items-center">Learn more<ArrowRight className="ml-2 h-4 w-4" /></Link>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <BookOpen size={32} className="text-purple-400 mb-4" />
            <h4 className="text-lg font-semibold">Interview Prep</h4>
            <p className="text-gray-400">Access technical and behavioral prep materials.</p>
            <Link to="/interview-prep" className="text-purple-400 mt-4 inline-flex items-center">Learn more<ArrowRight className="ml-2 h-4 w-4" /></Link>
          </div>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="mt-12 pt-8 border-t border-gray-800">
        <div className="bg-gray-800 p-8 rounded-lg text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold">Stay Updated</h3>
          <p className="text-gray-400">Subscribe for latest job updates and career advice.</p>
          <form className="mt-4 max-w-md mx-auto flex">
            <input type="email" placeholder="Enter email" className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-l" />
            <button type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-r">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 mt-8 mb-4">
        &copy; {new Date().getFullYear()} JobPortal. All rights reserved.
      </div>
    </footer>
  );
};

export default Other;
