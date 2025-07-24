export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-sm text-center">
        <div className="flex justify-center mb-6">
          <span className="text-4xl text-blue-600">🚗</span>
        </div>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Benvenuto alla Scuola Guida</h2>
        <input
          type="text"
          placeholder="Nome Utente"
          className="w-full p-3 mb-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          className="w-full p-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          <a href="/dashboard">ACCEDI</a>
        </button>
        <p className="mt-4 text-sm text-gray-600">
          Non hai un account? <a href="#" className="text-blue-600 font-semibold hover:underline">Crea Nuovo</a>
        </p>
        <div className="flex justify-center space-x-4 mt-6">
          <button className="p-3 border border-gray-300 rounded-full hover:bg-gray-50 transition"><span className="text-xl">G</span></button>
          <button className="p-3 border border-gray-300 rounded-full hover:bg-gray-50 transition"><span className="text-xl">f</span></button>
          <button className="p-3 border border-gray-300 rounded-full hover:bg-gray-50 transition"><span className="text-xl">🐦</span></button>
        </div>
      </div>
    </div>
  )
}
