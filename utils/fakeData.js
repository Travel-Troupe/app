import image from '../assets/fakeUsers/1.jpg'

export const fakeUsers = [
  {
    name: 'Lou Anne',
    image
  },
  {
    name: 'Jeanne Sérien',
    image,
  },
  {
    name: 'Léa Laplubel',
    image
  },
]

export const fakeTravels = [
  {
    name: 'Paris',
    price: 2200,
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    description: 'Paris is the capital of France. It is the most populous city in France, with an estimated 3,2 million inhabitants.',
    tags: [ 'Eiffel Tower', 'Arc de Triomphe', 'Louvre', 'Notre Dame'],
  },
  {
    name: 'New York',
    price: 2200,
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    description: 'New York is the most populous city in the United States. With an estimated 20.6 million residents, New York is the most populous city in the United States.',
    tags: ['New York', 'Empire State Building', 'Statue of Liberty', 'Central Park', 'Times Square'],
  }
]

export const fakeDates = [
  {
    userID: 1,
    period: "12/02/2022-18/02/2022",
    stars: 2,
    winner: true,
    image
  },
  {
    userID: 2,
    period: "20/02/2022-24/02/2022",
    stars: 1,
    image
  },
  {
    userID: 3,
    period: "02/03/2022-10/03/2022",
    stars: 1,
    image
  }
]