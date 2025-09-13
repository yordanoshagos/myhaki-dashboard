import Image from "next/image"
import Sidebar from "./shared-components/page";

export default function Page() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-50">
        <h1 className="text-3xl font-bold">Dashboard Content</h1>
      </main>
    </div>
  );
}
