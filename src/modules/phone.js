function Phone({ children }) {
  return (
    <div
      style={{
        background: "linear-gradient(45deg, #2F80ED, #56CCF2)",
      }}
      className="min-h-screen p-3 md:p-4 flex flex-col justify-center"
    >
      <div className="container mx-auto max-w-[400px] w-full md:w-[400px]">
        <div className="relative overflow-hidden bg-white rounded-2xl h-[700px] max-h-full flex flex-col">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Phone;
