import Form from "../components/Form";
import React from "react";

const Register: React.FC = () => {
  return <Form route="/api/user/register/" method="register" />;
};

export default Register;
