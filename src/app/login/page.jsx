"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faSpinner } from '@fortawesome/free-solid-svg-icons'

export default function LoginPage() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)

    const handleLogin = async (e) => {
        e.preventDefault()
        setLoading(true)
        setErrorMsg(null)

        try {
            // Fungsi login bawaan Supabase
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            })

            if (error) throw error

            // Jika sukses, arahkan ke halaman dashboard admin
            router.push('/admin')
        } catch (error) {
            setErrorMsg(error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2 text-poppins">Admin Login</h1>
                    <p className="text-gray-500 text-sm">Enter your credentials to access the dashboard</p>
                </div>

                {errorMsg && (
                    <div className="bg-red-50 text-red-500 text-sm p-3 rounded-lg mb-4 text-center border border-red-100">
                        {errorMsg}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-5">
                    {/* Input Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                <FontAwesomeIcon icon={faEnvelope} className="!w-4 !h-4" />
                            </span>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-gray-800 focus:ring-1 focus:ring-gray-800 transition-all text-gray-800"
                                placeholder="admin@example.com"
                                required
                            />
                        </div>
                    </div>

                    {/* Input Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                <FontAwesomeIcon icon={faLock} className="!w-4 !h-4" />
                            </span>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-gray-800 focus:ring-1 focus:ring-gray-800 transition-all text-gray-800"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gray-900 text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition-all transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                    >
                        {loading ? (
                            <>
                                <FontAwesomeIcon icon={faSpinner} className="!w-4 !h-4 animate-spin" /> Processing...
                            </>
                        ) : (
                            'Sign In'
                        )}
                    </button>
                </form>
            </div>
        </div>
    )
}