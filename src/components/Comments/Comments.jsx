import './Comments.scss';

function Comments({onSubmit, comments,}){

    return(
        <section className='comments'>

         <form onSubmit={onSubmit} className='comments-form'>
             <label className='comments-form__label' htmlFor="name">Name</label>
             <input className='comments-form__name' type="text" name='name' placeholder='First Name'/>
             <textarea className='comments-form__text' id='#' name='textarea'rows={20} placeholder='Type here.....'/>

             <button>Comment</button>

             
             
         </form>
         <div className='comments-frame'>
             <h2>Your Commments goes here</h2>

             <ul className='comments-lists'>
                {comments.map ((comment, index) =>(
                    <li className='comments-lists__item' key= {index}>
                        <strong>{comment.name}:</strong>{comment.textarea}
                    </li>
                ))}
             </ul>
         </div>


        </section>
    )
}
export default Comments;