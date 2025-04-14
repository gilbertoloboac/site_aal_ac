export async function getDataHero() {
    const res = await fetch("http://127.0.0.1:8000/api/hero/");
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}