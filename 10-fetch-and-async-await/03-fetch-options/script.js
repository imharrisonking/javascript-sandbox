function createPost({title, body}) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            body: body,
        }),
        headers: {
            'Content-Type': 'application/json',
            'token': 'abc123'
        }
    })
    .then(response => response.json())
    .then(data => console.log(data));
};

createPost({title: 'My Post', body: 'This is my post'});