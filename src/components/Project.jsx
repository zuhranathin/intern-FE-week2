import React from 'react';

const Project = () => {
    const projectLink = "file:///Users/maccom/Desktop/milo-week1/index.html"; 
    
    const handleRedirect = () => {
        window.location.href = projectLink;
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">Project</h1>
            <p className="text-lg text-gray-700 mb-4">
                Klik di bawah ini untuk melihat proyek saya.
            </p>
            <button 
                onClick={handleRedirect} 
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Lihat Proyek
            </button>
        </div>
    );
};

export default Project;