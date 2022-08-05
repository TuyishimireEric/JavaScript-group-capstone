const addComment = (comments) => {
  const totalcomments = document.querySelector('.comment-title');
  totalcomments.insertAdjacentHTML('beforeend', `(${comments.length})`);
  const commentList = document.querySelector('.comments-container');
  commentList.innerHTML = '';
  comments.forEach((comment) => {
    commentList.innerHTML += `<li>${comment.creation_date}: ${comment.username}: ${comment.comment}</li>`;
  });
};

describe('fetch Series test', () => {
  const comments = [
    {
      creation_date: '1/08/2022',
      username: 'mucyo',
      comment: 'wow',
    },
    {
      creation_date: '2/08/2022',
      username: 'hirwa',
      comment: 'I love this movies',
    },
    {
      creation_date: '3/08/2022',
      username: 'Peter',
      comment: 'hhhhhhhhhhh',
    },
  ];
  test('check if getSeries is a function', () => {
    expect(typeof addComment).toBe('function');
  });
  test('check comment size', () => {
    expect(comments.length).toBe(3);
  });
});
