import React from "react";

const Donar = ({ user, supportedStartups }) => {
  if (!user || !supportedStartups) {
    throw new Error("Error: User or supported startups data is missing.");
  }

  return (
    <div className="donar">
      <h2>Donar</h2>
      <div className="user-info">
        <h3>User Information</h3>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        {/* Add more user information fields as needed */}
      </div>
      <div className="supported-startups">
        <h3>Supported Startups</h3>
        <ul>
          {supportedStartups.map((startup) => (
            <li key={startup.id}>
              <strong>{startup.name}</strong>
              <p>{startup.description}</p>
              <p>
                <strong>Funding Goal:</strong> ${startup.fundingGoal}
              </p>
              {/* Add more startup information fields as needed */}
            </li>
          ))}
        </ul>
        {/* If no startups are supported, display a message */}
        {supportedStartups.length === 0 && <p>No startups supported yet.</p>}
      </div>
    </div>
  );
};

DonarFallbackUI = () => {
  return (
    <div className="donar-fallback">
      <h2>Donar</h2>
      <p>Something went wrong. Please try again later.</p>
    </div>
  );
};

export default Donar;
