import addCommentToDom from './addCommentToDom.js';

const commentURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PBhw11GTdXlueafWDmvL/comments';

const fetchComments = async (id) => {
  const request = new Request(`${commentURL}?item_id=${id}`);
  const response = await fetch(request);
  if (!response.ok) {
    throw new Error('No comments added for this movie');
  }
  const recieveComment = await response.json();
  addCommentToDom(recieveComment);
};

export default fetchComments;