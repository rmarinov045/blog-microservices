# Event-bus service

## Port - 4005

## Docker image tag - rmarinov045/event-bus

## Endpoints
* GET /events - receive all currently saved events
* POST /events - creates event and propagates it to all services

Event object structure:

{
    type: string,
    data: Posts | Comment
}

Events object structure:

Event[]
