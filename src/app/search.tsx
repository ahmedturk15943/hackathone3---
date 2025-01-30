// import { useRouter } from 'next/router';

// interface SearchResult {
//   title: string;
//   description: string;
// }

// export default function SearchPage() {
//   const router = useRouter();
//   const { q } = router.query; 


//   const searchResults: SearchResult[] = [
//     { title: "Pizza", description: "Delicious cheese pizza" },
//     { title: "Burger", description: "Juicy beef burger with lettuce" },
//   ];

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-8">
//       <h1 className="text-2xl font-bold text-white mb-6">
//         Search Results for: <span className="text-[#FF9F0D]">{q}</span>
//       </h1>

//       {q ? (
//         searchResults.length > 0 ? (
//           <ul className="space-y-4">
//             {searchResults.map((result, index) => (
//               <li key={index} className="bg-gray-800 p-4 rounded-md">

//                 <h2 className="text-xl text-white">{result.title}</h2>
//                 <p className="text-gray-400">{result.description}</p>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-white">No results found for "{q}"</p>
//         )
//       ) : (
//         <p className="text-white">Please enter a search query.</p>
//       )}
//     </div>
//   );
// }











// import { useRouter } from 'next/router';

// interface SearchResult {
//   title: string;
//   description: string;
// }

// export default function SearchPage() {
//   const router = useRouter();
//   const { q } = router.query; 

//   // Ensure q is treated as a string
//   const searchQuery = typeof q === 'string' ? q : '';

//   const searchResults: SearchResult[] = [
//     { title: "Pizza", description: "Delicious cheese pizza" },
//     { title: "Burger", description: "Juicy beef burger with lettuce" },
//   ];

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-8">
//       <h1 className="text-2xl font-bold text-white mb-6">
//         Search Results for: <span className="text-[#FF9F0D]">{searchQuery}</span>
//       </h1>

//       {searchQuery ? (
//         searchResults.length > 0 ? (
//           <ul className="space-y-4">
//             {searchResults.map((result, index) => (
//               <li key={index} className="bg-gray-800 p-4 rounded-md">
//                 <h2 className="text-xl text-white">{result.title}</h2>
//                 <p className="text-gray-400">{result.description}</p>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-white">No results found for "{searchQuery}"</p>
//         )
//       ) : (
//         <p className="text-white">Please enter a search query.</p>
//       )}
//     </div>
//   );
// }








import { useRouter } from 'next/router';

interface SearchResult {
  title: string;
  description: string;
}

export default function SearchPage() {
  const router = useRouter();
  const { q } = router.query;

  // Ensure q is treated as a string
  const searchQuery = typeof q === 'string' ? q : '';

  const searchResults: SearchResult[] = [
    { title: 'Pizza', description: 'Delicious cheese pizza' },
    { title: 'Burger', description: 'Juicy beef burger with lettuce' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-white mb-6">
        Search Results for: <span className="text-[#FF9F0D]">{searchQuery}</span>
      </h1>

      {searchQuery ? (
        searchResults.length > 0 ? (
          <ul className="space-y-4">
            {searchResults.map((result, index) => (
              <li key={index} className="bg-gray-800 p-4 rounded-md">
                <h2 className="text-xl text-white">{result.title}</h2>
                <p className="text-gray-400">{result.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-white">
            No results found for &quot;{searchQuery}&quot;
          </p> // Correctly escape quotes inside JSX
        )
      ) : (
        <p className="text-white">Please enter a search query.</p>
      )}
    </div>
  );
}
