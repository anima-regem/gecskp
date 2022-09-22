import create from "zustand";

//not compulsory

const departmentStore = create((set, get) => ({
    departments: [],
    currentDepartment: {},
    setCurrentDepartment: (departmentId) => {
        set((state) => {
            let depts = get().departments;
            let [dept] = depts.filter((dep) => dep.id === departmentId);
            let data = dept.departmentPage[0];
            return {
                ...state,
                currentDepartment: data,
            };
        });
    },
    setDepartments: (data) => {
        set((state) => ({ ...state, departments: data }));
    },
}));

export { departmentStore };
