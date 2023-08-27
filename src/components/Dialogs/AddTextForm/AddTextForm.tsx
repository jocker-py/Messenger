import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {required, maxLength} from "../../../helpers/validators/validators";

export type FormDataType = {
  dialogsMessage: string
}

const TextArea: FC<any> = ({input}) => {
  return <textarea {...input}/>;
};

const maxlength50 = maxLength(50);

const Form: FC<InjectedFormProps<FormDataType>> = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div><Field name="dialogsMessage" component={TextArea} validate={[required, maxlength50]}/></div>
      <div>
        <button>Add message</button>
      </div>
    </form>
  );
};

export const AddTextForm = reduxForm<FormDataType>({form: "DialogsMessageForm"})(Form);
