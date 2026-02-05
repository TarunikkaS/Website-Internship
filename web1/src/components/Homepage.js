import React from 'react';
import ValueCard from '../components/ValueCard';

const Homepage = () => {
  const valuesData = [
    {
      letter: 'A',
      title: 'Adherence to Health, Safety, Environment & Quality (HSEQ)',
      dropdownItems: [
        { label: 'Health', href: '/health' },
        { label: 'Safety', href: '/safety' },
        { label: 'Environment', href: '/environment' },
        { label: 'Quality', href: '/quality' }
      ]
    },
    {
      letter: 'S',
      title: 'Sustainability',
      directHref: '/sustainability'
    },
    {
      letter: 'E',
      title: 'Employee Engagement, Education & Empowerment',
      dropdownItems: [
        { label: 'Employee Engagement', href: '/employee-engagement' },
        { 
          label: 'Education', 
          nested: [
            { label: 'KISS Program', href: '/education/kiss-program' }
          ]
        },
        { label: 'Empowerment', href: '/empowerment' }
      ]
    },
    {
      letter: 'C',
      title: 'Collaboration with Customers & Suppliers',
      dropdownItems: [
        { label: 'Collaboration with Customers', href: '/collaboration/customers' },
        { label: 'Collaboration with Suppliers', href: '/collaboration/suppliers' }
      ]
    },
    {
      letter: 'O',
      title: 'Operational Excellence',
      directHref: '/operational-excellence'
    }
  ];

  return (
    <div className="min-h-screen bg-neumorphic-bg py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-8xl font-bold text-gray-800 mb-4 tracking-wider">
            ASECO
          </h1>
          <p className="text-2xl font-medium text-gray-600 tracking-wide">
            Values & Culture
          </p>
        </div>

        {/* Values Navigation Grid */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-6 items-center justify-center">
          {valuesData.map((value, index) => (
            <div 
              key={value.letter} 
              className="animate-fade-in"
              style={{ 
                animationDelay: `${index * 0.1 + 0.3}s`,
                animationFillMode: 'backwards'
              }}
            >
              <ValueCard
                letter={value.letter}
                title={value.title}
                dropdownItems={value.dropdownItems}
                directHref={value.directHref}
              />
            </div>
          ))}
        </div>

        {/* Footer Information */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'backwards' }}>
          <div className="bg-neumorphic-bg p-8 rounded-neumorphic shadow-neumorph-inset inline-block">
            <p className="text-gray-600 text-lg font-medium tracking-wide">
              AL SHIRAWI EQUIPMENT (ASECO)
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Building Excellence Through Values
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;