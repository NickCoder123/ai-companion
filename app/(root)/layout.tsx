import Navbar from "@/components/navbar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      <main className="md:pl-20 h-full pt-16">{children}</main>
    </div>
  );
};

export default RootLayout;
