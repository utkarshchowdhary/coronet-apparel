const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl: 'https://images5.alphacoders.com/983/983430.jpg',
      id: 1,
      linkUrl: 'shop/hats',
    },
    {
      title: 'jackets',
      imageUrl: 'https://images6.alphacoders.com/819/819087.jpg',
      id: 2,
      linkUrl: 'shop/jackets',
    },
    {
      title: 'sneakers',
      imageUrl: 'https://images2.alphacoders.com/649/649977.jpg',
      id: 3,
      linkUrl: 'shop/sneakers',
    },
    {
      title: 'womens',
      imageUrl: 'https://images6.alphacoders.com/608/608384.jpg',
      id: 4,
      linkUrl: 'shop/womens',
    },
    {
      title: 'mens',
      imageUrl: 'https://images2.alphacoders.com/101/1015669.jpg',
      id: 5,
      linkUrl: 'shop/mens',
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
