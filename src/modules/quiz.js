function Quiz({ children }) {
  return (
    <div
      style={{
        background: "linear-gradient(45deg, #2F80ED, #56CCF2)",
      }}
      className="min-h-screen p-3 md:p-4 flex flex-col justify-center"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="relative overflow-hidden bg-white rounded-2xl p-4 md:p-16">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
