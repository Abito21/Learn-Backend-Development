const {
    getAllBooksAPIHandler,
    getBookByIdAPIHandler,
    addBookAPIHandler,
    deleteBookByIdAPIHandler,
    editBookByIdAPIHandler,
  } = require('./apihandler');
  
  const routes = [
    {
      method: 'GET',
      path: '/books',
      handler: getAllBooksAPIHandler,
    },
    {
      method: 'GET',
      path: '/books/{id}',
      handler: getBookByIdAPIHandler,
    },
    {
      method: 'POST',
      path: '/books',
      handler: addBookAPIHandler,
    },
    {
      method: 'DELETE',
      path: '/books/{id}',
      handler: deleteBookByIdAPIHandler,
    },
    {
      method: 'PUT',
      path: '/books/{id}',
      handler: editBookByIdAPIHandler,
    },
  ];
  
  module.exports = routes;
  