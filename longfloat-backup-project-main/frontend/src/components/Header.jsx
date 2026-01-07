import React from 'react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

export default function Header({ scrolled, isWrityPage = false }) {
  const navigate = useNavigate();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200/50' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
        <div 
          className="logo cursor-pointer flex items-center gap-3" 
          onClick={() => navigate('/')}
        >
          {/* Logo container */}
<div className="flex items-center justify-center">
            <img
              src="/Logo.svg"
              alt="Longfloat AI Logo"
              className="w-8 h-8 object-contain"
            />
          </div>
          <span className="text-2xl font-light tracking-tight text-gray-900">Longfloat AI</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {!isWrityPage && (
            <>
              <a
                href="#products"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300 hover:-translate-y-0.5 inline-block"
              >
                Products
              </a>
            </>
          )}
          {isWrityPage && (
            <a
              onClick={() => navigate('/')}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300 hover:-translate-y-0.5 inline-block cursor-pointer"
            >
              Back to Home
            </a>
          )}
          <Button
            variant="outline"
            className="text-sm border-gray-200 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 rounded-lg"
          >
            Contact
          </Button>
        </nav>
      </div>
    </header>
  );
}
