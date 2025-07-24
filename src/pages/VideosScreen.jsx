const VideosScreen = () => (
  <div className="flex flex-col min-h-screen bg-gray-100 p-4">
    <div className="flex justify-between items-center mb-6">
      <button
        className="text-gray-600 text-2xl"
      >
        <a href="/dashboard" className="hover:text-blue-600 transition">
          ←
        </a>
      </button>
      <h1 className="text-2xl font-bold text-gray-800">Video Educativi</h1>
      <div></div>
    </div>

    <div className="flex-grow space-y-4">
      <div className="bg-white p-4 rounded-3xl shadow-lg">
        <div className="w-full h-48 bg-gray-300 rounded-xl mb-3 flex items-center justify-center text-gray-500 text-xl">
          Video 1: Segnali Stradali
        </div>
        <h3 className="font-semibold text-lg text-gray-800">
          Introduzione ai Segnali Stradali
        </h3>
        <p className="text-sm text-gray-600">
          Scopri i segnali stradali più comuni e il loro significato.
        </p>
      </div>
      <div className="bg-white p-4 rounded-3xl shadow-lg">
        <div className="w-full h-48 bg-gray-300 rounded-xl mb-3 flex items-center justify-center text-gray-500 text-xl">
          {/* Placeholder for video thumbnail/player */}
          Video 2: Manovre di Base
        </div>
        <h3 className="font-semibold text-lg text-gray-800">
          Come Eseguire Manovre di Base
        </h3>
        <p className="text-sm text-gray-600">
          Guida passo-passo per parcheggiare, girare e cambiare corsia.
        </p>
      </div>
      <div className="bg-white p-4 rounded-3xl shadow-lg">
        <div className="w-full h-48 bg-gray-300 rounded-xl mb-3 flex items-center justify-center text-gray-500 text-xl">
          {/* Placeholder for video thumbnail/player */}
          Video 3: Norme di Guida
        </div>
        <h3 className="font-semibold text-lg text-gray-800">
          Regole Essenziali di Guida
        </h3>
        <p className="text-sm text-gray-600">
          Conosci le norme di sicurezza e convivenza stradale.
        </p>
      </div>
    </div>
  </div>
);

export default VideosScreen;
