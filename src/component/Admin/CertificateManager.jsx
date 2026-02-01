"use client"
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPlus, faSpinner, faAward, faThumbtack } from '@fortawesome/free-solid-svg-icons'

export default function CertificateManager() {
    const [certs, setCerts] = useState([])
    const [loading, setLoading] = useState(true)
    const [uploading, setUploading] = useState(false)

    const categories = [
        "Prestasi Lomba", 
        "Peserta Lomba", 
        "Kepanitiaan", 
        "Program/Bootcamp", 
        "Organisasi",
        "Lainnya"
    ]

    const [formData, setFormData] = useState({
        title: '',
        category: 'Prestasi Lomba', 
        description: '',
        image: null
    })

    // Fetch Data (Urutkan: Pinned dulu, baru tanggal terbaru)
    const fetchCerts = async () => {
        setLoading(true)
        const { data, error } = await supabase
            .from('certificates')
            .select('*')
            .order('is_pinned', { ascending: false }) // TRUE (Pinned) akan muncul duluan
            .order('created_at', { ascending: false })
        
        if (error) console.error('Error:', error)
        else setCerts(data)
        setLoading(false)
    }

    useEffect(() => {
        fetchCerts()
    }, [])

    const handleChange = (e) => {
        if (e.target.name === 'image') {
            setFormData({ ...formData, image: e.target.files[0] })
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setUploading(true)

        try {
            let imageUrl = ''

            if (formData.image) {
                const fileExt = formData.image.name.split('.').pop()
                const fileName = `cert-${Date.now()}.${fileExt}`
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

            const { error: insertError } = await supabase
                .from('certificates')
                .insert([{
                    title: formData.title,
                    category: formData.category,
                    description: formData.description,
                    image_url: imageUrl,
                    is_pinned: false // Default false
                }])

            if (insertError) throw insertError

            alert('Certificate added successfully!')
            setFormData({ title: '', category: 'Prestasi Lomba', description: '', image: null })
            document.getElementById('fileInput').value = ""
            fetchCerts()

        } catch (error) {
            alert('Error: ' + error.message)
        } finally {
            setUploading(false)
        }
    }

    // Toggle Pin Function
    const handleTogglePin = async (id, currentStatus) => {
        const { error } = await supabase
            .from('certificates')
            .update({ is_pinned: !currentStatus })
            .eq('id', id);
        
        if (error) {
            alert("Failed to update pin status");
        } else {
            fetchCerts(); // Refresh list agar urutan berubah
        }
    };

    const handleDelete = async (id) => {
        if (!confirm('Delete this certificate?')) return
        const { error } = await supabase.from('certificates').delete().eq('id', id)
        if (!error) fetchCerts()
    }

    return (
        <div>
            <h2 className="text-xl font-bold mb-6 text-gray-800">Manage Certificates</h2>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-10 shadow-sm">
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">Title</label>
                        <input 
                            name="title" placeholder="e.g. Juara 1 Web Design" required
                            value={formData.title} onChange={handleChange}
                            className="p-3 rounded-lg border border-gray-300 w-full text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">Category</label>
                        <select 
                            name="category" 
                            value={formData.category} onChange={handleChange}
                            className="p-3 rounded-lg border border-gray-300 w-full text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
                        >
                            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                        </select>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-xs font-medium text-gray-500 mb-1">Description</label>
                    <textarea 
                        name="description" placeholder="Short description..." rows="2"
                        value={formData.description} onChange={handleChange}
                        className="p-3 rounded-lg border border-gray-300 w-full text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-600 mb-2">Certificate Image</label>
                    <input 
                        id="fileInput"
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
                            <FontAwesomeIcon icon={faPlus} className="!w-3 !h-3" /> Add Certificate
                        </>
                    )}
                </button>
            </form>

            {/* LIST */}
            <div className="space-y-3">
                {certs.map((cert) => (
                    <div key={cert.id} className={`flex items-center justify-between bg-white p-4 rounded-xl border shadow-sm transition-all ${cert.is_pinned ? 'border-blue-300 bg-blue-50/30' : 'border-gray-100'}`}>
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden shrink-0 border border-gray-200 flex items-center justify-center relative">
                                {cert.image_url ? (
                                    <img src={cert.image_url} className="w-full h-full object-cover" />
                                ) : (
                                    <FontAwesomeIcon icon={faAward} className="!w-6 !h-6 text-gray-400" />
                                )}
                                {/* Badge Pinned Kecil di gambar */}
                                {cert.is_pinned && (
                                    <div className="absolute top-0 right-0 bg-blue-500 p-1 rounded-bl-lg">
                                        <FontAwesomeIcon icon={faThumbtack} className="!w-2 !h-2 text-white transform rotate-45" />
                                    </div>
                                )}
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800 text-sm line-clamp-1 flex items-center gap-2">
                                    {cert.title}
                                </h4>
                                <span className="text-[10px] bg-white text-gray-600 px-2 py-0.5 rounded border border-gray-200 font-medium">
                                    {cert.category}
                                </span>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                            {/* PIN BUTTON */}
                            <button 
                                onClick={() => handleTogglePin(cert.id, cert.is_pinned)}
                                className={`p-2 rounded-lg transition-colors ${cert.is_pinned ? 'text-blue-600 bg-blue-100 hover:bg-blue-200' : 'text-gray-300 hover:text-gray-500 hover:bg-gray-100'}`}
                                title={cert.is_pinned ? "Unpin Certificate" : "Pin to Top"}
                            >
                                <FontAwesomeIcon icon={faThumbtack} className={`!w-4 !h-4 transform ${cert.is_pinned ? 'rotate-45' : ''}`} />
                            </button>

                            {/* DELETE BUTTON */}
                            <button 
                                onClick={() => handleDelete(cert.id)} 
                                className="text-red-400 hover:text-red-600 hover:bg-red-50 p-2 rounded-lg transition-colors"
                                title="Delete Certificate"
                            >
                                <FontAwesomeIcon icon={faTrash} className="!w-4 !h-4" />
                            </button>
                        </div>
                    </div>
                ))}
                {certs.length === 0 && (
                    <div className="text-center py-10 bg-white rounded-xl border border-dashed border-gray-300">
                        <p className="text-gray-400 text-sm">No certificates yet. Add one above!</p>
                    </div>
                )}
            </div>
        </div>
    )
}