import { useState } from "react";
import AdminPage from "../AdminPage/AdminPage";
import AdminLoginPage from "../AdminLoginPage/AdminLoginPage";
import { auth } from "../../firebase";

const AdminContainer = () => {
  const [admin, setAdmin] = useState(auth.currentUser);

  return (
    <div>
      {auth.currentUser ? (
        <AdminPage />
      ) : (
        <AdminLoginPage auth={auth} setAdmin={setAdmin} />
      )}
    </div>
  );
};

export default AdminContainer;
