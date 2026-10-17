// Write your code here!

function displayPost(posts){
    // select target list with id of post-list
    const postList =document.querySelector('#post-list');

    // loop throuth post list
    posts.forEach(post => {
        // create a new <li> tag
        const li = document.createElement('li');

        // create a new <h1> tag 
        const h1 = document.createElement('h1');

        // create a new <p> tag
        const p = document.createElement('p');
        p.textContent = post.body;
        // append h1 and p to li
        li.appendChild(h1);
        li.appendChild(p);


        // append li to postList
        postList.appendChild(li);
    });
}

async function fetchPosts(){
    try {
        // fetch data from jsonplaceholder API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const posts = await response.json();

        // call displayPost function to display the posts
        displayPost(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);     
    }
}  

fetchPosts();
