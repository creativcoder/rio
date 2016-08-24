
![DataFlow](RioDataFlow.png)

####Login Phase

When the user clicks the `Connect to Twitter` button an **Action** `LOGIN_ATTEMPT` is dispatched to the `LoginReducer` as well as to an async middleware (could be redux-thunk). On receving this message:

`LoginReducer` modifies the state to render a loading screen to the user.

and meanwhile

the async middleware fires the api request needed to authenticate the user. When the api promise settles and the response is received; the middleware dispatches another **Action** `LOGIN_SUCCESS` if the login was successful or a `LOGIN_ERROR` if it failed.

`LoginReducer` on receivin either a `LOGIN_SUCCESS` or a `LOGIN_ERROR` modifies the state respectively to show the user dashboard or an error message(which returns back to login screen).
