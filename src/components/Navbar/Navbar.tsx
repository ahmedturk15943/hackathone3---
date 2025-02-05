 'use client';
import { useState, useEffect } from 'react';
import Link from "next/link";
import { Menu, X, Search, User, ShoppingCart } from 'lucide-react'; // Add icons here
import { useRouter } from "next/navigation"; // For programmatic navigation
import SearchBar from "@/components/SearchBar/SearchBar"; // Import SearchBar

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false); // State for toggling the search bar
  const [searchQuery, setSearchQuery] = useState(""); // For the search query
  const router = useRouter();

  const menuItems = [
    { name: "Home", href: "/", active: activeLink === "/" },
    { name: "Menu", href: "/menu", active: activeLink ==="/menu" },
    { name: "Blog", href: "/blog", active: activeLink === "/blog" },
    { name: "Pages", href: "/pages", active: activeLink === "/pages" },
    { name: "About", href: "/about", active: activeLink === "/about" },
    { name: "Shop", href: "/shop", active: activeLink === "/shop" },
    { name: "Chef", href: "/ourChefs", active: activeLink === "/ourChefs" },
    { name: "Foods", href: "/products", active: activeLink === "/products" },


    { name: "Contact", href: "/contact", active: activeLink === "/contact" },
  ];

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActiveLink(currentPath);
  }, [isMenuOpen]);

  const handleSearchClick = () => {
    if (searchQuery.trim()) {
      router.push(`/search?q=${searchQuery}`);
    }
  };

  const toggleSearchBar = () => {
    setIsSearchBarVisible(!isSearchBarVisible); // Toggle visibility of search bar
  };

  return (
    <header className="w-full bg-[#0D0D0D] fixed top-0 px-4 sm:px-6 lg:px-[15.62%] py-4 lg:py-7 ">
      <nav className="flex items-center justify-between">
        <Link
          href="/"
          className="text-[20px] sm:text-[24px] leading-[32px] font-bold text-white font-helvetica z-10 mr-19"
        >
          Food<span className="text-[#FF9F0D] mr-9 ml-1">tuck</span>
        </Link>
        <button
          className="lg:hidden text-white z-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <ul className={` 
          fixed inset-0 bg-[#0D0D0D] flex flex-col items-center justify-center gap-6
          lg:static lg:flex-row lg:bg-transparent lg:gap-[32px]
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible lg:opacity-100 lg:visible'}`}
        >
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`text-[16px] leading-6 ${item.active ? "text-[#FF9F0D] font-bold" : "text-white"} font-inter hover:text-[#FF9F0D] transition-colors`}
                onClick={() => { setActiveLink(item.href); setIsMenuOpen(false); }}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Icon Section */}
        <div className="hidden lg:flex items-center gap-4 ml-40">
          {/* Search Icon, Toggles the SearchBar visibility */}
          <button
            onClick={toggleSearchBar} // Toggles the search bar visibility
            className="text-white hover:text-[#FF9F0D] transition-colors"
          >
            <Search size={24} />
          </button>
          
          {/* Optionally, SearchBar can still be toggled, but it’s hidden by default */}
          {isSearchBarVisible && (
            <div className="absolute top-[60px] right-0 bg-[#0D0D0D] p-4 w-[300px] rounded-lg shadow-lg">
              <SearchBar setSearchQuery={setSearchQuery} /> {/* Passing state handler to SearchBar */}
              <button
                onClick={handleSearchClick} // Redirect to search page
                className="text-[#FF9F0D] mt-2 w-full py-2"
              >
                Search
              </button>
            </div>
          )}

          <Link href="#" className="text-white hover:text-[#FF9F0D] transition-colors">
            <User size={24} />
          </Link>
          <Link href="/Cart" className="text-white hover:text-[#FF9F0D] transition-colors">
            <ShoppingCart size={24} />
          </Link>
        </div>
      </nav>
    </header>
  );
}








