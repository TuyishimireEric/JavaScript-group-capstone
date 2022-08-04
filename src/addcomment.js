
/* eslint-disable camelcase */
import fetchComments from './fetchComments.js';

const commentURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PBhw11GTdXlueafWDmvL/comments';

const postComment = async (e) => {
  e.preventDefault();
  const movieID = e.target;

  const name = document.getElementById('name').value.trim();
  const addComment = document.getElementById('added-comment').value.trim();
  const commentForm = document.querySelector('.comment-form');

  if (name && addComment) {
    const result = await fetch(commentURL, {
      method: 'POST',
      body: JSON.stringify({
        item_id: `${movieID.id}`,
        username: `${name}`,
        comment: `${addComment}`,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    commentForm.reset();
    await result.text();
    fetchComments(movieID.id);
  }
};

export default postComment;