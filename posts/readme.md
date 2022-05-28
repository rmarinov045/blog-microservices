# Posts service

## Port - 4000

## Docker image tag - rmarinov045/posts

## Endpoints
* GET /posts - receive all currently saved posts - backup endpoint
* POST /posts/create - creates a post with the passed title and auto-generated ID
* POST /events - used to receive events

Event object structure:
```
{
    type: string,
    data: Posts | Comment
}
```
Posts object structure:
```
{
    [postID :string]: {
        id: string,
        title: string,
        comments: []
    }
}
```
Comment object structure:
```
{
    [commentID :string]: {
        id: string,
        content: string,
        status: rejected | approved | pending
    }
}
```