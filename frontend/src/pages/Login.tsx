import React from "react";
import Form from "../components/Form";

const Login: React.FC = () => {
  return <Form route="/api/token/" method="login" />;
};

export default Login;
