import React from "react";
import LoginForm, {FormDataType} from "./LoginForm/LoginForm";

const Login = () => {
  const onSubmitForm = (formData: FormDataType) => {
    console.log(formData);
  };
  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={onSubmitForm}/>
    </div>
  );
};

export default Login;