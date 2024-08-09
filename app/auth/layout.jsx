export default function AuthLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen w-screen">
      <div className="flex-1 flex items-center justify-center">{children}</div>
    </div>
  );
}
