# Moderation service

## Port - 4003

## Docker image tag - rmarinov045/moderation

## Endpoints
* `POST` `/events` - used to receive events

Event object structure:
```
{
    type: string,
    data: Posts | Comment
}
```