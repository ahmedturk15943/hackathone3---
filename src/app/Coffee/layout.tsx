// src/app/Coffee/layout.tsx

import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* You can add your layout components or structure here */}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
