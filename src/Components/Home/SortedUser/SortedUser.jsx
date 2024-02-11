import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const SortedUser = ({ onSort }) => {
  const [selectedOption, setSelectedOption] = useState('name');

  const handleSortChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    onSort(selectedValue);
  };

  return (
    <div className='max-w-52 px-5'>
      <div className="mb-4">
        <select
          id="sortType"
          name="sortType"
          value={selectedOption}
          onChange={handleSortChange}
          className="mt-1 p-2 border rounded-md w-full"
        >
          <option value="name">Sort by name</option>
          <option value="email">Sort by email</option>
          <option value="companyName">Sort by Company name</option>
        </select>
      </div>
    </div>
  );
};

export default SortedUser;
