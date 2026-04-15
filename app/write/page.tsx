import { searchSong } from '../_action/SeachBox'

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <form action={
        async (formdata) => {
          "use server";
          const result = await searchSong(formdata);
        }
      } className="space-y-4">
        
        <textarea
          name="query"
          placeholder="Type lyrics or song name..."
          className="w-full h-32 p-3 border"
        />

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Search
        </button>
      </form>
    </main>
  );
}