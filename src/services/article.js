const articleDb = [
  {
    img: `https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&h=80&q=80`,
    name: `Lorem Ipsum`,
    categories: [`nature`],
    text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua...`,
  },
  {
    img: `https://images.unsplash.com/photo-1498887983185-44bfeb64b956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&h=80&q=80`,
    name: `At vero eos`,
    categories: [`tech`],
    text: `At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren...`,
  },
  {
    img: `https://images.unsplash.com/photo-1523884156331-22cc4f5df98d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&h=80&q=80`,
    name: `Labore et dolore `,
    categories: [],
    text: `No sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur...`,
  },
  {
    img: `https://images.unsplash.com/photo-1531608139434-1912ae0713cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&h=80&q=80`,
    name: `Labore et dolore `,
    categories: [`hobby`],
    text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua...`,
  },
  {
    img: `https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&h=80&q=80`,
    name: `Dolor sit amet`,
    categories: [`tech`],
    text: `No sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur...`,
  },
  {
    img: `https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&h=80&q=80`,
    name: `Sit amet dolor`,
    categories: [`tech`],
    text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua...`,
  },
  {
    img: `https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&h=80&q=800`,
    name: `Invidunt ut`,
    categories: [],
    text: `At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren...`,
  },
  {
    img: `https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&h=80&q=80`,
    name: `Takimata`,
    categories: [],
    text: `No sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur...`,
  },
  {
    img: `https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&h=80&q=80`,
    name: `Lorem ipsum`,
    categories: [`hobby`, `tech`],
    text: `At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren...`,
  },
];

// eslint-disable-next-line import/prefer-default-export
export function get({ filter = {}, limit, page = 1 }) {
  const pageInt = parseInt(page, 10);

  return new Promise((resolve) => {
    setTimeout(() => {
      let result = articleDb;
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
