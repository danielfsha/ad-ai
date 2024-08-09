import Nav from "./Nav";

export default function NavLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen w-screen">
      <Nav />
      {children}
    </div>
  );
}
