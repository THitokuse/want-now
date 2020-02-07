module.exports = {
  request: {
    path: '/api/shops/result',
    method: 'GET'
  },
  response: {
    body: {
      status: 'SUCCESS',
      data: [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        }
      ]
    }
  }
}