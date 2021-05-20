import axios from 'axios'
import React, { useContext } from 'react';
import Modal from 'react-modal'
import { Context } from './Context';

Modal.setAppElement('#root')

function EditUser({ userInfoModalIsOpen, setUserInfoModalIsOpen }) {

  const {baseURL, setUser, user} = useContext(Context)

  // toggle function for modal open and close boolean
  function toggleUserInfoModal() {
    setUserInfoModalIsOpen(!userInfoModalIsOpen);
  }

  // axios update request
  async function updateUser (newUserInfo) {
    const url = `${baseURL}/users/${user._id}`
    const updatedUser = await axios.put(url, newUserInfo)
    setUser(updatedUser.data)
  }

  function editUser (e) {
    e.preventDefault()
    const newUserInfo = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      profilePhoto: e.target.profilePhoto.value,
      dob: e.target.dob.value,
      location: e.target.location.value,
    }
    updateUser(newUserInfo)
    toggleUserInfoModal()
  }

  return (
    <Modal isOpen={userInfoModalIsOpen} onRequestClose={toggleUserInfoModal}>
      <h2>Edit Profile</h2>
      <button onClick={toggleUserInfoModal}>x</button>
      <form onSubmit={editUser}>
      <div className='form-group'>
        <input className="form-control" type='text' name='firstName' defaultValue={user.firstName} placeholder='First name'/>
      </div>
      <div className='form-group'>
        <input className="form-control" type='text' name='lastName' defaultValue={user.lastName} placeholder='Last name' />
      </div>
      <div className='form-group'>
        <input className="form-control" type='text' name='profilePhoto' defaultValue={user.profilePhoto} placeholder='Photo'/>
      </div>
      <div className='form-group'>
        <input className="form-control" type='text' name='dob' defaultValue={user.dob} placeholder='Date of Birth'/>
      </div>
      <div className='form-group'>
       <input className="form-control" type='text' name='location' defaultValue={user.location} placeholder='Location'/>
      </div>
      <div className='form-group'>
       <button type='submit'>Update Profile Info</button>
      </div>
      </form>
    </Modal>
  );
}

export default EditUser;