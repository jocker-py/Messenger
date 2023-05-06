import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type FormDataType = {
  postMessage: string;
}

const FormTemplate: FC<InjectedFormProps<FormDataType>> = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div><Field name="postMessage" component="textarea"/></div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

export const AddTextForm = reduxForm<FormDataType>({form: "PostMessageForm"})(FormTemplate);