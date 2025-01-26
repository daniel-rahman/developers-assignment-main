import React from "react";

type TextInputProps = {
    placeholder: string;
    width: string;
    onEdit?: (key: string, value: string) => void;
};

const TextInput: React.FC<TextInputProps> = ({ placeholder, width, onEdit }) => (
    <div>
        <input
            type="text"
            placeholder={placeholder}
            style={{ width }}
            onChange={(e) => onEdit && onEdit("placeholder", e.target.value)}
        />
        {onEdit && (
            <>
                <input
                    type="text"
                    placeholder="Placeholder"
                    value={placeholder}
                    onChange={(e) => onEdit("placeholder", e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Width"
                    value={parseInt(width, 10)}
                    onChange={(e) => onEdit("width", `${e.target.value}px`)}
                />
            </>
        )}
    </div>
);

export default TextInput;
