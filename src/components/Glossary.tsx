import React, { useState } from 'react';
import { Search } from 'lucide-react';

const glossaryTerms = [
  {
    letter: 'A',
    terms: [
      {
        term: 'Authentication',
        definition: 'The process of verifying the identity of a user or system'
      },
      {
        term: 'API Security',
        definition: 'Protection mechanisms for web APIs against unauthorized access and attacks'
      }
    ]
  },
  {
    letter: 'B',
    terms: [
      {
        term: 'Breach',
        definition: 'Unauthorized access to data or systems resulting in potential data exposure'
      },
      {
        term: 'Backdoor',
        definition: 'A method of bypassing normal authentication in a system'
      }
    ]
  },
  {
    letter: 'C',
    terms: [
      {
        term: 'Cryptography',
        definition: 'The practice of securing communication through encoding information'
      },
      {
        term: 'CSRF',
        definition: 'Cross-Site Request Forgery - A type of web security vulnerability'
      }
    ]
  }
  // Add more terms for each letter...
];

const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTerms = glossaryTerms.map(letterGroup => ({
    letter: letterGroup.letter,
    terms: letterGroup.terms.filter(term => 
      term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(group => group.terms.length > 0);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search terms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {filteredTerms.map(({ letter, terms }) => (
        <div key={letter} className="mb-8">
          <h3 className="text-2xl font-bold text-cyan-500 mb-4">{letter}</h3>
          <div className="space-y-4">
            {terms.map((term, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow">
                <h4 className="text-lg font-semibold mb-2">{term.term}</h4>
                <p className="text-gray-600">{term.definition}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Glossary;