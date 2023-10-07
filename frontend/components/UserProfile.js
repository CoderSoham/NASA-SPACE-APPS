// src/components/UserProfile.js
import React, { useState, useEffect } from "react";

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "",
    profilePicture: "",
    skills: "",
    expertise: "",
    contributions: "",
  });
  const [editMode, setEditMode] = useState(false);

  // Fetch user data from the backend API
  useEffect(() => {
    // Implement API fetch logic here
    // Example: fetchUserDataFromAPI()
  }, []);

  // Handle form submission to update user data
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement API update logic here
    // Example: updateUserProfileOnAPI(user)
    setEditMode(false);
  };

  // Handle file input for profile picture
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // Implement logic to upload and update profile picture
  };

  return (
    <div>
      <h2>User Profile</h2>
      <img src={user.profilePicture} alt="Profile" />
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Skills"
            value={user.skills}
            onChange={(e) => setUser({ ...user, skills: e.target.value })}
          />
          <input
            type="text"
            placeholder="Expertise"
            value={user.expertise}
            onChange={(e) => setUser({ ...user, expertise: e.target.value })}
          />
          <textarea
            placeholder="Previous Contributions"
            value={user.contributions}
            onChange={(e) => setUser({ ...user, contributions: e.target.value })}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <div>
          <p>Name: {user.name}</p>
          <p>Skills: {user.skills}</p>
          <p>Expertise: {user.expertise}</p>
          <p>Previous Contributions: {user.contributions}</p>
          <button onClick={() => setEditMode(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
