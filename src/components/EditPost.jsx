import React, { useContext } from 'react';
import Modal from 'react-modal'
import { Context } from './Context';

Modal.setAppElement('#root')

function EditPost({ post, modalIsOpen, setModalIsOpen, modalStyling }) {

  const {updatePost} = useContext(Context)

  // toggle function for modal open and close boolean
  function toggleModal() {
    setModalIsOpen(!modalIsOpen);
  }

  function editWuphf (e) {
    e.preventDefault()
    const postId =e.target.name
    const newContent = {content: e.target.newContent.value}
    updatePost(postId, newContent)
    toggleModal()
  }


  return (
    <Modal style={modalStyling} isOpen={modalIsOpen} onRequestClose={toggleModal}>
      <div>
        <h2>Edit Post</h2>
        <form onSubmit={editWuphf} name={post.id}>
        <div className='form-group'>
          <textarea type='text' name='newContent' placeholder="New content" defaultValue={post.content}/>
        </div>
        <div className='form-group'>
          <button className="modalButton" type='submit'>Save</button>
          <button className="modalButton" onClick={toggleModal}>Close</button>
        </div>

        </form>
      </div>
    </Modal>
  );
}

export default EditPost;