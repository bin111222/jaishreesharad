"use client";

import { Clock, AlertTriangle, Calendar, CheckCircle } from "lucide-react";

interface QuickFactsProps {
  duration: string;
  downtime: string;
  results: string;
  sessions: string;
}

export default function QuickFacts({ duration, downtime, results, sessions }: QuickFactsProps) {
  return (
    <section className="py-12 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-pastel-green rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-gray-800" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-1">Duration</h3>
            <p className="text-gray-600">{duration}</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-1">Downtime</h3>
            <p className="text-gray-600">{downtime}</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-pastel-green rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-gray-800" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-1">Results</h3>
            <p className="text-gray-600">{results}</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-1">Sessions</h3>
            <p className="text-gray-600">{sessions}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
