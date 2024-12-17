export default function NewsletterSection() {
  return (
    <div className="w-full max-w-screen-lg mx-auto text-center mb-12 flex flex-col items-center gap-8 px-4">
      <div className="flex flex-col">
        <h2 className="text-3xl font-semibold mb-4">
          <span className="text-[#FF9F0D]">Still</span> Need Our Support?
        </h2>
        <p className="mb-6 text-lg">
          Don&apos;t wait, make a smart and logical choice here. It&apos;s pretty easy.
        </p>
      </div>

      <form className="w-full sm:w-[459px] flex max-w-2xl mx-auto">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="flex-grow bg-[#FF9F0D] text-white placeholder-white placeholder-opacity-60 px-4 py-2 rounded-l-md focus:outline-none"
        />
        <button
          type="submit"
          className="bg-white text-[#FF9F0D] px-6 py-2 rounded-r-md font-semibold hover:bg-[#FF9F0D] hover:text-white transition duration-300"
        >
          Subscribe Now
        </button>
      </form>
    </div>
  );
}
