# blog-microservices

Simple blog app, used for practicing microservices, docker and kubernetes.

## Description

Built with React and Express. Uses an event driven architecture for creating multiple microservices, which emit events. They are then propagates to all microservices by a simple event bus. 

## Features:
* Comment service - create and retrieve comments
    * Emits event when comment is created
* Event bus - handle generated events and propagate them to all services
    * Has own simple events storage
* Moderation - receives event, when comment is created and emits event when it is moderated.
* Posts - retrieve and create posts
    * Emits event when a post is created
* Query - retrieve posts and comments
    * Fetches events on startup and handles them

## How to run:

1. Make sure you have scaffold, docker and kubernetes installed and running
2. The app is deployed at 'posts.com' instead of localhost. To be able to run it, you have to edit the `hosts` file of your OS and add the following line (reroute requests to localhost):
--> `posts.com 127.0.0.1`
4. Run `skaffold dev`
   - `NOTE:` Some errors may appear and the process may exit after running the command. If encountered, run the command again
6. Open a web browser and go to 'posts.com'

## Services:

| Name | Link |
| --- | --- |
| Comments | [readme](https://github.com/rmarinov045/blog-microservices/tree/main/comments) | 
| Event Bus | [readme](https://github.com/rmarinov045/blog-microservices/tree/main/event-bus) |
| Moderation | [readme](https://github.com/rmarinov045/blog-microservices/tree/main/moderation) |
| Posts | [readme](https://github.com/rmarinov045/blog-microservices/tree/main/posts) |
| Query | [readme](https://github.com/rmarinov045/blog-microservices/tree/main/query) |

