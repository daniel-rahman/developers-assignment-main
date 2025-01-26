import React from "react";
import TextInput from "./TextInput";
import CheckBox from "./CheckBox";
import DropDown from "./DropDown";
import TextArea from "./TextArea";

type FormField = {
    id: number;
    type: "input" | "checkbox" | "select" | "textarea";
    props: any;
};

type FormFieldProps = {
    field: FormField;
    mode: "edit" | "player";
    updateField: (id: number, key: string, value: any) => void;
    removeField?: (id: number) => void;
};

const COMPONENTS = {
    input: TextInput,
    checkbox: CheckBox,
    select: DropDown,
    textarea: TextArea,
};

const FormField: React.FC<FormFieldProps> = ({
    field,
    mode,
    updateField,
    removeField,
}) => {
    const Component = COMPONENTS[field.type];
    return (
        <div key={field.id} style={{ marginBottom: "10px" }}>
            <Component
                {...field.props}
                onEdit={
                    mode === "edit"
                        ? (key: string, value: any) => updateField(field.id, key, value)
                        : undefined
                }
            />
            {mode === "edit" && removeField && (
                <button onClick={() => removeField(field.id)} style={{ color: "red" }}>
                    Remove
                </button>
            )}
        </div>
    );
};

export default FormField;
