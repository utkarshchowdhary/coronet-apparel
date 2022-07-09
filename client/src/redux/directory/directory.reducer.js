const initialState = {
  sections: [
    {
      title: 'hats',
      imageUrl: 'https://images5.alphacoders.com/983/983430.jpg',
      id: 1
    },
    {
      title: 'jackets',
      imageUrl: 'https://images6.alphacoders.com/819/819087.jpg',
      id: 2
    },
    {
      title: 'sneakers',
      imageUrl: 'https://images2.alphacoders.com/649/649977.jpg',
      id: 3
    },
    {
      title: 'womens',
      imageUrl: 'https://images6.alphacoders.com/608/608384.jpg',
      id: 4
    },
    {
      title: 'mens',
      imageUrl: 'https://images2.alphacoders.com/101/1015669.jpg',
      id: 5
    }
  ]
}

const directoryReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default directoryReducer
