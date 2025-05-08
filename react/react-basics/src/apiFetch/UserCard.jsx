import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <h2>{user.name}</h2>
      <p>
        <strong>Username:</strong> {user.username}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p>
        <strong>Website:</strong> {user.website}
      </p>
      <p>
        <strong>Address:</strong> {user.address.street}, {user.address.suite},{" "}
        {user.address.city}, {user.address.zipcode}
      </p>
      <p>
        <strong>Geo:</strong> Lat: {user.address.geo.lat}, Lng:{" "}
        {user.address.geo.lng}
      </p>
      <p>
        <strong>Company:</strong> {user.company.name}
      </p>
      <p>
        <strong>Catch Phrase:</strong> {user.company.catchPhrase}
      </p>
      <p>
        <strong>Business:</strong> {user.company.bs}
      </p>
    </div>
  );
};

export default UserCard;
