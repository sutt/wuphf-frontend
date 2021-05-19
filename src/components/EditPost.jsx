import React, { useContext } from 'react';
import Modal from 'react-modal'
import { Context } from './Context';

Modal.setAppElement('#root')

function EditPost({ post, modalIsOpen, setModalIsOpen }) {

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
    <Modal isOpen={modalIsOpen} onRequestClose={toggleModal}>
      <h2>Edit Post</h2>
      <button onClick={toggleModal}>x</button>
      <form onSubmit={editWuphf} name={post.id}>
        <textarea type='text' name='newContent' defaultValue={post.content}/>
        <button type='submit'>Save</button>
      </form>
    </Modal>
  );
}

export default EditPost;