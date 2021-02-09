## Github Battle

To create this application we will create two individual application and at last we will combine them using client-side routing.

### Github Top Stars

Here we ill have multiple items in the menu like `all`, `JavaScript`, `Python` etc. Once you click on any one of menu it will display top 20 most starred repo.

- To fetch the data use the following URL

- JavaScript: `https://api.github.com/search/repositories?q=stars:%3E1+language:JavaScript&sort=stars&order=desc&type=Repositories`
- All: `https://api.github.com/search/repositories?q=stars:%3E1+language:All&sort=stars&order=desc&type=Repositories`

For other language change the name of the language in the `language` param.

### Github Battle

Another app that we will be building is Github Battle the will accept two github username in two input field. Once both the user is added you will show a button named `Battle` once clicked fetch the information of both user and based on some kind of formula based on the number of followers, repos etc declare a winner.

To calculate the result take in consideration the number of followers, repos and other metrics if you need.

- To fetch the user information of any user use the following URL

`https://api.github.com/users/gearon`

Replace the username.

### Using Client Side Routing

After creating both the application using client-side routing bring them together in a single page. The page will contain two tabs `Popular Repos` and `Battle`. Once clicked on `Popular Repos` it will display the first app and once clicked on `Battle` will display the battle app.