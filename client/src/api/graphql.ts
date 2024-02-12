export default async function graphqlRequest(query: string, variables = {}) {
  const response = await fetch("/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const { data, errors } = await response.json();

  if (errors) {
    throw new Error(errors.map((error: Error) => error.message).join("\n"));
  }

  return data;
}
