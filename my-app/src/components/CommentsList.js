import React, { useState } from 'react';

const CommentsList = () => {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
    ]);

    const handleDeleteComment = (id) => {
        setComments(comments.filter(comment => comment.id !== id));
    };

    return (
        <div className='comments'>
            {comments.map(comment => (
                <div key={comment.id} className="comment">
                    <p>{comment.text}</p>
                    <button onClick={() => handleDeleteComment(comment.id)} className='button'>Удалить</button>
                </div>
            ))}
        </div>
    );
};

export default CommentsList;