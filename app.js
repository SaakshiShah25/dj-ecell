const path = require('path');
const fs = require('fs');
const express = require('express');
const list = require('./events');

// express app
const app = express();

// listen for requests
app.listen(3000);

// register view engine
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  // res.sendFile('./views/index.html', { root: __dirname });
  res.render('index',{events_list:list});
});

app.get('/about', (req, res) => {
  res.sendFile('./views/about.html', { root: __dirname });
//   res.render('about');
});

app.get('/team', (req, res) => {
  res.sendFile('./views/team.html', { root: __dirname });
//   res.render('team');
});

app.get('/partners', (req, res) => {
  res.sendFile('./views/partners.html', { root: __dirname });
//   res.render('partners');
});

function getEventImages(id) {
  return new Promise(function (resolve, reject) {
    images = [];
    const directoryPath = path.join(__dirname, '/public/images/' + id);
    fs.readdir(directoryPath, function (err, files) {
      if (err) {
        reject(err);

      }
      else {
          files.forEach(function (file) {
            images.push(path.join('/images',id,file));
          });
        resolve(images);
      }
    });
  });
};

app.get('/events/:id', (req, res) => {
    const selected_event = list.find(c => c.id === req.params.id);
    if (!selected_event) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>');
  getEventImages(req.params.id) 
    .then((images) => {
      selected_event.images = images;
    res.render('detail', { event: selected_event });})
    .catch((error) => {return null} );
    
});

// 404 page
// app.use((req, res) => {
//   res.status(404).sendFile('./views/404.html', { root: __dirname });
// });

