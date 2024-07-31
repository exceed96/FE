export async function getApartAction() {
  try {
    const url = `${process.env.NEXT_PUBLIC_BASEURL}/main/`;
    const options = {
      method: "get",
      headers: {
        accept: "application/json",
      },
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
