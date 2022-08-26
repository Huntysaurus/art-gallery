# Art Gallery
a content-sharing app for artists created with Node.js, React, Ruby on Rails, PostgreSQL

## Introduction
---

Art Gallery's primary developmental focus was to practice techniques using back-end models with different types of relationships using PostgreSQL alongside ActiveRecord and a front-end client. 
 
The focus of the front-end client is to render a smooth and seamless UI that 
takes advantage of routing behavior and custom styling.

---
## Technologies

* Node.js 16.5.1
* Ruby 2.7.4p191
* React 18.2.0
* PostgreSQL 1.1
* Rails 6.1.6.1
---
## Launch
To launch and use the application run these commands in the project root folder:

```
$ bundle install

$ rails db:create

$ npm prefix client
```

run the backend server on  http://localhost:3000:
```
$ rails s
```
open a separate terminal to run the front end on http://localhost:4000:
```
$ npm start --prefix client
```
galleries can not be created using the app but rather contain gallery seed data in the db/seeds.rb file. To run the seed data:
```
$ rails db:seed
```
*note*: without any gallery data, a user will not have the ability to create content(pieces). The seeds.rb file can be altered to contain different data if the user chooses, but it is impossible to create galleries from within the client.


### link to heroku version: https://art-gallery-1.herokuapp.com/
---
## Content Sources
Sources for profile pictures at https://gettyimages.com

Sources for artwork:

https://www.madisonartshop.com/20-most-famous-paintings-of-all-time.html

https://www.timeout.com/newyork/art/top-famous-sculptures-of-all-time

https://www.atxfinearts.com/blogs/news/100-most-famous-paintings-in-the-world


https://gizmodo.com

Gismodo Australia polkadot image - https://www.gizmodo.com.au/2014/06/these-mesmerising-gifs-are-visual-proof-that-maths-can-be-cool/

Gismodo Australia squares image - https://www.gizmodo.com.au/wp-content/uploads/sites/2/2014/06/25/782238561472316964.gif?quality=80&w=660


https://giphy.com

rainbow gradient gif background - https://media0.giphy.com/media/FyoaJE2iah7WYeyxWr/giphy.gif?cid=790b7611303478b560a286c18447b6db6bdd49b7ed52a30b&rid=giphy.gif&ct=g