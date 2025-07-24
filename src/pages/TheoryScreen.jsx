const TheoryScreen = () => (
  <div className="flex flex-col min-h-screen bg-gray-100 p-4">
    <div className="flex justify-between items-center mb-6">
      <button
        className="text-gray-600 text-2xl"
      >
        <a href="/dashboard" className="hover:text-blue-600 transition">
          ←
        </a>
      </button>
      <h1 className="text-2xl font-bold text-gray-800">Teoria di Guida</h1>
      <div></div>
    </div>

    <div className="flex-grow space-y-4">
      <div className="bg-white p-6 rounded-3xl shadow-lg">
        <h3 className="font-semibold text-xl mb-2 text-gray-800">
          Capitolo 1: La Strada e le Sue Parti
        </h3>
        <p className="text-gray-700">
          Esplora i diversi componenti della strada, come corsie, banchine e
          rotatorie, e come interagire con essi in sicurezza.
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Leggi di Più
        </button>
      </div>
      <div className="bg-white p-6 rounded-3xl shadow-lg">
        <h3 className="font-semibold text-xl mb-2 text-gray-800">
          Capitolo 2: Segnaletica Stradale
        </h3>
        <p className="text-gray-700">
          Uno studio dettagliato dei segnali stradali verticali e orizzontali,
          la loro classificazione e la loro importanza per la sicurezza
          stradale.
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Leggi di Più
        </button>
      </div>
      <div className="bg-white p-6 rounded-3xl shadow-lg">
        <h3 className="font-semibold text-xl mb-2 text-gray-800">
          Capitolo 3: Norme di Circolazione
        </h3>
        <p className="text-gray-700">
          Impara le regole fondamentali della circolazione, inclusi limiti di
          velocità, sorpassi e precedenze.
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Leggi di Più
        </button>
      </div>
    </div>
  </div>
);

export default TheoryScreen;