export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-t-4 border-emerald-600 border-solid rounded-full animate-spin"></div>
        <p className="mt-4 text-lg text-emerald-700">Loading Noor...</p>
      </div>
    </div>
  )
}
