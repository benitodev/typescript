import React from "react";
import useNewSubForm from "../hooks/useNewSubForm";
import { FormProps } from "../types";

const Form = ({ onNewSub }: FormProps) => {
  const { formState, actionType } = useNewSubForm();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNewSub(formState);
    actionType({
      type: "clear",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    actionType({
      type: "change_value",
      payload: {
        inputName: name,
        inputValue: value,
      },
    });
  };

  const handleClear = () => {
    actionType({type:"clear"});
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={formState.nick}
          type="text"
          name="nick"
          placeholder="nick"
        />
        <input
          onChange={handleChange}
          value={formState.subMonths}
          type="number"
          name="subMonths"
          placeholder="subMonths"
        />
        <input
          onChange={handleChange}
          value={formState.avatar}
          type="text"
          name="avatar"
          placeholder="avatar"
        />
        <textarea
          onChange={handleChange}
          value={formState.description}
          name="description"
          placeholder="description"
        />
        <button onClick={handleClear} type="button">
          Clear the form
        </button>
        <button type="submit">Save new sub</button>
      </form>
    </div>
  );
};

export default Form;
