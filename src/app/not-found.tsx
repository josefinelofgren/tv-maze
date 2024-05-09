import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-white relative flex min-h-screen flex-col items-center p-12 bg-black">
      <h2 className="font-bold text-2xl">Page not found</h2>
      <p className="text-sm text-white-800">
        Could not find requested resource
      </p>
      <Link href="/">
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-600">
          Back to homepage
        </button>
      </Link>
    </div>
  );
}
