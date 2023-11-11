function GameCompPage() {
    return (
         <div
      style={{
        background: "linear-gradient(45deg, #2F80ED, #56CCF2)",
      }}
      className="min-h-screen p-2 md:p-3 flex flex-col justify-center"
    >

        <div className="container mx-auto max-w-5xl">
        <div style={{height: "95vh"}} className="relative overflow-hidden bg-white rounded-2xl md:p-8">
        {/* Back button on the left top corner */}
        <a
          href="/"
          className="absolute left-0 top-0 m-4 p-2 rounded-full"
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
        scrolling="no"
          src="gameComp.html"
          title="Game"
          style={{
            width: "100%",
            height: "100%",
            border: "none"
          }}
        />
      </div>
      </div>
      </div>
    );
  }
  
  export default GameCompPage;
  