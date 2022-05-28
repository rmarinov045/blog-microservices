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
| Comments | [readme]() | 
| Event Bus | [readme]() |
| Moderation | [readme]() |
| Posts | [readme]() |
| Query | [readme]() |

