const ROUTES = [
  {
    url: '/test',
    proxy: {
      target: "https://jsonplaceholder.typicode.com/todos/1",
      changeOrigin: true,
    }
  },
  {
    url: '/posts',
    proxy: {
      target: "http://localhost:3003/getPosts",
      changeOrigin: true,
    }
  },
  {
    url: '/posts/:author',
    proxy: {
      target: "http://localhost:3003/getPosts/:author",
      changeOrigin: true,
    }
  },
  {
    url: '/activities',
    proxy: {
      target: "http://localhost:3006/getActivities",
      changeOrigin: true,
    }
  },
  {
    url: '/acc',
    proxy: {
      target: "http://localhost:3000",
      changeOrigin: true,
    }
  },
  {
    url: '/entries',
    proxy: {
      target: "http://localhost:3010/",
      changeOrigin: true,
    }
  },
  {
    url: '/getChats/:userId',
    proxy: {
      target: "http://localhost:3020/getChats",
      changeOrigin: true,
    }
  },
  {
    url: '/sendMessage',
    proxy: {
      target: "http://localhost:3020/sendMessage",
      changeOrigin: true,
    }
  },
  {
    url: '/challenges',
    proxy: {
      target: "http://localhost:3030/",
      changeOrigin: true,
    }
  },


];

exports.ROUTES = ROUTES;
