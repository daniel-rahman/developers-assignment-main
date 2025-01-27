import React, { useRef } from "react";

type CheckBoxProps = {
    label: string;
    onEdit?: (key: string, value: string) => void;
    onClick?: (label: string, action: string) => void; // Updated to accept action
};

const CheckBox: React.FC<CheckBoxProps> = ({ label, onEdit, onClick }) => {
    const actionRef = useRef<string>("popup"); // Default value for the select

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    onClick={() => onClick && onClick(label, actionRef.current)} // Pass the current ref value
                />{" "}
                {label}
            </label>
            {onEdit && (
                <>
                    <input
                        type="text"
                        placeholder="Label"
                        value={label}
                        onChange={(e) => onEdit("label", e.target.value)}
                    />
                    <select
                        onChange={(e) => {
                            actionRef.current = e.target.value; // Update the ref value on change
                            onEdit && onEdit("action", e.target.value);
                        }}
                    >
                        <option value="popup">Open Popup</option>
                        <option value="color">Change Color</option>
                    </select>
                </>
            )}
        </div>
    );
};

export default CheckBox;
