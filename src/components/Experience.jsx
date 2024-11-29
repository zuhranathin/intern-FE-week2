import React from 'react';

const Experience = () => {
    return (
        <section className="p-10 max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">My Experience</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Kotak 1 */}
                <div className="bg-white shadow-lg rounded-lg p-5">
                    <h2 className="text-2xl font-semibold mb-2">Exercise Internship</h2>
                    <p className="text-gray-700">Menjalani internship Software (Front end) di Exercise memberikan saya pelajaran baru mengenai pengembangan aplikasi web.</p>
                </div>
                {/* Kotak 2 */}
                <div className="bg-white shadow-lg rounded-lg p-5">
                    <h2 className="text-2xl font-semibold mb-2">Karya Kita Volunteer</h2>
                    <p className="text-gray-700">Kegiatan volunteer ke SDN Sukmajaya 5 Depok, mengajarkan murid-murid di sana menhgenaik kesehatan dan kesadaran lingkungan.</p>
                </div>
                {/* Kotak 3 */}
                <div className="bg-white shadow-lg rounded-lg p-5">
                    <h2 className="text-2xl font-semibold mb-2">Vice President of Student Council</h2>
                    <p className="text-gray-700">Menjadi Wakil Ketua OSIS di SMA Garuda Cendekia, mengajarkan saya mengenai manajemen dan kepemimpinan.</p>
                </div>
                {/* Kotak 4 */}
                <div className="bg-white shadow-lg rounded-lg p-5">
                    <h2 className="text-2xl font-semibold mb-2">PJ Acara GADEENG 2024</h2>
                    <p className="text-gray-700">Menjadi PJ Acara GADEENG 2024, menambah skill dalam komunikasi dan problem solving.</p>
                </div>
            </div>
        </section>
    );
};

export default Experience;