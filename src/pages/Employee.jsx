import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Employee() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 p-10">
        <h1 className="text-4xl font-bold">
          Employee Page
        </h1>
      </main>

      <Footer />
    </div>
  );
}

export default Employee;