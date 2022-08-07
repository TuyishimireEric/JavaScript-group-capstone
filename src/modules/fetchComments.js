const addComment = (comments) => {
  const totalcomments = document.querySelector('.count-commments');
  totalcomments.innerHTML = `(${comments.length})`;
  const commentList = document.querySelector('.comments-container');
  commentList.innerHTML = '';
  comments.forEach((comment) => {
    commentList.innerHTML += `<li class="all-commented"><span class="date">${comment.creation_date}</span> ${comment.username}: <span class="commented">${comment.comment}</span></li>`;
  });
};

const commentURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/TDTG3sxn7jY0mfJHgG9a/comments';

const fetchComments = async (id) => {
  const request = new Request(`${commentURL}?item_id=${id}`);
  const response = await fetch(request);
  if (!response.ok) {
    throw new Error('No comments added for this movie');
  }
  const getComment = await response.json();
  addComment(getComment);
};

export default fetchComments;