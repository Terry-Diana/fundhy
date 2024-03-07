import React from "react";
import ErrorBoundary from "./ErrorBoundary";

const Donar = ({ user, supportedStartups }) => {
  return (
    <ErrorBoundary>
      <div className="profile">
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
    </ErrorBoundary>
  );
};

export default Donar;
