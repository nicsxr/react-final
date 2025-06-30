export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-5xl font-extrabold mb-8">Random People App</h1>

      <p className="mb-6 text-lg max-w-xl">Fetch and save random users</p>

      <div className="flex gap-6">
        <a
          href="https://github.com/yourusername/your-project" 
          target="_blank" rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          GitHub Repository
        </a>

        <a
          href="https://randomuser.me/"
          target="_blank" rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Random User API
        </a>
      </div>
    </div>
  );
}