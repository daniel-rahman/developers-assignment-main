import React from "react";

type TextAreaProps = {
    placeholder: string;
    width: string;
    borderColor: string;
    onEdit?: (key: string, value: string) => void;
};

const TextArea: React.FC<TextAreaProps> = ({
    placeholder,
    width,
    borderColor,
    onEdit,
}) => (
    <div>
        <textarea
            placeholder={placeholder}
            style={{ width, borderColor }}
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
                <select
                    value={borderColor}
                    onChange={(e) => onEdit("borderColor", e.target.value)}
                >
                    <option value="blue">Blue</option>
                    <option value="red">Red</option>
                    <option value="black">Black</option>
                </select>
            </>
        )}
    </div>
);

export default TextArea;
