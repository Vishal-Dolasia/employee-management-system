import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />

      {/* Hero Section */}
      <main className="flex-1">
        <section className="max-w-7xl mx-auto px-10 py-20">
          
          <div className="text-center">
            <h1 className="text-6xl font-bold text-black mb-6">
              Employee Management System
            </h1>

            <p className="text-gray-600 text-xl max-w-3xl mx-auto mb-10">
              Manage employees, track records, monitor departments,
              and streamline HR operations from a single dashboard.
            </p>

            <div className="flex justify-center gap-5">
              <button
                onClick={() => navigate("/login")}
                className="bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition"
              >
                Get Started
              </button>

              <button
                onClick={() => navigate("/dashboard")}
                className="border border-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition"
              >
                View Dashboard
              </button>
            </div>
          </div>

        </section>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-10 pb-20">
          
          <h2 className="text-4xl font-bold text-center mb-12">
            Features
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold mb-4">
                Employee Records
              </h3>

              <p className="text-gray-500">
                Store and manage employee information with an
                organized and easy-to-use interface.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold mb-4">
                Department Management
              </h3>

              <p className="text-gray-500">
                Keep departments organized and track employee
                assignments efficiently.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold mb-4">
                Performance Tracking
              </h3>

              <p className="text-gray-500">
                Monitor employee performance and maintain
                productivity across teams.
              </p>
            </div>

          </div>

        </section>

        {/* Stats Section */}
        <section className="bg-white py-20">
          
          <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-3 gap-8 text-center">

            <div>
              <h1 className="text-5xl font-bold">500+</h1>
              <p className="text-gray-500 mt-2">Employees Managed</p>
            </div>

            <div>
              <h1 className="text-5xl font-bold">20+</h1>
              <p className="text-gray-500 mt-2">Departments</p>
            </div>

            <div>
              <h1 className="text-5xl font-bold">99%</h1>
              <p className="text-gray-500 mt-2">Data Accuracy</p>
            </div>

          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;