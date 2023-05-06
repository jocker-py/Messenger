import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type FormDataType = {
  login: string;
  password: string;
  rememberMe: boolean;
}

const LoginForm: FC<InjectedFormProps<FormDataType>> = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div><Field name={"login"} component={"input"} placeholder={"Login"}/></div>
      <div><Field name={"password"} component={"input"} placeholder={"Password"} type="password"/></div>
      <div><Field name={"rememberMe"} component={"input"} type={"checkbox"}/> Remember me</div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};


export default reduxForm<FormDataType>({form: "Login"})(LoginForm);