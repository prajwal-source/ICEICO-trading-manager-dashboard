import React, { useState, useRef } from "react";
import { X, Paperclip } from "lucide-react";
import CustomPopup from "../../../utils/CustomPopup";

export default function NotesPopup({ isOpen, onClose, onSave }) {
  const [note, setNote] = useState("");
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  return (
    <CustomPopup isOpen={isOpen} onClose={onClose} width="700px">
      <div className="bg-white border rounded-lg shadow-md overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-400">
          <h2 className="text-lg font-semibold">Notes</h2>
          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-red-600 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-2">
          <textarea
            placeholder="Enter the text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full h-32 resize-none border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-1"
          />

          {/* Attached files preview */}
          {files.length > 0 && (
            <div className="mt-2 space-y-1">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="text-sm text-gray-700 flex items-center justify-between bg-gray-100 px-2 py-1 rounded"
                >
                  <span className="truncate">{file.name}</span>
                  <button
                    onClick={() =>
                      setFiles(files.filter((_, i) => i !== index))
                    }
                    className="text-red-500 hover:text-red-600 text-xs"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-4 py-3 border-t bg-gray-50">
          <button
            disabled={!note.trim()}
            onClick={() => {
              onSave?.({ note, files });
              setNote("");
              setFiles([]);
              onClose();
            }}
            className={`px-4 py-2 rounded text-sm font-medium
              ${
                note.trim()
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
          >
            Save
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded text-sm font-medium bg-red-600 text-white hover:bg-red-700"
          >
            Cancel
          </button>

          {/* Paperclip */}
          <button
            onClick={() => fileInputRef.current.click()}
            className="p-2 rounded border border-gray-300 hover:bg-gray-100"
          >
            <Paperclip className="w-4 h-4 text-gray-600" />
          </button>

          {/* Hidden file input */}
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            multiple
            onChange={handleFileSelect}
          />
        </div>
      </div>
    </CustomPopup>
  );
}
