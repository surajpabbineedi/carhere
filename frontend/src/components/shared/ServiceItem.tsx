import React from 'react';

interface ServiceItemProps {
  name: string;
  price: string;
  rating?: number;
  available?: boolean;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  name,
  price,
  rating = 4.5,
  available = true,
}) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:border-blue-500 transition cursor-pointer">
      <div className="flex justify-between items-start mb-3">
        <h4 className="font-semibold text-gray-800">{name}</h4>
        <span
          className={`px-2 py-1 text-xs rounded ${
            available
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {available ? 'Available' : 'Unavailable'}
        </span>
      </div>
      <p className="text-blue-600 font-bold text-lg mb-2">{price}</p>
      {rating && (
        <div className="flex items-center">
          <span className="text-yellow-400">★</span>
          <span className="ml-1 text-sm text-gray-600">{rating}/5.0</span>
        </div>
      )}
    </div>
  );
};

export default ServiceItem;
