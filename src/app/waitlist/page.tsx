'use client'
import React, { useState } from 'react'

function WaitlistPage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, name }),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || 'Failed to join waitlist')
            }
            setSubmitted(true)
            setEmail('')
            setName('')
        } catch (err: unknown) {
            // Type guard to extract error message
            if (err instanceof Error) {
                setError(err.message)
            } else {
                setError('Something went wrong. Please try again.')
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-b from-white to-gray-50">
            <div className="mb-12">
                <h1 className="text-3xl font-bold text-center">Konva</h1>
            </div>

            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-sm">
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-center">Join the waitlist</h2>
                    <p className="text-[#1A1A1A99] text-center">
                        Get early access to Konva and transform how you connect with people.
                    </p>
                </div>

                {!submitted ? (
                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-gray-700 block text-left">
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="John Doe"
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700 block text-left">
                                Email address
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                                required
                            />
                        </div>
                        {error && (
                            <div className="bg-red-50 border border-red-100 rounded-lg p-4">
                                <p className="text-red-600 text-sm">{error}</p>
                            </div>
                        )}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-black text-white px-6 py-4 rounded-lg hover:bg-gray-900 
                                     transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
                                     font-medium text-base button"
                        >
                            {loading ? (
                                <span className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Processing...
                                </span>
                            ) : (
                                'Request Early Access'
                            )}
                        </button>
                        <p className="text-xs text-center text-gray-500">
                            By joining, you agree to receive updates about Konva.
                        </p>
                    </form>
                ) : (
                    <div className="mt-8 p-6 bg-green-50 border border-green-100 rounded-lg text-center">
                        <h3 className="text-lg font-semibold text-green-800 mb-2">{"You're on the list!"}</h3>
                        <p className="text-green-700">
                            {"Thank you for your interest. We'll notify you when we're ready to launch."}
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default WaitlistPage
