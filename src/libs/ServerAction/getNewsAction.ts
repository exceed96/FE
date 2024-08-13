export async function getNewsAction(page: string, sort: string) {
  try {
    const url = `${process.env.NEXT_PUBLIC_BASEURL}/news?page=${page}&sort=${sort}`;
    const options = {
      method: "get",
      headers: {
        accept: "application/json",
      },
      next: { revalidate: 0 },
    };
    const result = await fetch(url, options);
    if (result.ok) {
      const data = await result.json();
      return { data, status: result.status };
    }
  } catch (error) {
    console.log(error);
  }
}
