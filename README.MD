# README

![](./img/giphy.gif)


## About
rateMyDoctor is a single page application that allows users to look up doctors and check their reviews. It utilizes a Ruby on Rails backend serving as an API to a Javascript, HTML & CSS frontend. 


## Installation Instructions

Fork and clone this repository locally. This repository is logically seperated into two folders "backend" and "frontend".

### Backend Setup

- <b> The below steps will setup all Gems required for API setup: </b>

``` cd backend 
    bundle install
```

- <b> The following steps will create our Postgres database, migrate it (create a schema) and inject seed data into our API: </b>

``` 
    rails db:create
    rails db:migrate 
    rails db:seed
```

- <b> Starting the server: </b>

```
    rails s
```
### Frontend Setup

- <b> You can simply start the server using the following: </b>

```
    python -m SimpleHTTPServer
```
