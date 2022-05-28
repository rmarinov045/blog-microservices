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

1. Make sure you have scaffold installed
2. Run `scaffold dev`

## Services:

| Name | Link |
| --- | --- |
| Comments | [readme](https://github.com/rmarinov045/blog-microservices/tree/main/comments) | 
| Event Bus | [readme](https://github.com/rmarinov045/blog-microservices/tree/main/event-bus) |
| Moderation | [readme](https://github.com/rmarinov045/blog-microservices/tree/main/moderation) |
| Posts | [readme](https://github.com/rmarinov045/blog-microservices/tree/main/posts) |
| Query | [readme](https://github.com/rmarinov045/blog-microservices/tree/main/query) |

