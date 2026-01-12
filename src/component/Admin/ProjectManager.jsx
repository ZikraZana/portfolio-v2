"use client"
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPlus, faImage, faSpinner } from '@fortawesome/free-solid-svg-icons'

export default function ProjectManager() {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
    const [uploading, setUploading] = useState(false)

    // Form State
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        tech_stack: '',
        demo_url: '',
        repo_url: '',
        image: null
    })

    // Fetch Projects
    const fetchProjects = async () => {
        setLoading(true)
        const { data, error } = await supabase
            .from('projects')
            .select('*')
            .order('created_at', { ascending: false })

        if (error) console.error('Error fetching projects:', error)
        else setProjects(data)
        setLoading(false)
    }

    useEffect(() => {
        fetchProjects()
    }, [])

    // --- HELPER: Parse Tech Stack (Pembersih Data) ---
    const parseTechStack = (stack) => {
        if (Array.isArray(stack)) return stack;
        if (typeof stack === 'string') {
            // Hapus [ ] { } dan " agar bersih
            const cleanString = stack.replace(/[\[\]"{}]/g, '');
            return cleanString.split(',').map(s => s.trim()).filter(s => s);
        }
        return [];
    };

    // Handle Input Change
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

            // A. Upload Image
            if (formData.image) {
                const fileExt = formData.image.name.split('.').pop()
                const fileName = `project-${Date.now()}.${fileExt}`
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

            // B. Insert Data
            const { error: insertError } = await supabase
                .from('projects')
                .insert([{
                    title: formData.title,
                    description: formData.description,
                    image_url: imageUrl,
                    // Simpan sebagai array murni
                    tech_stack: formData.tech_stack.split(',').map(t => t.trim()),
                    demo_url: formData.demo_url,
                    repo_url: formData.repo_url
                }])

            if (insertError) throw insertError

            alert('Project added successfully!')
            setFormData({ title: '', description: '', tech_stack: '', demo_url: '', repo_url: '', image: null })
            fetchProjects()

        } catch (error) {
            alert('Error: ' + error.message)
        } finally {
            setUploading(false)
        }
    }

    // Handle Delete
    const handleDelete = async (id) => {
        if (!confirm('Are you sure you want to delete this project?')) return

        const { error } = await supabase.from('projects').delete().eq('id', id)
        if (error) alert('Error deleting: ' + error.message)
        else fetchProjects()
    }

    return (
        <div>
            <h2 className="text-xl font-bold mb-6 text-gray-800">Manage Projects</h2>

            {/* --- FORM ADD PROJECT --- */}
            <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-10 shadow-sm">
                <h3 className="font-bold text-gray-700 mb-4 text-sm uppercase tracking-wide">Add New Project</h3>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">Project Title</label>
                        <input
                            name="title" placeholder="e.g. Personal Portfolio" required
                            value={formData.title} onChange={handleChange}
                            className="p-3 rounded-lg border border-gray-300 w-full focus:ring-2 focus:ring-gray-200 focus:outline-none transition-all text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">Tech Stack (comma separated)</label>
                        <input
                            name="tech_stack" placeholder="e.g. React, Next.js, Tailwind" required
                            value={formData.tech_stack} onChange={handleChange}
                            className="p-3 rounded-lg border border-gray-300 w-full focus:ring-2 focus:ring-gray-200 focus:outline-none transition-all text-sm"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-xs font-medium text-gray-500 mb-1">Description</label>
                    <textarea
                        name="description" placeholder="Describe your project..." rows="3" required
                        value={formData.description} onChange={handleChange}
                        className="p-3 rounded-lg border border-gray-300 w-full focus:ring-2 focus:ring-gray-200 focus:outline-none transition-all text-sm"
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <input
                        name="demo_url" placeholder="Live Demo URL (Optional)"
                        value={formData.demo_url} onChange={handleChange}
                        className="p-3 rounded-lg border border-gray-300 w-full text-sm"
                    />
                    <input
                        name="repo_url" placeholder="Repository URL (Optional)"
                        value={formData.repo_url} onChange={handleChange}
                        className="p-3 rounded-lg border border-gray-300 w-full text-sm"
                    />
                </div>

                {/* Image Input */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-600 mb-2">Project Cover Image</label>
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
                            <FontAwesomeIcon icon={faSpinner} className="!w-4 !h-4 animate-spin" /> Uploading...
                        </>
                    ) : (
                        <>
                            <FontAwesomeIcon icon={faPlus} className="!w-3 !h-3" /> Add Project
                        </>
                    )}
                </button>
            </form>

            {/* --- LIST PROJECTS --- */}
            <div>
                <h3 className="font-bold text-gray-700 mb-4 text-sm uppercase tracking-wide">Existing Projects ({projects.length})</h3>
                {loading ? <p className="text-sm text-gray-500">Loading projects...</p> : (
                    <div className="space-y-3">
                        {projects.map((project) => (
                            <div key={project.id} className="flex items-center justify-between bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                <div className="flex items-center gap-4">
                                    {/* Thumbnail Kecil */}
                                    <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden shrink-0 border border-gray-200">
                                        {project.image_url ? (
                                            <img src={project.image_url} alt={project.title} className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                                                <FontAwesomeIcon icon={faImage} className="!w-6 !h-6" />
                                            </div>
                                        )}
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-gray-800 text-sm">{project.title}</h4>
                                        <p className="text-xs text-gray-500 line-clamp-1 mb-1">{project.description}</p>

                                        {/* Render Tech Stack yang sudah BERSIH */}
                                        <div className="flex gap-1 flex-wrap">
                                            {parseTechStack(project.tech_stack).map((tech, i) => (
                                                <span key={i} className="text-[10px] bg-gray-100 px-2 py-0.5 rounded text-gray-600 border border-gray-200">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleDelete(project.id)}
                                    className="text-red-400 hover:text-red-600 hover:bg-red-50 p-2 rounded-lg transition-colors ml-2"
                                    title="Delete Project"
                                >
                                    <FontAwesomeIcon icon={faTrash} className="!w-4 !h-4" />
                                </button>
                            </div>
                        ))}
                        {projects.length === 0 && (
                            <div className="text-center py-10 bg-white rounded-xl border border-dashed border-gray-300">
                                <p className="text-gray-400 text-sm">No projects found. Add your first one!</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}