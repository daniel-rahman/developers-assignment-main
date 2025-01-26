import React from "react";

type CheckBoxProps = {
    label: string;
    onEdit?: (key: string, value: string) => void;
    onClick?: (label: string) => void;
};

const CheckBox: React.FC<CheckBoxProps> = ({ label, onEdit, onClick }) => (
    <div>
        <label>
            <input type="checkbox" onClick={() => onClick && onClick(label)} /> {label}
        </label>
        {onEdit && (
            <input
                type="text"
                placeholder="Label"
                value={label}
                onChange={(e) => onEdit("label", e.target.value)}
            />
        )}
    </div>
);

export default CheckBox;
