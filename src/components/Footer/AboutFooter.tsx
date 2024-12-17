import { Clock } from 'lucide-react'

export default function AboutUsSection() {
  return (
    <div className='w-[395px]'>
      <h3 className="text-xl font-semibold mb-6">About Us</h3>
      <p className="mb-6 text-lg leading-[26px]">
        Corporate clients and leisure travelers rely on Groundlink for dependable, safe, and professional chauffeured car services in major cities across the world.
      </p>
      <div className="flex items-start">
        <div className="bg-[#FF9F0D] p-2 rounded mr-4 w-[77px] h-[70px] flex items-center justify-center">
          <Clock className="text-white" />
        </div>
        <div>
          <h4 className="font-semibold">Opening Hours</h4>
          <p className="text-sm">Mon - Sat (8:00 AM - 6:00 PM)</p>
          <p className="text-sm">Sunday - Closed</p>
        </div>
      </div>
    </div>
  )
}
