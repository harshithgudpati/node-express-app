const express = require('express')
const app = express()

const hostname = '0.0.0.0'    // allows access from remote computers
const port = 3002

app.get('/', function (req, res) {
  res.send('Welcome users'.fontcolor("green").fontsize(1000).link("https://www.crictracker.com/wp-content/uploads/2018/07/Rohit-Sharma-3.jpg"))
})

app.get('/hello', (req, res) => {
  res.send('Hello this is Harshith'.fontcolor("blue").fontsize(1000).link("https://dg.imgix.net/should-i-ever-take-an-action-i-don-t-have-peace-about-pcdtderl-en/landscape/should-i-ever-take-an-action-i-don-t-have-peace-about-pcdtderl-6d9ea9b7b052cbdeca79c26c7eff0fd5.jpg?ts=1536621334&ixlib=rails-3.0.2&auto=format%2Ccompress&fit=min&w=700&h=394&dpr=2&ch=Width%2CDPR"))
})

app.get('/big',  (req, res) =>{
  res.send('<h1>Enjoy the snow fall in missouiri</h1>'.fontcolor("grey").fontsize(1000).link("https://bloximages.chicago2.vip.townnews.com/maryvilledailyforum.com/content/tncms/assets/v3/editorial/0/d2/0d2d76b0-8d34-11e5-b77f-13b3697a2530/564b34038e14f.image.jpg?resize=1200%2C800"))
})

app.get('/greeting/:id',  (req, res) =>{
  res.send('Hello! The id was ' + req.params.id)
})

app.get('/yo/:buddy',  (req, res) =>{
  res.send('<h1>Yo, ' + req.params.buddy + '!</h1>')
})

// handle non-existant routes
app.use((req, res, next) => {
  res.status(404).send('status 404 - that page was not found');
})

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://${hostname}:${port}/`)
  console.log('Hit CTRL-C CTRL-C to stop\n')
})

