import React from "react";

// So To group route (route) we have to use layout.tsx on the (route) directory level to cover all the children route that created in (auth)

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default Layout;
