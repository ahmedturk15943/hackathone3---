import Image from "next/image";
export default function RecentPostsSection() {
  const posts = [
    { title: "Is fast food good for your body?", date: "February 28, 2022", image: "/recentPost.png" },
    { title: "Change your food habit with organic food", date: "February 28, 2022", image: "/recentPost.png" },
    { title: "Do you like fast food for your life?", date: "February 28, 2022", image: "/recentPost.png" },
  ];

  return (
    <div className="w-full sm:w-[273.83px]">
      <h3 className="text-xl font-semibold mb-6">Recent Posts</h3>
      {posts.map((post, index) => (
        <div key={index} className="flex items-center mb-6">
<Image
  src={post.image}
  alt="Recent Post"
  width={64}
  height={64}
  className="object-cover rounded-lg mr-4" 
/>
          <div>
            <h4 className="font-semibold mb-1 text-lg">{post.title}</h4>
            <p className="text-sm text-gray-400">{post.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
