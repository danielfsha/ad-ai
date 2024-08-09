"use client";

import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { IoIosCloudDownload } from "react-icons/io";

export default function ImageInput({ file, setFile }) {
  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className="h-[500px] w-[500px] bg-[#242323] border border-gray-800 rounded-lg object-cover flex items-center justify-center"
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <div>drop your image here</div>
      ) : (
        <div className="flex flex-col items-center justify-center pt-5 pb-6 text-gray-500">
          <IoIosCloudDownload
            size={32}
            className="mb-4 text-gray-500 dark:text-gray-400"
          />
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            Click to upload or drag and drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            SVG, PNG, JPG or GIF
          </p>
        </div>
      )}
    </div>
  );
}
