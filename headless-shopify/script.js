const accessToken = '5c741bf9196093d352c460a1a6608d23';
const shop = 'yourstore.myshopify.com'; // 👈 change this to your real Shopify store

const query = `
  {
    products(first: 5) {
      edges {
        node {
          title
          description
          images(first: 1) {
            edges {
              node {
                url
              }
            }
          }
        }
      }
    }
  }
`;

fetch(`https://${shop}/api/2024-04/graphql.json`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-Shopify-Storefront-Access-Token': accessToken
  },
  body: JSON.stringify({ query })
})
.then(res => res.json())
.then(data => {
  const productsDiv = document.getElementById('products');
  productsDiv.innerHTML = '';

  data.data.products.edges.forEach(({ node }) => {
    const image = node.images.edges[0]?.node.url;
    productsDiv.innerHTML += `
      <div class="product">
        ${image ? `<img src="${image}" />` : ''}
        <h2>${node.title}</h2>
        <p>${node.description}</p>
      </div>
    `;
  });
})
.catch(error => {
  console.error('Error loading products:', error);
});
