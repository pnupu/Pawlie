function GamePage() {
    return (
      <div style={{ height: "100vh", width: "100vw", overflow: "hidden" }}>
        {/* Back button on the left top corner */}
        <a
          href="/"
          className="absolute left-0 top-0 m-4 p-2 rounded-full bg-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </a>
        <iframe
          src="game.html"
          title="Game"
          style={{
            width: "100%",
            height: "100%",
            border: "none"
          }}
        />
      </div>
    );
  }
  
  export default GamePage;
  