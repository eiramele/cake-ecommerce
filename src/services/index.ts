export async function getData<T>(url: string): Promise<T | null> {
  try {
    const response = await fetch(url);
    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
