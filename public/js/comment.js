const createComment = async (post_id) => {
    const username = document.getElementById("username").value;
    const content = document.getElementById("comment-content").value;

    const url = `/comment/create/${post_id}`;
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: username, content: content})
    });

    if(res.ok) {
        displayComment(username, content);
    }
}

/* <div class="comment">
    <div>
        <p><b><%= comment.username %></b></p>
        <p><%= comment.content %></p>
    </div>
    <form action="/comment/delete/<%= comment.comment_id %>" method="post">
        <button>Delete</button>
    </form>
</div> */

const displayComment = (username, content) => {
    const commentContainer = document.getElementById('comment-container');
    
    //댓글 하나 만들기
    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment';

    const commentDesDiv = document.createElement('div');
    const usernameP = document.createElement('p');
    usernameP.innerHTML = `<b>${username}</b>`;
    const contentP = document.createElement('p');
    contentP.innerText = content;

    commentDesDiv.appendChild(usernameP);
    commentDesDiv.appendChild(contentP);

    commentDiv.appendChild(commentDesDiv);

    commentContainer.appendChild(commentDiv);
}

const createCommentBtn = document.getElementById('btn-create-comment');
const post_id = document.getElementById('post_id').value;
createCommentBtn.addEventListener('click', () => createComment(post_id));