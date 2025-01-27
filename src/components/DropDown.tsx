import React, { useRef } from "react";

type DropDownProps = {
    options: string[];
    onEdit?: (key: string, value: string[] | string) => void;
    onClick?: (selected: string, action: string) => void; // Updated to include action
};

const DropDown: React.FC<DropDownProps> = ({ options, onEdit, onClick }) => {
    const actionRef = useRef<string>("popup"); // Default value for the select

    return (
        <div>
            <select
                onChange={(e) =>
                    onClick && onClick(e.target.value, actionRef.current) // Pass the action from ref
                }
            >
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {onEdit && (
                <>
                    <textarea
                        placeholder="Options (comma-separated)"
                        value={options.join(", ")}
                        onChange={(e) => onEdit("options", e.target.value.split(", "))}
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

export default DropDown;
