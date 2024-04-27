import React, { useRef } from "react";
import { Toast } from "primereact/toast";
import { FileUpload } from "primereact/fileupload";
import axiosInstance from "../config/axiosInstance";

function CustomFileUpload({ setData, setIsLoading }) {
  const toast = useRef(null);

  const onUpload = async (event) => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("excelFile", event.files[0]);

    try {
      const response = await axiosInstance({
        method: "POST",
        data: formData,
        url: "upload",
      });
      setData(response?.data);

      if (response.status === 200) {
        toast.current.show({
          severity: "info",
          summary: "Success",
          detail: "File Uploaded",
        });
      } else {
        throw new Error("Failed to upload file");
      }
    } catch (error) {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: error.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Toast ref={toast}></Toast>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1>Mariraja Selvakumar</h1>
        <FileUpload
          mode="basic"
          name="file-upload"
          accept="*"
          maxFileSize={1000000}
          onSelect={onUpload}
        />
      </div>
    </>
  );
}

export default CustomFileUpload;
