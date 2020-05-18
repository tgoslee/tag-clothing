const INITIAL_STATE = {
     sections:[
  {
    title: 'hats',
    imageUrl: 'https://i.ibb.co/nPnwYxB/hats.jpg',
    id: 1,
    linkUrl: 'shop/hats'
  },
  {
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/0rJtxWm/jackets.jpg',
    id: 2,
    linkUrl: 'shop/jackets'
  },
  {
    title: 'sneakers',
    imageUrl: 'https://i.ibb.co/g4dh3Xs/sneakers.jpg',
    id: 3,
    linkUrl: 'shop/sneakers'
  },
  {
    title: 'womens',
    imageUrl: 'https://i.ibb.co/ZXg1W01/womens.jpg',
    size: 'large',
    id: 4,
    linkUrl: 'shop/womens'
  },
  {
    title: 'mens',
    imageUrl: 'https://i.ibb.co/KWqJ7SW/mens.jpg',
    size: 'large',
    id: 5,
    linkUrl: 'shop/mens'
  }]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
};

export default directoryReducer;

