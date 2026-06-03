import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import {useSelector} from "react-redux";
import { useState } from "react";

function Employee() {
  const employees = useSelector(
    (state) => state.employee.employees
  );

  const [search,setSearch] = useState("");
  const filteredEmployee = employees.filter((emp)=>{
     return emp.name.toLowerCase().includes(search.toLowerCase())
  });
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      <Navbar />

      {/* Main Section */}
      <main className="flex-1 px-10 py-8">

        {/* Heading */}
        <div className="mb-8">

          <h1 className="text-4xl font-bold text-black">
            Employees
          </h1>

          <p className="text-gray-500 mt-2">
            View and manage all employee records
          </p>

        </div>

        {/* Top Controls */}
        <div className="bg-white p-5 rounded-2xl shadow-md mb-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">

          {/* Search */}
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search employees..."
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-black"
              value = {search}
              onChange={(e)=> setSearch(e.target.value)}
            />
          </div>

          {/* Filters */}
          <div className="flex gap-4 flex-wrap">

            <select className="border border-gray-300 rounded-xl px-4 py-3 outline-none cursor-pointer">
              <option>All Departments</option>
              <option>Engineering</option>
              <option>HR</option>
              <option>Marketing</option>
              <option>Finance</option>
            </select>

            <select className="border border-gray-300 rounded-xl px-4 py-3 outline-none cursor-pointer">
              <option>Sort By</option>
              <option>Name A-Z</option>
              <option>Salary Low-High</option>
              <option>Salary High-Low</option>
            </select>

          </div>

        </div>

        {/* Table Section */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">

          <div className="overflow-x-auto">

            <table className="w-full min-w-250">

              {/* Table Header */}
              <thead className="bg-black text-white">

                <tr>

                  <th className="text-left px-6 py-4 font-semibold">
                    Employee
                  </th>

                  <th className="text-left px-6 py-4 font-semibold">
                    Email
                  </th>

                  <th className="text-left px-6 py-4 font-semibold">
                    Department
                  </th>

                  <th className="text-left px-6 py-4 font-semibold">
                    Salary
                  </th>

                  <th className="text-left px-6 py-4 font-semibold">
                    Status
                  </th>

                </tr>

              </thead>

              {/* Table Body */}
              <tbody>

                {
                  filteredEmployee.map((emp) => (

                    <tr
                      key={emp.id}
                      className="border-b hover:bg-gray-50 transition"
                    >

                      {/* Employee */}
                      <td className="px-6 py-5">

                        <div className="flex items-center gap-4">

                          <img
                            src="https://i.pravatar.cc/150?img=12"
                            alt="employee"
                            className="w-12 h-12 rounded-full"
                          />

                          <div>

                            <h2 className="font-semibold">
                              {emp.name}
                            </h2>

                            <p className="text-sm text-gray-500">
                              Employee
                            </p>

                          </div>

                        </div>

                      </td>

                      {/* Email */}
                      <td className="px-6 py-5">
                        {emp.email}
                      </td>

                      {/* Department */}
                      <td className="px-6 py-5">
                        {emp.department}
                      </td>

                      {/* Salary */}
                      <td className="px-6 py-5">
                        ₹{emp.salary}
                      </td>

                      {/* Status */}
                      <td className="px-6 py-5">

                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                          Active
                        </span>

                      </td>

                    </tr>

                  ))
                }

              </tbody>

            </table>

          </div>

        </div>

      </main>

      <Footer />

    </div>
  );
}

export default Employee;