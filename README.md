# Movie Search App in React

# Plan:
1. Create React App
npx create-react-app movie_search_react

2. Get an API key from https://www.themoviedb.org/settings/api

3. Create component SearchMovie and style it.

4. In a SearchMovie component I will use useState for awaiting fetch request.

Bugs:

During deployment on Netlify 
9:38:02 PM: Treating warnings as errors because process.env.CI = true.
9:38:02 PM: Most CI servers set it automatically.
9:38:02 PM: 
9:38:02 PM: Failed to compile.
9:38:02 PM: 
9:38:02 PM: ./src/MovieCard.js
9:38:02 PM:   Line 2:  'css' is defined but never used  no-unused-vars
9:38:02 PM: ./src/SearchMovie.js
9:38:02 PM:   Line 3:  'css' is defined but never used  no-unused-vars

How I am planning to fix it?

Will move MovieCard and SearchMovie components to theirs' own folders, where index.css will be detected authomaticlly, as at the moment I have to import it and eslint not happy telling me: "css is defined but never used  no-unused-vars". Hope this will fix the problem ![image](https://user-images.githubusercontent.com/32721917/176533416-b58bd9c6-6a45-42d0-96a4-8cd15cf0b120.png)


Bugs are fixed actually with this line // eslint-disable-next-line no-unused-vars.
All successfully deployed here: https://brilliant-movie-search777.netlify.app/


30/06/2022 Next thing to fix: hide credentials! ![image](https://a.slack-edge.com/production-standard-emoji-assets/13.0/apple-medium/1f631.png)