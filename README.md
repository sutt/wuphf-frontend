## Group members
- Justin White (KingofStaten)
- Max Walker (MaximumDude)
- Evan Burton (EverManBurton)
- Raihan Saleh (BrownHammer)

## Wuphf
>We are created a mockup of the Twitter website/app. The user must sign up or log in to gain access to the site.  Similar to Twitter, the app contains several users, who have the ability to see other users' "posts", and allow the ability to like posts. Additionally, each user also has the ability to make their own posts on the app. Each user has a profile page, which includes personal information and the posts that he or she has made. Users  also have the ability to delete their individual posts.

## List of Models and their Properties
```
User Schema: 
{
  id: (auto generated),
  name: String, required
  username: String, required
  password: String, 
  profilePhoto: photo, 
  dob: Date,
  location: String,
  posts: [array of Post ids], 
  bookmarks: [array of Post ids],
}, {timestamp: true}
```

```
Post Schema:
{
  id: (auto generated),
  content: String, required
  author: ref to User
  likes: [array of user ids],
  thread: [array of objects]
}, {timestamp: true}
```

## Scrum Manager/ Project Manager
>Brown Hammer

## User stories
- As a user, I want to be able to create a personal user profile.
- As a user, I want to be able to create posts on the platform.
- As a user, I want to be able to edit and delete a post I have made.
- As a user, I want to be able to see other people's posts on my "New Feeds".
- As a user, I want to be able to bookmark other people's posts and have a repository of posts I have bookmarked.

## Minimum Viable Product
- User log in and sign up
- User profile page contains user information (i.e. photo, name, dob, etc.)
- User profile contains posts that the user has created
- News Feeds page renders a list of posts from all users
- The ability to add new posts, on both the "New Feeds" page and the "User Profile" page
- The ability to bookmark posts
- Bookmark page renders a list of bookmarked posts
- Ability to remove bookmarked posts
- Ability to delete posts on user profile page

## Stretch Goals
- Authentication using password
- The ability to "like" and "unlike" posts
- Ability to search for posts, and other users
- Ability to comment on existing posts

## Wireframes
##### Login Page
<img width="666" alt="loginPage" src="https://media.git.generalassemb.ly/user/35312/files/80e76980-b2e0-11eb-8dae-f7b0dd3a7e33">


##### News Feed Page
<img width="810" alt="newsFeedsPage" src="https://media.git.generalassemb.ly/user/35312/files/98beed80-b2e0-11eb-9b06-0a33a09bab4d">


##### User Profile Page
<img width="747" alt="profilePage" src="https://media.git.generalassemb.ly/user/35312/files/abd1bd80-b2e0-11eb-9a7e-9cf97f3cebc9">


##### Bookmarks Page
<img width="638" alt="bookmarksPage" src="https://media.git.generalassemb.ly/user/35312/files/b8eeac80-b2e0-11eb-88cc-f0974ee5fe0a">

## Screenshots
##### Login Page



##### News Feed Page



##### User Profile Page



## Component Hierarchy


## Technologies Used
React, Javascript, HTML, CSS, Bootstrap, Express, Mongo




