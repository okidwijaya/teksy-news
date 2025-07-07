// lib/upload-image.ts
export const uploadImageWithProgress = async (file: File, onProgress?: (progress: number) => void) => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    // Use your existing upload API route instead of direct Supabase client
    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Upload failed');
    }

    const data = await response.json();
    
    // Simulate progress completion since we don't have real progress tracking
    if (onProgress) {
      onProgress(100);
    }

    return { url: data.url };
  } catch (error) {
    console.error('Upload error:', error);
    throw error;
  }
};