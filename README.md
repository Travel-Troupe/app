# Travel Troupe App

## Requirements

* Expo CLI
* Yarn
* Node 12

## Run the project

First install the dependencies
```bash
$ yarn
```
Then launch the dev server
```bash
$ yarn start # -c
```
You can add the `-c` flag in order to clean the cache.  

## Prevent connexion on every reload

Get in this file [AuthContext](./store/contexts/AuthContext.jsx) then comment the default value of `user` and uncomment the following line.

## Prevent travel add

Get in this file [AuthContext](./store/contexts/UserContext.jsx) then add an element in the `travels` element