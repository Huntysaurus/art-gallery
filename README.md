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

$ npm install --prefix client
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
## Usage Examples

![Image Link](https://github.com/Huntysaurus/art-gallery/blob/main/images/login.png)

Upon opening the app a login page is presented. In order to create a user, you must click on the signup button at the bottom of the login card. This will navigate to the signup page.

![Image Link](https://github.com/Huntysaurus/art-gallery/blob/main/images/Screenshot%202022-08-26%20193158.png)

Users must provide all information with the exception of the bio field.
```
note: the profile picture will accept any type of text. If the text provided is not a link to an image file that is not already on public domain, the image will not appear on the profile page. After providing all necessary information, click signup.
```
You will be navigated to the galleries page and a user will be created and stored in the database.

![Image Link](https://github.com/Huntysaurus/art-gallery/blob/main/images/Screenshot%202022-08-26%20193724.png)

The galleries page contains clickable galleries that will navigate to each individual gallery. Note the navigations at the top of the DOM. As long as a user is logged in, these will always be present with the exception of the create and edit piece page.

![Image Link](https://github.com/Huntysaurus/art-gallery/blob/main/images/Screenshot%202022-08-26%20193903.png)

Individual gallery pages contain all the pieces that are created in that specific gallery. Each piece in the gallery has clickable functionality that will navigate to the individual piece.
```
note: inside a gallery page there is an upload-piece button on the top right. This gives a user the ability to create a piece that will appear inside the gallery.
```
![Image Link](https://github.com/Huntysaurus/art-gallery/blob/main/images/Screenshot%202022-08-26%20193938.png)

On the upload piece page, all information with the exception of the description must be filled out. Once all necessary information is filled out and the upload piece button is clicked, a piece that belongs to both the user and the gallery will be created and stored in the database. The piece will then appear on the user profile page as well as the gallery page.

![Image Link](https://github.com/Huntysaurus/art-gallery/blob/main/images/Screenshot%202022-08-26%20193938.png)

When a piece is clicked, whether from the profile page or the gallery page, the user will be navigated to the piece page which contains all information for the current piece. If the clicked piece is owned by the current user, an edit button will appear at the bottom of the page. When clicked, the edit button will navigate to the edit piece page where a user will be able to edit all attributes of the current piece.
```
note: The user also has the ability to delete the piece from the edit piece page
```
![Image Link](https://github.com/Huntysaurus/art-gallery/blob/main/images/Screenshot%202022-08-26%20193938.png)

On the profile page, The user can view their profile as well as all the pieces they currently own. All owned pieces have clickable functionality that is similar to the functionality from the gallery.
```
note: The user can delete their profile from this page. When clicked, a prompt will appear asking to confirm. If the user is deleted, they along with all their created piece will be destroyed from the database and the user will be navigated back to the login page.
```
## Project Status

The project currently has a User, Piece, and Gallery model. Potential updates for Art Gallery will contain the following:

* On the client, users can edit their profile on the profile page

* On the client, users can leave comments on pieces. Individual pieces will contain the ability to post a comment and list all comments. The back-end will contain a comment model

* Users can like other pieces. The client will contain like/unlike functionality as well as total likes.

* On the Piece page, the creator's name will contain onClick() functionality which will navigate to that user's page. The page will contain user profile info and all owned pieces. Pieces will contain onClick() functionality to navigate to the page for clicked piece.
---

### Sources for gif backgrounds

https://gizmodo.com

Gismodo Australia polkadot image - https://www.gizmodo.com.au/2014/06/these-mesmerising-gifs-are-visual-proof-that-maths-can-be-cool/

Gismodo Australia squares image - https://www.gizmodo.com.au/wp-content/uploads/sites/2/2014/06/25/782238561472316964.gif?quality=80&w=660


https://giphy.com

rainbow gradient gif background - https://media0.giphy.com/media/FyoaJE2iah7WYeyxWr/giphy.gif?cid=790b7611303478b560a286c18447b6db6bdd49b7ed52a30b&rid=giphy.gif&ct=g