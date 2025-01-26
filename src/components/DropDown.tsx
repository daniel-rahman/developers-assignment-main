import React from "react";

type DropDownProps = {
    options: string[];
    onEdit?: (key: string, value: string[]) => void;
    onClick?: (selected: string) => void;
};

const DropDown: React.FC<DropDownProps> = ({ options, onEdit, onClick }) => (
    <div>
        <select
            onChange={(e) => onClick && onClick(e.target.value)}
        >
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
        {onEdit && (
            <textarea
                placeholder="Options (comma-separated)"
                value={options.join(", ")}
                onChange={(e) => onEdit("options", e.target.value.split(", "))}
            />
        )}
    </div>
);

export default DropDown;
