export default function HelpSection() {
  const links = [
    { name: 'FAQ', href: '/faq' },
    { name: 'Term & Condition', href: '/terms' },
    { name: 'Reporting', href: '/reporting' },
    { name: 'Documentation', href: '/documentation' },
    { name: 'Support Policy', href: '/support-policy' },
    { name: 'Privacy', href: '/privacy' },
  ];
  return (
    <div>
      <h3 className="text-xl font-semibold mb-6">Help?</h3>
      <ul className="text-base flex flex-col gap-4 leading-6">
        {links.map((link) => (
          <li key={link.name} className="mb-2">
            <a href={link.href} className="hover:text-[#FF9F0D] transition duration-300">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
