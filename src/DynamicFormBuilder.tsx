import React, { useState } from "react";
import {
  Container,
  Section,
  Button,
  StyledSelect,
  Popup,
} from "./styles/styledComponents";
import FormField from "./components/FormField";

type FormFieldType = {
  id: number;
  type: "input" | "checkbox" | "select" | "textarea";
  props: any;
};

const DynamicFormBuilder: React.FC = () => {
  const [formFields, setFormFields] = useState<FormFieldType[]>([]);
  const [mode, setMode] = useState<"edit" | "player">("edit");
  const [popupContent, setPopupContent] = useState<string | null>(null);
  const [bgColor, setBgColor] = useState<string>("white");

  const colors = ["lightblue", "lightgreen", "lightcoral", "lightgoldenrodyellow"];

  const addComponent = (type: "input" | "checkbox" | "select" | "textarea") => {
    const defaultProps = {
      input: { placeholder: "Enter text", width: "200px" },
      checkbox: { label: "Check me", onClick: handleClick, action: 'popup' },
      select: { options: ["Option 1", "Option 2"], onClick: handleClick, action: 'popup' },
      textarea: { placeholder: "Enter text", width: "300px", borderColor: "blue" },
    }[type];

    setFormFields([
      ...formFields,
      { id: Date.now(), type, props: defaultProps },
    ]);
  };

  const updateField = (id: number, key: string, value: any) => {
    console.log(formFields)
    setFormFields((prevFields) =>
      prevFields.map((field) =>
        field.id === id ? { ...field, props: { ...field.props, [key]: value } } : field
      )
    );
  };

  const removeField = (id: number) => {
    setFormFields(formFields.filter((field) => field.id !== id));
  };

  // const handleClick = (content: string) => {
  //   setPopupContent(content);
  //   setBgColor(colors[Math.floor(Math.random() * colors.length)]);
  // };

  const handleClick = (content: string, action: string) => {
    console.log(content, action)
    if (action === "popup") {
      setPopupContent(content);
    } else if (action === "color") {
      setBgColor(colors[Math.floor(Math.random() * colors.length)]);
    }
  };

  return (
    <Container>
      <h2>Dynamic Form Builder</h2>
      <StyledSelect onChange={(e) => setMode(e.target.value as "edit" | "player")} value={mode}>
        <option value="edit">Edit Mode</option>
        <option value="player">Player Mode</option>
      </StyledSelect>

      {mode === "edit" && (
        <Section>
          <h3>Add Components</h3>
          {["input", "checkbox", "select", "textarea"].map((type) => (
            <Button key={type} onClick={() => addComponent(type as any)}>
              Add {type.charAt(0).toUpperCase() + type.slice(1)}
            </Button>
          ))}
        </Section>
      )}

      <Section>
        <div style={{ backgroundColor: bgColor }}>
          <h3>{mode === "edit" ? "Edit Form" : "Form Preview"}</h3>
          {formFields.length === 0 ? <p>No components added.</p> : formFields.map((field) => (
            <FormField
              key={field.id}
              field={field}
              mode={mode}
              updateField={updateField}
              removeField={removeField}
            />
          ))}
        </div>
      </Section>

      {popupContent && (
        <Popup>
          <p>{popupContent}</p>
          <Button onClick={() => setPopupContent(null)}>Close</Button>
        </Popup>
      )}
    </Container>
  );
};

export default DynamicFormBuilder;
