import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "../AdminLoginPage/AdminLoginPage.css";
// import "AdminLoginPage.css";

const AdminLoginPage = (props) => {
  const auth = props.auth;
  const setAdmin = props.setAdmin;

  const handleSubmit = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    signInWithEmailAndPassword(auth, email, password).then((user) => {
      return user ? setAdmin(user) : null;
    });
  };

  return (
    <div className="admin_login_form">
      <div className="admin_form_background">
        <div className="admin_login_section">
          <h1 className="text-start">Admin Login</h1>
          <input type="email" id="email" name="password" className="text" placeholder="username"/>
          <input type="password" id="password" name="password" placeholder="Password"/>
          <button type="submit" onClick={handleSubmit}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
