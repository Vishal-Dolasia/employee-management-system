import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: [],
};

const employeeSlice = createSlice({
  name: "employee",

  initialState,

  reducers: {
    addEmployee: (state, action) => {
        state.employees.push({
            id:Date.now(),
            ...action.payload,
        })
    },

    deleteEmployee: (state, action) => {
        state.employees = state.employees.filter((employee) => employee.id !== action.payload);
    },

    updateEmployee: (state,action) => {
        const employee = state.employees.find((employee) => 
          employee.id === action.payload.id
        );

        if(employee) {
          employee.name = action.payload.name;
          employee.email = action.payload.email;
          employee.department = action.payload.department;
          employee.salary = action.payload.salary;
        }
    }
  },
});

export const {
  addEmployee,
  deleteEmployee,
  updateEmployee
} = employeeSlice.actions;

export default employeeSlice.reducer;