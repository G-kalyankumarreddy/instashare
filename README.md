# Insta Share

## Instagram(Clone)

In this project I built Insta Share App using the concepts that I have learned till now. Concepts used in this project are **Routing**, **Component Life Cycle**, **React Slider**, **Authentication** and **Authorization** and adding responsiveness to the website.

## Features

- Login and Logut
- Search Posts
- Like and Unlike the Posts
- Check the User Profile
- Check My Profile
- Slide through User Stories
- Retry on data fetch failure

## Routes

- Login Route
- Home Route
- User Profile Route
- My Profile Route
- Not Found Route

## Components

- LoginRoute
- Header
- HomeRoute
- UserStories
- StoriesSlider
- UserPosts
- UserPostsItem
- ProfileCard
- MyProfileRoute
- SearchPosts
- NotFoundRoute
- ProtectedRoute

## Routes And Their Components

- Login Route
  - LoginRoute
- Home Route
  - Header
  - UserStories
    - StoriesSlider
  - UserPosts
    - UserPostsItem
- User Profile Route
  - Header
  - ProfileCard
- My Profile Route
  - Header
  - ProfileCard
- Not Found Route
  - NotFoundRoute

## Functionality

### LoginRoute

- When an invalid username and password are provided and the Login button is clicked, then the respective error message received from the response is displayed
- When a valid username and password are provided and the Login button is clicked, then the page is navigated to the Home Route
- When an unauthenticated user tries to access the Home Route, Profile Route, and User Profile Route, then the page is navigated to the Login Route
- When an authenticated user tries to access the Home Route, Profile Route, and User Profile Route, then the page is navigated to the respective route
- When an authenticated user tries to access the Login Route, then the page is navigated to the Home Route

### Home Route

##### When an authenticated user opens the Home Route

- An HTTP GET request is made to User Stories API URL with jwt_token in the Cookies and Loader is displayed while fetching the data, after successfully fetching the data, it is rendered in home page, if HTTP request made is unsuccessful failure view is displayed and on clicking Retry button HTTP GET request is made to the User Stories API URL

##### An HTTP GET request should be made to the Posts API URL with jwt_token in the Cookies

- Loader is displayed while fetching the data
- After the data is fetched successfully, the response received is displayed
- If the HTTP GET request made is unsuccessful, then the failure is displayed. When the Retry button is clicked, an HTTP GET request is made to the Posts API URL
- When the username in the particular post is clicked, then the page is navigated to the User Details Route

### User Profile Route

##### When an authenticated user opens the User Profile Route

- An HTTP GET request is made to the User Profile API URL with jwt_token in the Cookies and user_id as a path parameter
- Loader is displayed while fetching the data
- On successfully fetching the data it is rendered in user profile route
- If fetch is unsuccessful failure view is displayed and on clicking retry button HTTP GET REQUEST to USER PROFILE API URL is made.

### My Profile Route

##### When an authenticated user opens the My Profile Route

- An HTTP GET request is made to the My Profile API URL with jwt_token in the Cookies
- Loader is displayed while fetching the data
- On successfully fetching the data it is displayed in the my profile route
- If fetch is unsuccessful failure view is displayed and on clicking retry button HTTP GET request to MY PROFILE API URL is made

### Search Functionality

##### When an authenticated user search posts using post caption by clicking on the Search icon

- Loader is displayed while fetching the data
- On successfully fetching the data, the response is displayed
- If fetch is unsuccessful failure view is displayed and on clicking retry button HTTP GET REQUEST to SEARCH POSTS URL is made
- If search not found then SEARCH NOT FOUND TRY DIFFERENT WORD view is displayed

## Data Fetch URLs

##### Login API

API: https://apis.ccbp.in/login Method: POST Description: Returns a response based on the credentials provided

##### User Stories API

API: https://apis.ccbp.in/insta-share/stories Method: GET Description: Returns a response containing the list of all user stories

##### Posts API

API: https://apis.ccbp.in/insta-share/posts Method: GET Description: Returns a response containing the list of user posts.

##### Post Like API

API: https://apis.ccbp.in/insta-share/posts/{postId}/like Example: https://apis.ccbp.in/insta-share/posts/f25d77f0-602e-41d1-971e-4b8cf54709eb/like Method: POST Description: Returns a response containing the whether post has been liked or not

##### My Profile API

API: https://apis.ccbp.in/insta-share/my-profile Method: GET Description: Returns a response containing the details of my profile

##### User Profile API

API: https://apis.ccbp.in/insta-share/users/{userId} Example: https://apis.ccbp.in/insta-share/users/Prabuddha_Dasgupta Method: GET Description: Returns a response containing the details of user profile.

##### Search Posts API

API: https://apis.ccbp.in/insta-share/posts?search={searchInput} Example: https://apis.ccbp.in/insta-share/posts?search=sky Method: GET Description: Returns a response containing the list of search posts.
