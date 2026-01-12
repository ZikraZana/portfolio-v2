"use client"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'

export default function AdminDashboard() {
    const router = useRouter()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Cek apakah user sedang login
        const checkUser = async () => {
            const { data: { user } } = await supabase.auth.getUser()

            if (!user) {
                // Jika tidak ada user, tendang kembali ke login
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

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>
    }

    return (
        <div className="min-h-screen bg-gray-100 p-10">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                    >
                        Logout
                    </button>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h2 className="text-xl font-bold mb-4">Welcome back, Admin!</h2>
                    <p className="text-gray-600">You are logged in as: <strong>{user?.email}</strong></p>
                    <p className="mt-4 text-sm text-gray-500">
                        CRUD features for Projects & Blogs will be implemented here soon.
                    </p>
                </div>
            </div>
        </div>
    )
}