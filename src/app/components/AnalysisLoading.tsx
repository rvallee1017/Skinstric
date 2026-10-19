import NavBar from "./NavBar";

export default function AnalysisLoading({
  previewImage,
}: {
  previewImage?: string | null;
}) {
  return (
    <div className="fixed inset-0 z-[100] bg-white">
      <NavBar />

      {previewImage && (
        <div className="absolute top-20 right-6 z-20">
          <p className="text-sm text-gray-500">Preview</p>
          <img
            src={previewImage}
            alt="Preview"
            className="w-24 h-24 object-cover"
          />
        </div>
      )}

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="absolute w-64 h-64 border-2 border-dotted border-gray-200 rotate-12" />
        <div className="absolute w-64 h-64 border-2 border-dotted border-gray-200 -rotate-12" />

        <div className="relative z-10 text-center bg-white/80 px-4 py-6">
          <h2 className="text-xl font-semibold">
            PREPARING YOUR ANALYSIS...
          </h2>

          <div className="flex justify-center gap-5 mt-10">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="w-3 h-3 rounded-full bg-gray-400 animate-pulse"
                style={{ animationDelay: `${i * 200}ms` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}