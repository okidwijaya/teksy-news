import React from "react";
import { Upload } from "lucide-react";

interface MediaUploadProps {
  value: string[];
  onChange: (value: string[]) => void;
}

export const MediaUpload: React.FC<MediaUploadProps> = ({ value, onChange }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    // Simulate upload and return file URLs (replace this with actual upload logic)
    const uploaded = Array.from(files).map((file) => URL.createObjectURL(file));

    onChange([...value, ...uploaded]);
  };

  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-4" aria-hidden="true" />
      <div className="space-y-2">
        <label className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer">
          Upload new
          <input
            type="file"
            multiple
            accept="image/*,video/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
        <span className="text-gray-500 mx-2">or</span>
        <button
          className="text-blue-600 hover:text-blue-800 font-medium"
          onClick={() => alert("Select from existing media (not implemented)")}
        >
          Select existing
        </button>
      </div>

      {value.length > 0 && (
        <div className="mt-4 grid grid-cols-3 gap-4">
          {value.map((url, idx) => (
            <img
              key={idx}
              src={url}
              alt={`uploaded-${idx}`}
              className="w-full h-24 object-cover rounded"
            />
          ))}
        </div>
      )}

      <p className="text-sm text-gray-500 mt-2">Accepts images, videos, or 3D models</p>
    </div>
  );
};
