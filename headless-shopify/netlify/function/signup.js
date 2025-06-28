const fetch = require("node-fetch");

exports.handler = async (event) => {
  const { firstName, email, password } = JSON.parse(event.body);

  const query = `
    mutation customerCreate($input: CustomerCreateInput!) {
      customerCreate(input: $input) {
        customer {
          id
          email
        }
        customerUserErrors {
          field
          message
        }
      }
    }
  `;

  const variables = { input: { firstName, email, password } };

  const response = await fetch("https://kamlon.myshopify.com/api/2024-04/graphql.json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": "ca825f17893a220cf8bbbb16c9c03e72"
    },
    body: JSON.stringify({ query, variables })
  });

  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
};
