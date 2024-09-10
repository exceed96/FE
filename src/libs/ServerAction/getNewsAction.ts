export async function getNewsAction(page: string, sort: string) {
  try {
    if (sort !== "asc" && sort !== "desc") return { data: undefined };
    const url = `${process.env.NEXT_PUBLIC_BASEURL}/news?page=${page}&sort=${sort}`;
    const options = {
      method: "get",
      headers: {
        accept: "application/json",
      },
      next: { revalidate: 0 },
    };
    const result = await fetch(url, options);
    if (result.ok && result.body) {
      const data = await result.json();
      if (data !== undefined) {
        return { data, status: result.status };
      }
    } else {
      return { data: undefined };
    }
  } catch (error) {
    console.log(error);
  }
}
