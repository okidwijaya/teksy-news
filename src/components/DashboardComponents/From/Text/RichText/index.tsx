import React from "react";
import {
    Bold,
    Italic,
    Underline,
    AlignLeft,
    Link,
    Image as ImageIcon,
    List,
    MoreHorizontal,
    Code,
} from "lucide-react";
import { FormDataProduct } from "@/lib/productInterface";

interface TextEditorProps {
    value: FormDataProduct;
    onChange: (field: keyof FormDataProduct, value: string | boolean) => void;
}

export const TextEditor: React.FC<TextEditorProps> = ({ value, onChange }) => {
    return (
        <div className="border border-gray-300 rounded-md">
            <div className="flex items-center gap-2 p-2 border-b border-gray-200 bg-gray-50">
                <select
                    className="text-sm border-none bg-transparent"
                    value={value.format}
                    onChange={(e) => onChange("format", e.target.value)}
                >
                    <option value="paragraph">Paragraph</option>
                    <option value="heading1">Heading 1</option>
                    <option value="heading2">Heading 2</option>
                </select>

                <div className="w-px h-4 bg-gray-300"></div>

                <button
                    className={`p-1 hover:bg-gray-200 rounded ${value.isBold ? "bg-gray-200" : ""}`}
                    onClick={() => onChange("isBold", !value.isBold)}
                >
                    <Bold className="w-4 h-4" />
                </button>

                <button
                    className={`p-1 hover:bg-gray-200 rounded ${value.isItalic ? "bg-gray-200" : ""}`}
                    onClick={() => onChange("isItalic", !value.isItalic)}
                >
                    <Italic className="w-4 h-4" />
                </button>

                <button
                    className={`p-1 hover:bg-gray-200 rounded ${value.isUnderline ? "bg-gray-200" : ""}`}
                    onClick={() => onChange("isUnderline", !value.isUnderline)}
                >
                    <Underline className="w-4 h-4" />
                </button>

                <div className="w-px h-4 bg-gray-300"></div>

                <button
                    className={`p-1 hover:bg-gray-200 rounded ${value.alignment === "left" ? "bg-gray-200" : ""}`}
                    onClick={() => onChange("alignment", "left")}
                >
                    <AlignLeft className="w-4 h-4" />
                </button>

                <div className="w-px h-4 bg-gray-300"></div>

                <button
                    className="p-1 hover:bg-gray-200 rounded"
                    onClick={() => onChange("showLinkDialog", true)}
                >
                    <Link className="w-4 h-4" />
                </button>

                <button
                    className="p-1 hover:bg-gray-200 rounded"
                    onClick={() => onChange("showImageDialog", true)}
                >
                    <ImageIcon className="w-4 h-4" />
                </button>

                <button
                    className={`p-1 hover:bg-gray-200 rounded ${value.isList ? "bg-gray-200" : ""}`}
                    onClick={() => onChange("isList", !value.isList)}
                >
                    <List className="w-4 h-4" />
                </button>

                <button className="p-1 hover:bg-gray-200 rounded">
                    <MoreHorizontal className="w-4 h-4" />
                </button>

                <div className="w-px h-4 bg-gray-300"></div>

                <button
                    className={`p-1 hover:bg-gray-200 rounded ${value.isCode ? "bg-gray-200" : ""}`}
                    onClick={() => onChange("isCode", !value.isCode)}
                >
                    <Code className="w-4 h-4" />
                </button>
            </div>

            <textarea
                className="w-full p-3 min-h-[128px] border-none resize-none focus:outline-none"
                placeholder="Enter product description..."
                value={value.description}
                onChange={(e) => onChange("description", e.target.value)}
            />
        </div>
    );
};
