# Comments service

## Port - 4001

## Docker image tag - rmarinov045/comments

## Endpoints
* GET /posts/:id/comments - receive post by postID
* POST /posts/:id/comments - create comment for post by postID
* POST /events - receive and handle events

commentByPostId structure:
```
{
    [
        Post
    ]
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
Event object structure:
```
{
    type: string,
    data: Posts | Comment
}
```