const deleteComment = async (comment_id) => {
    const url = `/comment/delete/${comment_id}`;
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({commentId: comment_id})
    });

    if(res.ok) {
        removeComment(comment_id);
    }
}

const removeComment = (comment_id) => {
    const comment = document.getElementById(`${comment_id}`);
    comment.remove();
}

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
        const { commentId } = await res.json();
        console.log(commentId);
        displayComment(username, content, commentId);
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

const displayComment = (username, content, commentId) => {
    const commentContainer = document.getElementById('comment-container');
    
    //댓글 하나 만들기
    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment';
    commentDiv.id = commentId;

    const commentDesDiv = document.createElement('div');
    const usernameP = document.createElement('p');
    usernameP.innerHTML = `<b>${username}</b>`;
    const contentP = document.createElement('p');
    contentP.innerText = content;

    commentDesDiv.appendChild(usernameP);
    commentDesDiv.appendChild(contentP);

    //삭제 버튼
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.addEventListener('click', () => deleteComment(commentId));

    commentDiv.appendChild(commentDesDiv);
    commentDiv.appendChild(deleteBtn);

    commentContainer.appendChild(commentDiv);

    //폼 초기화
    document.getElementById("username").value = '';
    document.getElementById("comment-content").value = '';
}

const createCommentBtn = document.getElementById('btn-create-comment');
const post_id = document.getElementById('post_id').value;
createCommentBtn.addEventListener('click', () => createComment(post_id));