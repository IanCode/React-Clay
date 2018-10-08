# Start building your own website
This is a repository that I created to help others develop their websites in React.



## Tech stack
* [React](https://github.com/facebook/react) & [React Router 4](https://github.com/ReactTraining/react-router)
* [Node](https://github.com/nodejs) & [Express](https://github.com/expressjs/express)



## Getting started

### Setting up the basic environment in Node:
You will need to install Node globally if you do not have it installed already on your local drive:
```
sudo npm install -g
```
Installing Nodemon is also highly recommended as it watches for any changes that are saved and will automatically restart your application with the updated code base.
```
npm install nodemon -g 
```

### Installing dependencies
The prescribed dependencies needed for building a website are listed in the `package.json` file of this repository.
Once this repo is cloned to your local drive, from within the root directory:
```
npm install
```



## Additional information
More granular instructions as a guide to building a website are included in my [blog post](https://medium.com/@Preda/getting-started-on-building-a-personal-website-with-react-b44ee93b1710), if needed.


### The steps to create a website include:
1. File architecture
2. Setting up the basic environment in Node
3. Installing the React framework
4. Creating a webpack and configuration
5. Building the basic front-end components
6. Styling and CSS
7. Viewing on local host
8. Deploying on Heroku

## Ian's Design Intentions

### Clay club website

#### Base Goals

1. Searchable database of clay piece images
Attributes include: 
- Artist name
- clay body
- glaze
- year 
- date added

2. Browse images 
- all
- clay body
- artist name
- year
- glaze

3. Frontpage with a view that cycles through 3 images chosen 
randomly from the database. 

#### Expansion Goals

4. General Clay Club Info: 
- Meeting times
Club leaders and contact information
etc. 

5. Users and Admin Users
- Users can sign in and upload images, blog posts, and recipes
- Admin users can additionally delete images, users, blog posts, and recipes

6. Searchable/browsable recipes
- person who uploaded
- year
- other keywords

7. Searchable/browsable blog posts/tutorials
- person who uploaded
- year
- other keywords

## Author
Boilerplate Starter Code: Preda A
Clay Club Site: Ian White