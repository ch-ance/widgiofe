export default async (url: string, body: any) => {
  const response = await fetch(`http://localhost:3030/${url}`, {
    mode: "cors",
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const { data, errors } = await response.json();
  if (response.ok) {
    return data;
  } else {
    const error = new Error(
      errors?.map((e: Error) => e.message).join("\n") ?? "unknown"
    );
    return Promise.reject(error);
  }
};
