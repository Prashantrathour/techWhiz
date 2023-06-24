import React, { useState } from 'react';
import { debounce } from 'lodash';
import Button from '../components/Button';


const SoftSkills = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  // Dummy data
  const data = [
    {
      question: 'Question 1',
      category: 'Category 1',
      answer: 'Answer 1'
    },
    {
      question: 'Question 2',
      category: 'Category 2',
      answer: 'Answer 2'
    },
    {
      question: 'Question 3',
      category: 'Category 1',
      answer: 'Answer 3'
    },
    // Add more dummy data here
  ];

 
  const debouncedSearch = debounce((value) => {
    const filtered = data.filter((item) => {
      const lowerCaseTerm = value.toLowerCase();
      const lowerCaseQuestion = item.question.toLowerCase();
      const lowerCaseCategory = item.category.toLowerCase();
      return (
        lowerCaseQuestion.includes(lowerCaseTerm) || lowerCaseCategory.includes(lowerCaseTerm)
      );
    });
    setFilteredData(filtered);
  }, 300);

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
    debouncedSearch(value);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Soft Skills</h1>
      <div className="mb-4">
        <input
          className="border rounded py-2 px-3 w-full"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      {filteredData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredData.map((item, index) => (
            <div key={index} className="bg-white shadow-md p-4">
              <h2 className="text-lg font-bold mb-2">{item.question}</h2>
              <p className="text-gray-700">{`Category: ${item.category}`}</p>
              <p className="text-gray-700">{`Answer: ${item.answer}`}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No results found.</p>
      )}
      <div className="flex justify-center mt-4">
        <Button>Submit</Button>
      </div>
    </div>
  );
};

export default SoftSkills;
