# Rio - Just another Twitter web client (as a SPA) based on React and Redux.

![Rio splash](public/rio_readme.jpg)

![Rio Screen](public/login.png)

![Rio Screen](public/home.png)


How to Run (Development mode):

```

git clone https://github.com/creativcoder/rio

npm install

npm start

```


Features: 

* Post Tweet
* Retweet/UnRetweet
* Like/Unlike Tweet
* Auto Login
* Profile View and user tweets


Overview:

Although Rio being a single page app, we do have two high level divsions here using `react-router`.

+ Login Screen (Authenticate with twitter and get Oauth credentials)

+ Dashboard Screen (Depicts the home screen of Rio, showing a tweetbox, list of tweets, a navbar, settings etc)

and will consist of the following major ContainerComponents along with their PresentationalComponents (likely to extend as we develop further):
```
+ LoginComponent - Responsible for OAuth login and getting access tokens.

+ RiolayoutComponent - Base container for all other components within the main home screen of Rio.
   |--NavbarComponent - Navigation bar for searching tweets and logout.
   |--TweetlistComponent - Shows list of tweets from users feed.
   |--TweetboxComponent - To post a new tweet.
   |--TweetComponent - Represents a single tweet, with buttons like (fav, retweet, reply, message)
```

Rio's redux store basically consists of:

```javascript

{
	login: {
		authenticated: {...} (auth object from OAuth.io)
	}
	tweets: [...] (Array of 20 tweets pulled from Twitter api)
}

```
