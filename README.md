This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

When I started this project, the first thing I knew I had to look at was GraphQL since I have never user it before.
My biggest challenge was the syntax. I found solutions integrating graphQA with React directly in the component so it made me think about an approach in which I get the data in my Documents component and then share it with my ArtBoard component. This was because at first I thought about using Modals to show Artboards. Later, I realized that Navigation between artBoards is required, so I looked up again and found another way to use graphQL in the componentDidMount() of my parent component which in the case of this project it's App.js

This approach for me is prefered because I only need to call the endpoint once for all the application. Then I pass the data to my components using props for Route.

I also decided that since in Document page we already see all the artBoards and they are clickable, the top bar navigation was only needed when visiting one of the artBoards so I adapted the Navigation bar to only show artBoards in that case.

Finally I did some code cleanup and structured the files in 4 main folders.
1- components for the main two components (Documents and ArtBoard),
2- navigation for the Navigation component and its logic,
3- services for the middle-back and calls to the API
4- utilities for any javascript code that would be useful throughout the project
