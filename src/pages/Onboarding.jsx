export default function Onboarding() {
  const goToLogin = () => {
    window.location.href = "/login";
  };
  return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900 text-white p-4">
      <div className="text-center">
        <img src="https://placehold.co/150x150/000000/FFFFFF?text=Cloud" alt="Online Classes" className="mx-auto mb-6 rounded-full" />
        <h1 className="text-3xl font-bold mb-2">Corsi Online</h1>
        <p className="text-lg text-gray-300">
          Sicuro con un ambiente di apprendimento online basato su cloud per tutti i livelli.
        </p>
      </div>
      <button
        onClick={goToLogin}
        className="mt-10 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
      >
        INIZIA
      </button>
    </div>
  )
}
