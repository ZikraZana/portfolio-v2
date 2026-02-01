"use client"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faLayerGroup, faNewspaper, faUserCircle, faAward } from '@fortawesome/free-solid-svg-icons'

import ProjectManager from '@/component/Admin/ProjectManager'
import BlogManager from '@/component/Admin/BlogManager'
import CertificateManager from '@/component/Admin/CertificateManager'

export default function AdminDashboard() {
    const router = useRouter()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [activeTab, setActiveTab] = useState('projects')

    useEffect(() => {
        const checkUser = async () => {
            const { data: { user } } = await supabase.auth.getUser()
            if (!user) {
                router.push('/login')
            } else {
                setUser(user)
            }
            setLoading(false)
        }
        checkUser()
    }, [router])

    const handleLogout = async () => {
        await supabase.auth.signOut()
        router.push('/login')
    }

    if (loading) return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-500">
            <span className="loading loading-spinner loading-lg"></span>
            <p className="mt-4 text-sm font-medium">Verifying access...</p>
        </div>
    )

    return (
        <div className="min-h-screen bg-gray-50 font-poppins">
            {/* Navbar Admin */}
            <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">

                        {/* Kiri: Logo & User Info */}
                        <div className="flex items-center gap-4">
                            <div className="bg-gray-900 text-white p-2 rounded-lg flex items-center justify-center">
                                {/* FIX: Tambahkan !w-5 !h-5 */}
                                <FontAwesomeIcon icon={faUserCircle} className="!w-5 !h-5" />
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-lg font-bold text-gray-800 leading-none">Admin Dashboard</h1>
                                <p className="text-xs text-gray-500 mt-1">{user?.email}</p>
                            </div>
                        </div>

                        {/* Kanan: Logout Button */}
                        <button
                            onClick={handleLogout}
                            className="group flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-all duration-200"
                        >
                            <span>Logout</span>
                            {/* FIX: Tambahkan !w-4 !h-4 */}
                            <FontAwesomeIcon icon={faSignOutAlt} className="!w-4 !h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                {/* Tabs Navigation */}
                <div className="flex space-x-1 bg-gray-200/50 p-1 rounded-xl w-fit mb-8 border border-gray-200">
                    <button
                        onClick={() => setActiveTab('projects')}
                        className={`px-6 py-2.5 text-sm font-semibold rounded-lg flex items-center gap-2 transition-all duration-200 ${activeTab === 'projects'
                            ? 'bg-white text-gray-900 shadow-sm'
                            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'
                            }`}
                    >
                        {/* FIX: Tambahkan !w-4 !h-4 */}
                        <FontAwesomeIcon icon={faLayerGroup} className="!w-4 !h-4" />
                        Projects
                    </button>
                    <button
                        onClick={() => setActiveTab('blogs')}
                        className={`px-6 py-2.5 text-sm font-semibold rounded-lg flex items-center gap-2 transition-all duration-200 ${activeTab === 'blogs'
                            ? 'bg-white text-gray-900 shadow-sm'
                            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'
                            }`}
                    >
                        {/* FIX: Tambahkan !w-4 !h-4 */}
                        <FontAwesomeIcon icon={faNewspaper} className="!w-4 !h-4" />
                        Blogs
                    </button>
                    <button
                        onClick={() => setActiveTab('certificates')}
                        className={`px-6 py-2.5 text-sm font-semibold rounded-lg flex items-center gap-2 transition-all duration-200 ${activeTab === 'certificates'
                            ? 'bg-white text-gray-900 shadow-sm'
                            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'
                            }`}
                    >
                        <FontAwesomeIcon icon={faAward} className="!w-4 !h-4" />
                        Certificates
                    </button>
                </div>

                {/* Dynamic Content Area */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 min-h-[600px]">
                    {activeTab === 'projects' && <ProjectManager />}
                    {activeTab === 'blogs' && <BlogManager />}
                    {activeTab === 'certificates' && <CertificateManager />}
                </div>

            </main>
        </div>
    )
}