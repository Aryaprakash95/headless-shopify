fetch("https://z5tazm-dg.myshopify.com/api/2024-04/graphql.json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": "your_storefront_token"
    },
    body: JSON.stringify({
      query: "{ shop { name } }"
    })
  }).then(res => res.json()).then(console.log);
  