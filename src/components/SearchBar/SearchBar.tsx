// import { useState } from 'react';
// import Fuse from 'fuse.js';

// interface SearchBarProps {
//   setSearchQuery: React.Dispatch<React.SetStateAction<string>>; // Accepting setSearchQuery function as a prop
// }

// const SearchBar: React.FC<SearchBarProps> = ({ setSearchQuery }) => {
//   const [localSearchQuery, setLocalSearchQuery] = useState<string>(''); // Local search query state for this component
//   const [results, setResults] = useState<any[]>([]);

//   const data = [
//     { title: 'React', description: 'A JavaScript library for building user interfaces' },
//     { title: 'Next.js', description: 'The React framework for production' },
//     { title: 'Tailwind CSS', description: 'A utility-first CSS framework' },
//     { title: 'JavaScript', description: 'A programming language used for web development' },
//     { title: 'Node.js', description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine' },
//   ];

//   const fuse = new Fuse(data, {
//     keys: ['title', 'description'],
//     threshold: 0.3,  // Fuzzy matching threshold
//   });

//   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const query = e.target.value;
//     setLocalSearchQuery(query);
//     setSearchQuery(query);  // Update the global search query
//     const searchResults = fuse.search(query);
//     setResults(searchResults.map(result => result.item));
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={localSearchQuery}
//         onChange={handleSearch}
//         className="border p-2 rounded w-full mb-4"
//       />
//       <ul>
//         {results.map((item, index) => (
//           <li key={index} className="p-2 border-b">{item.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SearchBar;










import { useState } from 'react';
import Fuse from 'fuse.js';

interface SearchResult {
  title: string;
  description: string;
}

interface SearchBarProps {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>; // Accepting setSearchQuery function as a prop
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearchQuery }) => {
  const [localSearchQuery, setLocalSearchQuery] = useState<string>(''); // Local search query state for this component
  const [results, setResults] = useState<SearchResult[]>([]);  // Updated type for results

  const data: SearchResult[] = [
    { title: 'React', description: 'A JavaScript library for building user interfaces' },
    { title: 'Next.js', description: 'The React framework for production' },
    { title: 'Tailwind CSS', description: 'A utility-first CSS framework' },
    { title: 'JavaScript', description: 'A programming language used for web development' },
    { title: 'Node.js', description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine' },
  ];

  const fuse = new Fuse(data, {
    keys: ['title', 'description'],
    threshold: 0.3,  // Fuzzy matching threshold
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setLocalSearchQuery(query);
    setSearchQuery(query);  // Update the global search query
    const searchResults = fuse.search(query);
    setResults(searchResults.map(result => result.item));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={localSearchQuery}
        onChange={handleSearch}
        className="border p-2 rounded w-full mb-4"
      />
      <ul>
        {results.map((item, index) => (
          <li key={index} className="p-2 border-b">{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
