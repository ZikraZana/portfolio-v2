"use client"
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPlus, faImage, faSpinner } from '@fortawesome/free-solid-svg-icons'

export default function BlogManager() {
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(true)
    const [uploading, setUploading] = useState(false)

    const [formData, setFormData] = useState({
        title: '',
        excerpt: '',
        content: '',
        category: '',
        author: 'Zikra Zana', // Default author
        image: null
    })

    // Fetch Blogs
    const fetchBlogs = async () => {
        setLoading(true)
        const { data, error } = await supabase
            .from('blogs')
            .select('*')
            .order('created_at', { ascending: false })

        if (error) console.error('Error fetching blogs:', error)
        else setBlogs(data)
        setLoading(false)
    }

    useEffect(() => {
        fetchBlogs()
    }, [])

    // Handle Input
    const handleChange = (e) => {
        if (e.target.name === 'image') {
            setFormData({ ...formData, image: e.target.files[0] })
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value })
        }
    }

    // Handle Submit
    const handleSubmit = async (e) => {
        e.preventDefault()
        setUploading(true)

        try {
            let imageUrl = ''

            // Upload Image (Optional for Blog)
            if (formData.image) {
                const fileExt = formData.image.name.split('.').pop()
                const fileName = `blog-${Date.now()}.${fileExt}`
                const filePath = `${fileName}`

                const { error: uploadError } = await supabase.storage
                    .from('portfolio-images')
                    .upload(filePath, formData.image)

                if (uploadError) throw uploadError

                const { data: { publicUrl } } = supabase.storage
                    .from('portfolio-images')
                    .getPublicUrl(filePath)

                imageUrl = publicUrl
            }

            // Insert Data
            const { error: insertError } = await supabase
                .from('blogs')
                .insert([{
                    title: formData.title,
                    excerpt: formData.excerpt,
                    content: formData.content,
                    category: formData.category,
                    author: formData.author,
                    image_url: imageUrl
                }])

            if (insertError) throw insertError

            alert('Article published successfully!')
            setFormData({ title: '', excerpt: '', content: '', category: '', author: 'Zikra Zana', image: null })
            fetchBlogs()

        } catch (error) {
            alert('Error: ' + error.message)
        } finally {
            setUploading(false)
        }
    }

    // Handle Delete
    const handleDelete = async (id) => {
        if (!confirm('Are you sure you want to delete this article?')) return

        const { error } = await supabase.from('blogs').delete().eq('id', id)
        if (error) alert('Error deleting: ' + error.message)
        else fetchBlogs()
    }

    return (
        <div>
            <h2 className="text-xl font-bold mb-6 text-gray-800">Manage Blogs</h2>

            {/* --- FORM ADD BLOG --- */}
            <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-10 shadow-sm">
                <h3 className="font-bold text-gray-700 mb-4 text-sm uppercase tracking-wide">Write New Article</h3>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">Title</label>
                        <input
                            name="title" placeholder="Article Title" required
                            value={formData.title} onChange={handleChange}
                            className="p-3 rounded-lg border border-gray-300 w-full focus:ring-2 focus:ring-gray-200 focus:outline-none transition-all text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">Category</label>
                        <input
                            name="category" placeholder="e.g. Tech, Life, Tutorial" required
                            value={formData.category} onChange={handleChange}
                            className="p-3 rounded-lg border border-gray-300 w-full focus:ring-2 focus:ring-gray-200 focus:outline-none transition-all text-sm"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-xs font-medium text-gray-500 mb-1">Short Excerpt (Summary)</label>
                    <textarea
                        name="excerpt" placeholder="Short summary for preview card..." rows="2" required
                        value={formData.excerpt} onChange={handleChange}
                        className="p-3 rounded-lg border border-gray-300 w-full focus:ring-2 focus:ring-gray-200 focus:outline-none transition-all text-sm"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-xs font-medium text-gray-500 mb-1">Full Content</label>
                    <textarea
                        name="content" placeholder="Write your full article here..." rows="6" required
                        value={formData.content} onChange={handleChange}
                        className="p-3 rounded-lg border border-gray-300 w-full focus:ring-2 focus:ring-gray-200 focus:outline-none transition-all text-sm"
                    />
                </div>

                {/* Image Input */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-600 mb-2">Cover Image (Optional)</label>
                    <input
                        type="file" name="image" accept="image/*" onChange={handleChange}
                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-gray-900 file:text-white hover:file:bg-gray-700 cursor-pointer"
                    />
                </div>

                <button
                    type="submit" disabled={uploading}
                    className="bg-gray-900 text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-gray-800 disabled:opacity-50 w-full md:w-auto flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-gray-200"
                >
                    {uploading ? (
                        <>
                            <FontAwesomeIcon icon={faSpinner} className="!w-4 !h-4 animate-spin" /> Publishing...
                        </>
                    ) : (
                        <>
                            <FontAwesomeIcon icon={faPlus} className="!w-3 !h-3" /> Publish Article
                        </>
                    )}
                </button>
            </form>

            {/* --- LIST BLOGS --- */}
            <div>
                <h3 className="font-bold text-gray-700 mb-4 text-sm uppercase tracking-wide">Published Articles ({blogs.length})</h3>
                {loading ? <p className="text-sm text-gray-500">Loading articles...</p> : (
                    <div className="space-y-3">
                        {blogs.map((blog) => (
                            <div key={blog.id} className="flex items-center justify-between bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden shrink-0 border border-gray-200">
                                        {blog.image_url ? (
                                            <img src={blog.image_url} alt={blog.title} className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                                                <FontAwesomeIcon icon={faNewspaper} className="!w-6 !h-6" />
                                            </div>
                                        )}
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-gray-800 text-sm line-clamp-1">{blog.title}</h4>
                                        <p className="text-xs text-gray-500 line-clamp-1 mb-1">{blog.excerpt}</p>
                                        <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded border border-blue-100 font-medium">
                                            {blog.category}
                                        </span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleDelete(blog.id)}
                                    className="text-red-400 hover:text-red-600 hover:bg-red-50 p-2 rounded-lg transition-colors ml-2"
                                    title="Delete Article"
                                >
                                    <FontAwesomeIcon icon={faTrash} className="!w-4 !h-4" />
                                </button>
                            </div>
                        ))}
                        {blogs.length === 0 && (
                            <div className="text-center py-10 bg-white rounded-xl border border-dashed border-gray-300">
                                <p className="text-gray-400 text-sm">No articles yet. Write something inspiring!</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}