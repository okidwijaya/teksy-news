'use client';
import React, { useState, useEffect, useRef, use } from 'react';
import dynamic from 'next/dynamic';
import { uploadImageWithProgress } from '@/lib/upload-image';
import Image from 'next/image';
import { BlogPost, Tag } from '@/types';
import axios from 'axios';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), {
    ssr: false,
    loading: () => <div className="h-80 bg-gray-100 animate-pulse rounded">Loading editor...</div>
});

const Page: React.FC = () => {
    const [formData, setFormData] = useState<BlogPost>({
        title: '',
        content: '',
        summary: '',
        publishDate: '',
        status: 'draft',
        pageTitle: '',
        metaDescription: '',
        urlHandle: '',
        categoryId: 'cat-tech-001',
        keywords: '',
        featuredImageUrl: '',
        isFeatured: false,
        views: 0,
        readingTime: 2,
        authorId: 'auth-001',
    });
    // allowComments: true,

    const [imagePreview, setImagePreview] = useState<string>('');
    const [tags, setTags] = useState<Tag[]>([]);
    const [tagInput, setTagInput] = useState('');
    const [isTagFetchingFailed, setTagFetchingFailed] = useState<Boolean>(false);
    const [tagIdCounter, setTagIdCounter] = useState(0);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);

    useEffect(() => {
        const now = new Date();
        const localDateTime = now.toISOString().slice(0, 16);
        setFormData(prev => ({ ...prev, publishDate: localDateTime }));
    }, []);

    const submitTagsSequentially = async (id: string) => {
        const apiEndpoint = `${process.env.NEXT_PUBLIC_API_CP}/api/v1/blog/article/tag`;

        if (!tags || tags.length === 0) {
            return;
        }

        for (const tag of tags) {
            const tagText = tag.text;
            try {
                const response = await axios.post(apiEndpoint, {
                    article_id: id,
                    tag: tagText,
                });
                // id: tagText.toLowerCase().replace(/[\s\.\,]/g, "-"),
            } catch (error: any) {
                const errorMessage = error.response
                    ? `Status ${error.response.status}: ${error.response.data.message || 'API error occurred'}`
                    : error.message;
                console.error(`${tagText}, ${errorMessage}`);
                setTagFetchingFailed(true);
            }
        }
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const validTypes = ["image/jpeg", "image/png", "image/webp"];
        const maxSizeMB = 5;

        if (!validTypes.includes(file.type)) {
            alert("Only JPG, PNG, or WEBP allowed.");
            return;
        }

        if (file.size > maxSizeMB * 1024 * 1024) {
            alert(`File size must be under ${maxSizeMB}MB.`);
            return;
        }

        const ext = file.name.split('.').pop();
        const friendlyName = "artImg";
        const newFile = new File([file], `${friendlyName}.${ext}`, { type: file.type });

        setImageFile(newFile)

        const reader = new FileReader();
        reader.onload = (event) => setImagePreview(event.target?.result as string);
        reader.readAsDataURL(newFile);
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            setIsSubmitting(true);
            let featuredImageUrl = '';
            if (imageFile) {
                const uploadRes = await uploadImageWithProgress(imageFile, setUploadProgress);
                featuredImageUrl = uploadRes.url;
            }

            const payload = {
                title: formData.title,
                slug: formData.urlHandle,
                content: formData.content,
                excerpt: formData.summary,
                featured_image: featuredImageUrl,
                category_id: formData.categoryId,
                author_id: formData.authorId,
                published_at: formData.publishDate,
                meta_title: formData.pageTitle,
                meta_description: formData.metaDescription,
                keywords: formData.keywords,
                status: formData.status,
                is_featured: formData.isFeatured ? 1 : 0,
                views: formData.views,
                reading_time: formData.readingTime,
            };
            // allow_comments: formData.allowComments ? 1 : 0

            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_API_CP}/api/v1/blog/articles`,
                payload,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            setFormData({
                title: '',
                content: '',
                summary: '',
                publishDate: new Date().toISOString().slice(0, 16),
                status: 'draft',
                pageTitle: '',
                metaDescription: '',
                urlHandle: '',
                categoryId: 'cat-tech-001',
                keywords: '',
                featuredImageUrl: '',
                isFeatured: false,
                views: 0,
                readingTime: 2,
                authorId: 'auth-001',
                category: ''
            });
            // allowComments: true,
            setTags([]);
            setImagePreview('');
            setUploadProgress(0);

            alert('Article created successfully!');

            submitTagsSequentially(response.data.result.articleid);

        } catch (error) {
            alert('Error creating article: ' + (error instanceof Error ? error.message : 'Unknown error'));
        } finally {
            setIsSubmitting(false);
            setTagFetchingFailed(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;

        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData(prev => ({ ...prev, [name]: checked }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleContentChange = (content?: string) => {
        setFormData(prev => ({ ...prev, content: content || '' }));
    };

    const removeImage = () => {
        setImageFile(null)
        setImagePreview('');
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const addTag = () => {
        const tagText = tagInput.trim();

        if (!tagText) return;

        if (tags.length >= 20) {
            alert('Maximum 20 tags allowed');
            return;
        }

        const existingTag = tags.find(tag =>
            tag.text.toLowerCase() === tagText.toLowerCase()
        );

        if (existingTag) {
            alert('Tag already exists');
            return;
        }

        const newTag: Tag = {
            id: tagIdCounter,
            text: tagText
        };

        setTags(prev => [...prev, newTag]);
        setTagIdCounter(prev => prev + 1);
        setTagInput('');
    };

    const removeTag = (id: number) => {
        setTags(prev => prev.filter(tag => tag.id !== id));
    };

    const clearAllTags = () => {
        if (tags.length === 0) return;

        if (confirm('Are you sure you want to clear all tags?')) {
            setTags([]);
        }
    };

    const handleTagKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addTag();
        }
    };

    const saveDraft = async () => {
        const draftData = {
            ...formData,
            status: 'draft' as const,
            tags: tags.map(tag => tag.text)
        };

        try {
            const res = await fetch('/api/article', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(draftData),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || 'Failed to save draft');
            }

            alert('Draft saved successfully!');
        } catch (error) {
            alert('Error saving draft: ' + (error instanceof Error ? error.message : 'Unknown error'));
        }
    };

    const getSummaryCount = () => formData.summary.length;
    const getTitleCount = () => formData.pageTitle.length;
    const getDescriptionCount = () => formData.metaDescription.length;
    const getTagInputCount = () => tagInput.length;

    const handleLogout = async () => {
    };

    return (
        <main className="max-w-4xl mx-auto p-6">
            {uploadProgress > 0 && uploadProgress < 100 && (
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-3">
                    <div
                        className="bg-green-500 h-2.5 rounded-full"
                        style={{ width: `${uploadProgress}%` }}
                    ></div>
                </div>
            )}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
                <button className="mb-6 mr-0 ml-auto block w-full text-sm py-2 px-3 rounded-xl font-semibold bg-red-700 text-white hover:bg-red-800 max-w-28 text-center" onClick={handleLogout}>
                    Logout
                </button>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                            Title <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            required
                            value={formData.title}
                            onChange={handleInputChange}
                            placeholder="Enter your blog post title..."
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F96E2A] focus:border-[#F96E2A] outline-none"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Content
                        </label>
                        <div className="h-80">
                            <MDEditor
                                value={formData.content}
                                onChange={handleContentChange}
                                preview="edit"
                                height={300}
                                className='h-64'
                                data-color-mode="light"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Tags <span className="text-gray-500 font-normal">({tags.length}/20)</span>
                        </label>
                        <div className="flex gap-2 mb-3">
                            <div className="relative flex-1">
                                <input
                                    type="text"
                                    value={tagInput}
                                    onChange={(e) => setTagInput(e.target.value)}
                                    onKeyPress={handleTagKeyPress}
                                    placeholder="Add a tag..."
                                    maxLength={50}
                                    className="w-full px-3 py-2 pr-12 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F96E2A] focus:border-[#F96E2A] outline-none"
                                />
                                <span className={`absolute right-2 top-2 text-xs ${getTagInputCount() > 40 ? 'text-red-500' : 'text-gray-400'
                                    }`}>
                                    {getTagInputCount()}/50
                                </span>
                            </div>
                            <button
                                type="button"
                                onClick={addTag}
                                className="cursor-pointer px-4 py-2 bg-[#F96E2A] text-white rounded-md hover:bg-[#F96E2A] focus:ring-2 focus:ring-[#F96E2A]"
                            >
                                Add
                            </button>
                            <button
                                type="button"
                                onClick={clearAllTags}
                                disabled={tags.length === 0}
                                className="cursor-pointer px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 focus:ring-2 focus:ring-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Clear All
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag) => (
                                <span
                                    key={tag.id}
                                    className="inline-flex items-center gap-1 px-2 py-1 bg-[#F96E2A] text-blue-[#F96E2A] rounded-full text-sm"
                                >
                                    {tag.text}
                                    <button
                                        type="button"
                                        onClick={() => removeTag(tag.id)}
                                        className="cursor-pointer w-4 h-4 flex items-center justify-center rounded-full hover:bg-[#F96E2A] transition-colors"
                                        title="Remove tag"
                                    >
                                        ×
                                    </button>
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Featured Image
                        </label>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-gray-400 transition-colors">
                            <div className="space-y-1 text-center">
                                <svg
                                    className="mx-auto h-12 w-12 text-gray-400"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 48 48"
                                >
                                    <path
                                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <div className="flex text-sm text-gray-600">
                                    <label
                                        htmlFor="featuredImage"
                                        className="relative cursor-pointer bg-white rounded-md font-medium text-blue-[#F96E2A] hover:text-[#F96E2A] focus-within:outline-none focus-within:ring-2 focus-within:ring-[#F96E2A]"
                                    >
                                        <span>Upload a file</span>
                                        <input
                                            ref={fileInputRef}
                                            id="featuredImage"
                                            name="featuredImage"
                                            type="file"
                                            className="sr-only"
                                            accept="image/*"
                                            onChange={handleImageUpload}
                                        />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs text-gray-500">
                                    PNG, JPG, GIF up to 10MB
                                </p>
                            </div>
                        </div>
                        {imagePreview && (
                            <div className="mt-3">
                                <Image
                                    width={100}
                                    height={100}
                                    src={imagePreview}
                                    alt="Preview"
                                    className="h-28 w-28 object-cover rounded-md"
                                />
                                <button
                                    type="button"
                                    onClick={removeImage}
                                    className="cursor-pointer mt-2 text-sm text-red-600 hover:text-red-800"
                                >
                                    Remove image
                                </button>
                            </div>
                        )}

                        {imagePreview && (
                            <button
                                type="button"
                                className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md"
                                onClick={async () => {
                                    if (!imageFile) return alert("No file selected");

                                    try {
                                        setUploadedUrl(null);
                                        const result = await uploadImageWithProgress(
                                            imageFile,
                                            (p) => setUploadProgress(p)
                                        );

                                        setUploadedUrl(result.url);
                                        setFormData(prev => ({ ...prev, featuredImageUrl: result.url }));

                                    } catch (error) {
                                        alert("Upload failed");
                                    }
                                }}
                            >
                                Submit Upload
                            </button>
                        )}

                        {uploadProgress > 0 && uploadProgress < 100 && (
                            <p className="mt-2 text-sm text-blue-600">
                                Uploading... {uploadProgress}%
                            </p>
                        )}

                        {uploadedUrl && (
                            <div className="mt-3 text-green-600 text-sm">
                                Uploaded Successfully!
                                <a href={uploadedUrl} target="_blank" className="underline ml-1">
                                    View Image
                                </a>
                            </div>
                        )}

                    </div>

                    <div>
                        <label htmlFor="summary" className="block text-sm font-medium text-gray-700 mb-2">
                            Summary / Excerpt
                            <span className="text-gray-500 font-normal"> (optional)</span>
                        </label>
                        <textarea
                            id="summary"
                            name="summary"
                            rows={3}
                            value={formData.summary}
                            onChange={handleInputChange}
                            placeholder="Brief summary of your blog post..."
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F96E2A] focus:border-[#F96E2A] outline-none resize-none"
                            maxLength={300}
                        />
                        <div className={`mt-1 text-xs ${getSummaryCount() > 250 ? 'text-orange-500' :
                            getSummaryCount() > 280 ? 'text-red-500' : 'text-gray-500'
                            }`}>
                            <span>{getSummaryCount()}</span> of 300 characters
                        </div>
                    </div>

                    {/* Author Name */}
                    {/* <div className='hidden'>
                        <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-2">
                            Author Name
                        </label>
                        <input
                            type="text"
                            id="author"
                            name="author"
                            value={formData.author}
                            onChange={handleInputChange}
                            placeholder="Enter author name..."
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F96E2A] focus:border-[#F96E2A] outline-none"
                        />
                    </div> */}

                    <div>
                        <label htmlFor="publishDate" className="block text-sm font-medium text-gray-700 mb-2">
                            Publish Date
                            <span className="text-gray-500 font-normal">
                                {formData.status === 'scheduled' ? ' (required for scheduled posts)' : ' (optional)'}
                            </span>
                        </label>
                        <input
                            type="datetime-local"
                            id="publishDate"
                            name="publishDate"
                            value={formData.publishDate}
                            onChange={handleInputChange}
                            required={formData.status === 'scheduled'}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F96E2A] focus:border-[#F96E2A] outline-none"
                        />
                        <p className="mt-1 text-xs text-gray-500">
                            Leave empty to publish immediately
                        </p>
                    </div>

                    <div>
                        <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
                            Status
                        </label>
                        <select
                            id="status"
                            name="status"
                            value={formData.status}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F96E2A] focus:border-[#F96E2A] outline-none"
                        >
                            <option value="draft">Draft</option>
                            <option value="published">Publish</option>
                            <option value="archived">Archived</option>
                        </select>
                    </div>

                    {/* <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="allowComments"
                            name="allowComments"
                            checked={formData.allowComments}
                            onChange={handleInputChange}
                            className="h-4 w-4 text-blue-[#F96E2A] focus:ring-[#F96E2A] border-gray-300 rounded"
                        />
                        <label htmlFor="allowComments" className="ml-2 block text-sm text-gray-700">
                            Allow Comments
                        </label>
                    </div> */}

                    <div className="bg-white rounded-lg p-0">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold text-gray-900">
                                Search engine listing
                            </h2>
                        </div>

                        <p className="text-gray-600 text-sm mb-6">
                            Add a title and description to see how this product might
                            appear in a search engine listing
                        </p>

                        <div className="mb-6">
                            <label htmlFor="pageTitle" className="block text-sm font-medium text-gray-700 mb-2">
                                Page title
                            </label>
                            <input
                                type="text"
                                id="pageTitle"
                                name="pageTitle"
                                value={formData.pageTitle}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F96E2A] focus:border-[#F96E2A] outline-none"
                                maxLength={70}
                            />
                            <div className={`mt-1 text-xs ${getTitleCount() > 60 ? 'text-orange-500' :
                                getTitleCount() > 65 ? 'text-red-500' : 'text-gray-500'
                                }`}>
                                <span>{getTitleCount()}</span> of 70 characters used
                            </div>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="metaDescription" className="block text-sm font-medium text-gray-700 mb-2">
                                Meta description
                            </label>
                            <textarea
                                id="metaDescription"
                                name="metaDescription"
                                rows={4}
                                value={formData.metaDescription}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F96E2A] focus:border-[#F96E2A] outline-none resize-none"
                                maxLength={160}
                            />
                            <div className={`mt-1 text-xs ${getDescriptionCount() > 140 ? 'text-orange-500' :
                                getDescriptionCount() > 150 ? 'text-red-500' : 'text-gray-500'
                                }`}>
                                <span>{getDescriptionCount()}</span> of 160 characters used
                            </div>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="urlHandle" className="block text-sm font-medium text-gray-700 mb-2">
                                URL handle
                            </label>
                            <div className="flex">
                                <input
                                    type="text"
                                    id="urlHandle"
                                    name="urlHandle"
                                    value={formData.urlHandle}
                                    onChange={handleInputChange}
                                    className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-[#F96E2A] focus:border-[#F96E2A] outline-none"
                                />
                            </div>
                            <div className="mt-1 text-xs text-gray-500">
                                https://yourstore.com/article
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
                        <button
                            type="button"
                            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#F96E2A]"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            onClick={saveDraft}
                            className="cursor-pointer px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F96E2A]"
                        >
                            Save Draft
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 text-sm font-medium text-white bg-[#F96E2A] border border-transparent rounded-md hover:bg-[#F96E2A] focus:outline-none focus:ring-2 focus:ring-[#F96E2A] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Creating...' : 'Create Post'}
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default Page;
