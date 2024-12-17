import { menuItems } from '@/constant/Menu'
import { Coffee } from 'lucide-react'
import Heading from '../Heading/Heading'
import Image from 'next/image'

export default function Dessert() {
  return (
    <section className="w-full mx-auto mt-20 sm:mt-32 px-4">
      <div className="container mx-auto py-10 sm:py-16 flex flex-col md:flex-row gap-8 md:gap-24">

        <div className="w-full md:w-[448px] mb-6 md:mb-0">
        <Image 
  src="/dessert.png" 
  alt="Dessert dish" 
  width={448} 
  height={626} 
  className="w-full h-auto rounded-lg shadow-md" 
/>
        </div>

        <div className="md:w-1/2 md:pl-8">
          <div className="flex items-center mb-6">
            <Coffee className="text-[#FF9F0D]" size={24} />
            <Heading text="Desserts" />
          </div>

          <div className="space-y-8">
            {menuItems.map((item, index) => (
              <div key={index} className="border-b border-dashed border-gray-300 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">
                    {item.name}
                  </h3>
                  <span className="text-xl font-bold text-[#FF9F0D]">{item.price}$</span>
                </div>
                <p className="text-gray-600 mb-2">{item.description}</p>
                <p className="text-sm text-gray-500">{item.calories} CAL</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
