import React, { useState } from 'react';

const initialData = [
  { id: 1, name: 'Item 1', category: 'Category A' },
  { id: 2, name: 'Item 2', category: 'Category B' },
  { id: 3, name: 'Item 3', category: 'Category A' },
  { id: 4, name: 'Item 4', category: 'Category C' },
];

const CheckboxFilter = () => {
  const [categories, setCategories] = useState({});
  const [filteredData, setFilteredData] = useState(initialData);

  const handleCheckboxChange = (category) => {
    const updatedCategories = { ...categories, [category]: !categories[category] };
    setCategories(updatedCategories);
    filterData(updatedCategories);
  };

  const filterData = (selectedCategories) => {
    const selectedCategoriesArray = Object.keys(selectedCategories).filter((key) => selectedCategories[key]);
    if (selectedCategoriesArray.length === 0) {
      setFilteredData(initialData);
    } else {
      const newData = initialData.filter((item) => selectedCategoriesArray.includes(item.category));
      setFilteredData(newData);
    }
  };

  return (
    <div className='w-full h-screen grid place-content-center bg-slate-500'>
      <h2>Filter Data</h2>
      <div>
        {Object.keys(categories).map((category) => (
          <div key={category}>
            <label>
              <input
                type="checkbox"
                checked={categories[category] || false}
                onChange={() => handleCheckboxChange(category)}
              />
              {category} name
            </label>
          </div>
        ))}
      </div>
      <div>
        <h3>Filtered Data</h3>
        <ul>
          {filteredData.map((item) => (
            <li key={item.id}>
              {item.name} - {item.category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CheckboxFilter;
