import { useState } from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { useDispatch,useSelector } from "react-redux";
import { addEmployee,deleteEmployee, updateEmployee } from "../store/employeeslice";

function Dashboard() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const employees = useSelector(
    (state) => state.employee.employees
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");



  const [editingEmployee, setEditingEmployee] = useState(null);
  const handleSaveEmployee = () => {
    const newEmployee = {
      name,
      email,
      department,
      salary,
    };

    if(editingEmployee){
      dispatch(
        updateEmployee({
          id: editingEmployee.id,
          name,
          email,
          department,
          salary,
        })
      );
    } else{
        dispatch(addEmployee(newEmployee));
    }
    setEditingEmployee(null);
    setName("");
    setEmail("");
    setDepartment("");
    setSalary("");
    setShowModal(false);
  };

  const handleDelete = (id) =>{
    dispatch(deleteEmployee(id))
  }
  const handleEdit = (emp) =>{
    setShowModal(true);
    setEmail(emp.email)
    setName(emp.name)
    setSalary(emp.salary)
    setDepartment(emp.department);
    setEditingEmployee(emp);
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      <Navbar />

      {/* Main Content */}
      <main className="flex-1 px-10 py-8">

        {/* Top Section */}
        <div className="flex items-center justify-between mb-8">

          <div>
            <h1 className="text-4xl font-bold text-black">
              Employee Dashboard
            </h1>

            <p className="text-gray-500 mt-2">
              Manage employee records and company data
            </p>
          </div>

          {/* Add Employee Button */}
          <button
            className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            + Add Employee
          </button>

        </div>

        {/* Employee Table */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full">

          <table className="w-full table-fixed">

            <thead className="bg-black text-white">
              <tr>
                <th className="text-left px-6 py-4">Employee</th>
                <th className="text-left px-6 py-4">Email</th>
                <th className="text-left px-6 py-4">Department</th>
                <th className="text-left px-6 py-4">Salary</th>
                <th className="text-left px-6 py-4">Status</th>
                <th className="text-left px-6 py-4">Delete</th>
                <th className="text-left px-6 py-4">Edit</th>
              </tr>
            </thead>

            <tbody>
                {
                  employees.map((emp) => (

                    <tr key={emp.id} className="border-b">

                      <td className="px-6 py-5 flex items-center gap-4">

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
                              Software Engineer
                            </p>
                          </div>

                        </td>

                        <td className="px-6 py-5">
                          {emp.email}
                        </td>

                        <td className="px-6 py-5">
                          {emp.department}
                        </td>

                        <td className="px-6 py-5">
                          ₹{emp.salary}
                        </td>

                        <td className="px-6 py-5">
                          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                            Active
                          </span>
                        </td>
                        <td className="px-6 py-5">
                          <button onClick={()=>{handleDelete(emp.id)}} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                            Delete
                          </button>
                        </td>
                        <td className="px-6 py-5">
                          <button onClick={()=>{handleEdit(emp)}} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                            Edit
                          </button>
                        </td>

                      </tr>

                    ))
                  }
              

            </tbody>

          </table>

        </div>

      </main>

      {/* Modal */}
      {
        showModal && (

          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

            {/* Modal Box */}
            <div className="bg-white w-full max-w-lg rounded-2xl p-8 shadow-2xl">

              {/* Heading */}
              <div className="mb-6">

                <h1 className="text-3xl font-bold text-black">
                  Add Employee
                </h1>

                <p className="text-gray-500 mt-2">
                  Enter employee details below
                </p>

              </div>

              {/* Form */}
              <div className="space-y-5">

  {/* const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState(""); */}

                <div>
                  <label className="block mb-2 font-semibold">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter employee name"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none"
                    value = {name}
                    onChange={(e)=>{
                      setName(e.target.value);
                    }}
                  />
                </div>

                <div>
                  <label className="block mb-2 font-semibold">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="Enter employee email"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none"
                    value = {email}
                    onChange={(e)=>{
                      setEmail(e.target.value);
                    }}
                  />
                </div>

                <div>
                  <label className="block mb-2 font-semibold">
                    Department
                  </label>

                  <input
                    type="text"
                    placeholder="Enter department"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none"
                    value = {department}
                    onChange={(e)=>{
                      setDepartment(e.target.value);
                    }}
                  />
                </div>

                <div>
                  <label className="block mb-2 font-semibold">
                    Salary
                  </label>

                  <input
                    type="number"
                    placeholder="Enter salary"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none"
                    value = {salary}
                    onChange={(e)=>{
                      setSalary(e.target.value);
                    }}
                  />
                </div>

              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-4 mt-8">

                <button
                  onClick={() => setShowModal(false)}
                  className="px-5 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
                >
                  Cancel
                </button>

                <button
                  className="px-5 py-3 rounded-xl bg-black text-white hover:bg-gray-900 transition"
                  onClick={handleSaveEmployee }
                >
                  Save Employee
                </button>

              </div>

            </div>

          </div>

        )
      }
      <Footer />

    </div>
  );
}

export default Dashboard;