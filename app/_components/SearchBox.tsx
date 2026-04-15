const SearchBox = () => {
  return (
    <textarea
        placeholder="Type lyrics or song name..."
        className="w-full h-32 p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
    ></textarea>
  )
}

export default SearchBox