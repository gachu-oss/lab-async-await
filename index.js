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
