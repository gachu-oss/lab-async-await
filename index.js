// Write your code here!

function displayPosts(posts) {
    // Select the target list with id of post-list
    const postList = document.querySelector('#post-list');

    // Loop through the posts list
    posts.forEach(post => {
        // Create a new <li> tag
        const li = document.createElement('li');

        // Create a new <h1> tag and add the title
        const h1 = document.createElement('h1');
        h1.textContent = post.title;

        // Create a new <p> tag and add the body
        const p = document.createElement('p');
        p.textContent = post.body;

        // Append h1 and p to li
        li.appendChild(h1);
        li.appendChild(p);

        // Append li to postList
        postList.appendChild(li);
    });
}

async function fetchPosts() {
    try {
        // Fetch data from JSONPlaceholder API using async/await
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();

        // Call displayPosts after fetching data
        displayPosts(data);
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

// Automatically invoke fetchPosts when the script loads
fetchPosts();