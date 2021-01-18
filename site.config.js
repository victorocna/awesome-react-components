module.exports = {
  sitename: 'Awesome React Components',
  title: 'Awesome React Components',
  fontAwesome: 'https://use.fontawesome.com/releases/v5.6.3/css/all.css',
  hero: {
    props: {
      image: '/images/pexels-manuel-geissinger-325229.jpg',
      minHeight: 300,
    },
    children: ['tryOurDemo', 'paragraph#demo'],
  },
  tryOurDemo: {
    props: {
      type: 'button',
      label: 'Try our demo',
      animate: 'fadeIn',
    },
  },
  'paragraph#demo': {
    props: {
      markdown: `**Hello** world`,
    },
  },
  team: {
    props: {
      title: 'Dunder Mifflin Team',
    },
    children: [
      {
        name: 'Michael Scott',
        avatar: '/images/michael-scott.jpg',
        description: 'Dunder Mifflin branch manager',
      },
      {
        name: 'Dwight Schrute',
        avatar: '/images/dwight-schrute.jpg',
        description: 'Assistant to the branch manager',
      },
      {
        name: 'Jim Halpert',
        avatar: '/images/jim-halpert.jpg',
        description: 'Sales representative',
      },
    ],
  },
  reviews: {
    props: {
      title: 'Dunder Mifflin Reviews',
    },
    children: [
      {
        title: 'Richard Green',
        content: 'The best paper company in the entire area. I recommend doing business with them.',
      },
      {
        title: 'Rebecca Blue',
        content: `**Amazing** customer support. Dwight has taught me a great deal of
          things regarding my paper issues. He also [sells beats](https://example.com).
        `,
      },
    ],
  },
};
