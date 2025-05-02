import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light">
      <h1 className="display-1 text-danger">Oops!</h1>
      <p className="lead text-center">
        The page you're looking for doesn't exist...
      </p>
      <button className="btn btn-primary mt-3" onClick={handleGoBack}>
        Go Back
      </button>
    </div>
  );
};

export default ErrorPage;
