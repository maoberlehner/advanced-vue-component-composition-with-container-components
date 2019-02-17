const productDb = [
  {
    img: `https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&h=200&q=80`,
    name: `Nice Watch`,
    price: `199.99`,
    categories: [`electronics`],
  },
  {
    img: `https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&h=200&q=80`,
    name: `Headphones`,
    price: `299.99`,
    categories: [`electronics`],
  },
  {
    img: `https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&h=200&q=800`,
    name: `Bar Stool`,
    price: `99.99`,
    categories: [`furniture`],
  },
  {
    img: `https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&h=200&q=80`,
    name: `Shoes`,
    price: `89.99`,
    categories: [],
  },
  {
    img: `https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&h=200&q=80`,
    name: `Camera`,
    price: `159.99`,
    categories: [`electronics`],
  },
  {
    img: `https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&h=200&q=80`,
    name: `Plant`,
    price: `59.99`,
    categories: [`plant`],
  },
  {
    img: `https://images.unsplash.com/photo-1498887983185-44bfeb64b956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&h=200&q=80`,
    name: `Smart Watch`,
    price: `399.99`,
    categories: [`electronics`],
  },
  {
    img: `https://images.unsplash.com/photo-1523884156331-22cc4f5df98d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&h=200&q=80`,
    name: `Glasses`,
    price: `99.99`,
    categories: [],
  },
  {
    img: `https://images.unsplash.com/photo-1531608139434-1912ae0713cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&h=200&q=80`,
    name: `Fast Bike`,
    price: `1999.99`,
    categories: [],
  },
];

// eslint-disable-next-line import/prefer-default-export
export function get({ filter = {}, limit, page = 1 }) {
  const pageInt = parseInt(page, 10);

  return new Promise((resolve) => {
    setTimeout(() => {
      let result = productDb;
      let filteredResultCount = result.length;

      if (filter.category) {
        result = result.filter(x => x.categories.includes(filter.category));
        filteredResultCount = result.length;
      }

      if (limit) {
        const start = (pageInt - 1) * limit;
        const end = start + limit;
        result = result.slice(start, end);
      }

      resolve({
        data: result,
        meta: {
          pageCount: Math.ceil(filteredResultCount / limit),
        },
      });
    }, 500);
  });
}
