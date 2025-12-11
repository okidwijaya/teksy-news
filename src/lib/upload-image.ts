export const uploadImageWithProgress = async (
  file: File,
  onProgress?: (progress: number) => void
): Promise<{ url: string }> => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const formData = new FormData();
    formData.append("file", file);

    xhr.open("POST", `${process.env.NEXT_PUBLIC_API_CP}/upload_image/upload.php`);

    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable && onProgress) {
        const percent = Math.round((e.loaded / e.total) * 100);
        onProgress(percent);
      }
    };

    xhr.onload = () => {
      if (xhr.status === 200) {
        try {
          const data = JSON.parse(xhr.responseText);
          resolve({ url: data.url });
        } catch (err) {
          reject(err);
        }
      } else {
        reject("Upload error");
      }
    };

    xhr.onerror = () => reject("Failed to upload");
    xhr.send(formData);
  });
};
