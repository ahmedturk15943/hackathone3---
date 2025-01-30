// 'use client'
// import { useEffect, useState } from 'react';
// import Image from 'next/image'; 
// import { client } from '@/sanity/lib/client'; 

// const query = `*[_type == "chef" && name != null]{
//   _id,
//   name,
//   position,
//   description,
//   experience,
//   specialty,
//   image {
//     asset -> {
//       _id,
//       url
//     }
//   }
// }`;

// const Chef = () => {
//   const [chefs, setChefs] = useState<any[]>([]);

//   useEffect(() => {

//     client
//       .fetch(query)
//       .then((data) => {
//         setChefs(data);
//       })
//       .catch((err) => {
//         console.error("Error fetching chef data:", err);
//       });
//   }, []);

//   return (
//     <div className="chef-container bg-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6">
//       {chefs.length === 0 ? (
//         <div className="text-center text-lg col-span-full">No chefs available at the moment.</div>
//       ) : (
//         chefs.map((chef) => (
//           <div
//             key={chef._id}
//             className="chef-card bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
//           >

//             <div className="relative w-full h-56 rounded-t-lg overflow-hidden">
//               <Image
//                 src={chef.image?.asset?.url || '/fallback-image.png'} 
//                 alt={chef.name || 'Chef Image'}
//                 layout="responsive"
//                 width={500}  
//                 height={500} 
//                 className="rounded-t-lg"
//                 priority
//               />
//             </div>

//             <div className="p-4">

//               <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">{chef.name || 'Chef Name'}</h3>

//               <p className="text-center text-md text-gray-500 mb-2">{chef.position || 'Position not available'}</p>

//               <p className="text-sm text-gray-600 mb-3 text-center">
//                 {chef.description || 'No description available'}
//               </p>

//               <p className="text-sm text-gray-600 mb-2 text-center">
//                 {chef.experience ? `Experience: ${chef.experience} years` : 'Experience not available'}
//               </p>

//               <p className="text-sm text-gray-600 text-center">
//                 {chef.specialty || 'Specialty not available'}
//               </p>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Chef;








'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image'; 
import { client } from '@/sanity/lib/client'; 

// Define the type for a chef object
interface Chef {
  _id: string;
  name: string;
  position: string;
  description: string;
  experience: string;
  specialty: string;
  image: {
    asset: {
      _id: string;
      url: string;
    };
  };
}

const query = `*[_type == "chef" && name != null]{
  _id,
  name,
  position,
  description,
  experience,
  specialty,
  image {
    asset -> {
      _id,
      url
    }
  }
}`;

const ChefComponent = () => {
  const [chefs, setChefs] = useState<Chef[]>([]); // Use the Chef type for state

  useEffect(() => {
    client
      .fetch(query)
      .then((data) => {
        setChefs(data);
      })
      .catch((err) => {
        console.error("Error fetching chef data:", err);
      });
  }, []);

  return (
    <div className="chef-container bg-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6">
      {chefs.length === 0 ? (
        <div className="text-center text-lg col-span-full">No chefs available at the moment.</div>
      ) : (
        chefs.map((chef) => (
          <div
            key={chef._id}
            className="chef-card bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
          >
            <div className="relative w-full h-56 rounded-t-lg overflow-hidden">
              <Image
                src={chef.image?.asset?.url || '/fallback-image.png'} 
                alt={chef.name || 'Chef Image'}
                layout="responsive"
                width={500}  
                height={500} 
                className="rounded-t-lg"
                priority
              />
            </div>

            <div className="p-4">
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">{chef.name || 'Chef Name'}</h3>
              <p className="text-center text-md text-gray-500 mb-2">{chef.position || 'Position not available'}</p>
              <p className="text-sm text-gray-600 mb-3 text-center">
                {chef.description || 'No description available'}
              </p>
              <p className="text-sm text-gray-600 mb-2 text-center">
                {chef.experience ? `Experience: ${chef.experience} years` : 'Experience not available'}
              </p>
              <p className="text-sm text-gray-600 text-center">
                {chef.specialty || 'Specialty not available'}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ChefComponent;
