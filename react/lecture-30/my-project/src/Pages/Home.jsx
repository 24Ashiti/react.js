import React from 'react'

const Home = () => {

    const logout = () => {
        localStorage.removeItem('signUp')
        window.location.reload()
    }

    const deleteAccount = () => {
        localStorage.clear()
        window.location.reload()
    }

    return (
        <div className="text-center mt-10">
            <h1 className="text-2xl font-bold mb-4">Home Page</h1>
            <p className="text-lg">Welcome {localStorage.getItem('name')}</p>
            <div className="mt-8 space-x-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={logout}>Logout</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={deleteAccount}>Delete Account</button>
            </div>
        </div>
    )
}

export default Home
