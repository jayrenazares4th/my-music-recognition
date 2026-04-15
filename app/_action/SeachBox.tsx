"use server";

export async function searchSong(formData: FormData) {
  const input = formData.get("query");
  return input
}