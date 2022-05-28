# Query service

## Port - 4002

## Docker image tag - rmarinov045/query

## Endpoints
* GET /posts - receive all currently saved posts
* POST /posts - receives events of type event and handles them

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