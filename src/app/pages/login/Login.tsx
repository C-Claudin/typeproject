// import { Link } from "react-router-dom";

import { useState } from "react";

// export const Login = () => {
//   return (
//     <div>
//       <Link to="/dashboard"> Dashboard </Link>
//     </div>
//   );
// };

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(email);
    console.log(password);
  };

  return (
    <div>
      <form>
        <label>
          <span>Email</span>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>

        <label>
          <span>Senha</span>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button type="button" onClick={handleLogin}>
          Sing-in
        </button>
      </form>
    </div>
  );
};
