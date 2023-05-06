import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type FormDataType = {
  dialogsMessage: string
}

const Form: FC<InjectedFormProps<FormDataType>> = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div><Field name="dialogsMessage" component="textarea"/></div>
      <div>
        <button>Add message</button>
      </div>
    </form>
  );
};

export const AddTextForm = reduxForm<FormDataType>({form: "DialogsMessageForm"})(Form);
