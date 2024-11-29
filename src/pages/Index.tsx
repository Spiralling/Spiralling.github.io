import { useState } from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with New Image */}
      <div 
        className="h-[70vh] relative bg-cover bg-center"
        style={{
          backgroundImage: 'url("/lovable-uploads/9c17967d-7c96-454d-be74-3a9c6a37fdc1.png")',
          backgroundPosition: 'center 40%'
        }}
      >
        <div className="absolute inset-0 bg-black/30" /> {/* Overlay for better text readability */}
        <div className="relative z-10 container max-w-6xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-6xl md:text-7xl font-serif text-white mb-6" style={{ fontFamily: 'Freight Text Pro, serif' }}>
            Equilibria
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl font-light">
            The Collective Intelligence and Coordination Network
          </p>
        </div>
      </div>

      <main className="container max-w-6xl mx-auto px-4 py-20 space-y-20">
        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Research Stream */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif text-[#1a3c5b] mb-6" style={{ fontFamily: 'Freight Text Pro, serif' }}>Research Stream</h2>
            <p className="text-black/80 leading-relaxed">
              We study how groups can make better decisions together as challenges grow more complex. Our research integrates insights from:
            </p>
            <div className="space-y-6">
              <div className="p-6 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-medium text-[#1a3c5b] mb-2">Information Theory & Collective Intelligence</h3>
                <p className="text-black/70">Understanding how information flows through networks and how collective wisdom emerges</p>
              </div>
              <div className="p-6 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-medium text-[#1a3c5b] mb-2">Active Inference & System Design</h3>
                <p className="text-black/70">Analyzing how systems maintain stability while adapting to new information</p>
              </div>
            </div>
            <Button className="w-full">Express Interest in Research Stream</Button>
          </section>

          {/* Product Stream */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif text-[#1a3c5b] mb-6" style={{ fontFamily: 'Freight Text Pro, serif' }}>Product Stream</h2>
            <p className="text-black/80 leading-relaxed">
              We support the development of tools and frameworks that help groups coordinate effectively. Our product work centers on:
            </p>
            <div className="space-y-6">
              <div className="p-6 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-medium text-[#1a3c5b] mb-2">Collaborative Decision Tools</h3>
                <p className="text-black/70">Supporting groups in reaching alignment while maintaining diverse perspectives</p>
              </div>
              <div className="p-6 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-medium text-[#1a3c5b] mb-2">Network Analysis & Visualization</h3>
                <p className="text-black/70">Making complex relationships and dynamics visible and actionable</p>
              </div>
            </div>
            <Button className="w-full">Express Interest in Product Stream</Button>
          </section>
        </div>

        {/* Newsletter Section */}
        <section className="max-w-xl mx-auto text-center">
          <div className="ml-embedded" data-form="NU2hRJ"></div>
        </section>

        {/* Footer */}
        <footer className="text-center space-y-4 pt-12 border-t border-gray-100">
          <img 
            src="/lovable-uploads/30b10e59-0ac0-4796-8711-fa380fd1d7b9.png" 
            alt="Equilibria Network Logo" 
            className="h-16 mx-auto"
          />
          <p className="text-black/60 text-sm">
            Copyright © {new Date().getFullYear()} Equilibria Network. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;