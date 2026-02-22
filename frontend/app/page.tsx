'use client';

import React from 'react';
import Header from '@/src/components/shared/Header';
import Card from '@/src/components/shared/Card';
import Button from '@/src/components/shared/Button';
import ServiceItem from '@/src/components/shared/ServiceItem';

export default function Home() {
  const services = [
    {
      name: 'Oil Change',
      price: '$49.99',
      rating: 4.8,
      available: true,
    },
    {
      name: 'Tire Replacement',
      price: '$179.99',
      rating: 4.6,
      available: true,
    },
    {
      name: 'Battery Replacement',
      price: '$129.99',
      rating: 4.7,
      available: true,
    },
    {
      name: 'Brake Service',
      price: '$199.99',
      rating: 4.9,
      available: false,
    },
  ];

  const handleExplore = () => {
    console.log('Explore services clicked');
    alert('More services coming soon!');
  };

  const handleBooking = () => {
    console.log('Start booking clicked');
    alert('Booking feature coming soon!');
  };

  return (
    <>
      <Header
        title="CarHere"
        subtitle="All Car Services at One Place"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Welcome to CarHere
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Bringing all car services to one convenient platform for car users
            </p>
            <div className="flex gap-4 justify-center">
              <Button text="Book Now" onClick={handleBooking} />
              <Button
                text="Explore Services"
                onClick={handleExplore}
                variant="secondary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose CarHere?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              title="Easy Booking"
              description="Book car services in seconds with our simple and intuitive interface"
              icon="🚗"
            />
            <Card
              title="Best Prices"
              description="Get competitive pricing from verified service providers in your area"
              icon="💰"
            />
            <Card
              title="24/7 Support"
              description="Our dedicated support team is always here to help you"
              icon="📞"
            />
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            Featured Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceItem
                key={index}
                name={service.name}
                price={service.price}
                rating={service.rating}
                available={service.available}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Your Car Serviced?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of satisfied customers who trust CarHere
          </p>
          <Button
            text="Get Started"
            onClick={handleBooking}
            variant="primary"
            className="bg-white text-blue-600 hover:bg-blue-50"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">CarHere</h4>
              <p className="text-sm">
                Your one-stop solution for all car services
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#" className="hover:text-white">Services</a></li>
                <li><a href="#" className="hover:text-white">About</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Support</h4>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Help</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>&copy; 2026 CarHere. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
