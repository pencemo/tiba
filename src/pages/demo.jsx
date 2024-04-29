import React, { useState } from 'react';
import { cars as jsonData} from '../data';

// const jsonData = [
//   { id: 1, car_category: 'A', brand: 'X', name: 'Item 1' },
//   { id: 2, car_category: 'B', brand: 'Y', name: 'Item 2' },
//   { id: 3, car_category: 'A', brand: 'Z', name: 'Item 3' },
//   // Add more data as needed
// ];

const FilterComponent = () => {
  const [car_category, setcar_category] = useState('');
  const [brand, setbrand] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter the data based on car_category, brand, and search query
  const filteredData = jsonData.filter(item => {
    return (car_category === '' || item.car_category === car_category) &&
           (brand === '' || item.brand === brand) &&
           (searchQuery === '' || item.car_name.toLowerCase().includes(searchQuery.toLowerCase()));
  });

  // Get unique car_category and brand options
  const uniqueCategories = [...new Set(jsonData.map(item => item.car_category))];
  const uniqueSubcategories = [...new Set(jsonData.map(item => item.brand))];

  return (
    <div className='w-full h-screen bg-slate-800 flex items-center justify-center'>
      <select value={car_category} onChange={e => setcar_category(e.target.value)}>
        <option value="">All Categories</option>
        {uniqueCategories.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>

      <select value={brand} onChange={e => setbrand(e.target.value)}>
        <option value="">All Subcategories</option>
        {uniqueSubcategories.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>

      <input
        type="text"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder="Search..."
      />

      <ul>
        {filteredData.map(item => (
          <li key={item.id}>{item.car_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterComponent;
