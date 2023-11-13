export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ background: "linear-gradient(to bottom right, #ffffff, #b3d1f3)" }}>
      
      <header className="text-center mb-8 text-black backdrop-blur-md p-4 rounded-md bg-opacity-30">
        <h1 className="text-4xl font-bold mb-2">Your Baby Care Companion</h1>
        <p className="text-lg">Get personalized advice and tips for caring for your little one!</p>
      </header>

      
      <section className="backdrop-blur-md bg-opacity-30 p-8 max-w-md text-center mb-8 rounded-md">
        <h2 className="text-3xl font-bold mb-4 text-blue-700">Key Features</h2>
        <ul className="list-none">
          <li className="mb-2 text-black">👶 Personalized baby care advice</li>
          <li className="mb-2 text-black">🌈 Timely tips for different parenting stages</li>
          <li className="mb-2 text-black">🕒 24/7 support from our chatbot</li>
        </ul>
      </section>

      
      <p className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out cursor-pointer flex items-center">
        Get Started
      </p>

      
      <footer className="mt-8 text-sm text-gray-700 text-center py-4 backdrop-blur-md bg-opacity-30 rounded-md">
        <p>Privacy Policy | Terms of Service | © 2023 Your Baby Care Companion</p>
      </footer>
    </div>
  );
}
