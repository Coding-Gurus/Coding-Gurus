"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a minimum loading time to show the animation
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "visible";
    }, 2500);

    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "visible";
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 flex items-center justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Logo Container with Animation */}
        <div className="relative mb-8">
          {/* Outer Rotating Ring with gradient */}
          <div className="absolute inset-0 w-48 h-48">
            <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 border-r-purple-500 rounded-full animate-spin"></div>
          </div>
          
          {/* Middle Ring - opposite rotation */}
          <div className="absolute inset-3 w-42 h-42">
            <div className="absolute inset-0 border-4 border-transparent border-b-purple-400 border-l-pink-400 rounded-full animate-spin-reverse"></div>
          </div>
          
          {/* Inner Ring - fast rotation */}
          <div className="absolute inset-6 w-36 h-36">
            <div className="absolute inset-0 border-4 border-transparent border-t-blue-400 rounded-full animate-spin-fast"></div>
          </div>
          
          {/* Pulsing Dots around logo */}
          <div className="absolute inset-0 w-48 h-48">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full animate-pulse-dot"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-purple-500 rounded-full animate-pulse-dot" style={{ animationDelay: "0.5s" }}></div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-pink-500 rounded-full animate-pulse-dot" style={{ animationDelay: "1s" }}></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full animate-pulse-dot" style={{ animationDelay: "1.5s" }}></div>
          </div>
          
          {/* Logo - Circular container */}
          <div className="relative w-48 h-48 flex items-center justify-center animate-scale-pulse">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-full p-1 shadow-2xl shadow-blue-500/50 animate-glow-pulse">
              <div className="w-full h-full bg-zinc-900 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src="/CG-Logo.png"
                  alt="Coding Gurus"
                  className="w-20 h-20 object-contain animate-fade-in"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Coding Gurus
          </span>
        </h1>

        {/* Loading Text */}
        <div className="flex items-center gap-2 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <span className="text-zinc-400 text-lg font-medium">Loading</span>
          <div className="flex gap-1">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0s" }}></span>
            <span className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
            <span className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-zinc-800 rounded-full overflow-hidden mt-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-progress rounded-full"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes spin-fast {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes scale-pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.08);
          }
        }

        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(147, 51, 234, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.8), 0 0 80px rgba(147, 51, 234, 0.5);
          }
        }

        @keyframes pulse-dot {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes progress {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-spin {
          animation: spin 2s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 2.5s linear infinite;
        }

        .animate-spin-fast {
          animation: spin-fast 1.5s linear infinite;
        }

        .animate-scale-pulse {
          animation: scale-pulse 2s ease-in-out infinite;
        }

        .animate-glow-pulse {
          animation: glow-pulse 2s ease-in-out infinite;
        }

        .animate-pulse-dot {
          animation: pulse-dot 2s ease-in-out infinite;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-progress {
          animation: progress 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
