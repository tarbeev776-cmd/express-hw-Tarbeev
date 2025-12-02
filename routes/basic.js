const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'OK'
  });
});

router.get('/status', (req, res) => {
  const serverStatus = {
    status: 'running',
    timestamp: new Date().toString(),
   
  };
  
  res.status(200).json(serverStatus);
});

  const list = [{
    id: 1,
    title: "fgdhsj",
    descriprion: "fghd",
    createdAt: "2025-06-02"
  
   
  },

{
    id: 2,
    title: "f33nc",
    descriprion: "ccd55",
    createdAt: "2025-06-05"
  
   
  }];
router.get('/items', (req, res) => {

   res.status(200).json(list);

});

let ID = '2'
router.get('/items/' + ID, (req, res) => {
  let Id = parseInt(a)
  const item = {
    id: list[Id-1].id,
    title: list[Id-1].title,
    descriprion: list[Id-1].descriprion,
    createdAt: list[Id-1].createdAt
  }
  res.status(200).json(item);
   
  
}

);

router.post('/echo', (req, res) => {
  if (!req.body) {
    return res.status(400).json({
      error: 'Bad Request',
      message: 'Request body is empty'
    });
  }
  

  res.status(200).json({
    received: req.body,
    timestamp: new Date().toString(),
    method: req.method
  });
});

module.exports = router;
