import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/NotFound.css';

const PageNotFound = () => {
  return (
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="col-sm-12 text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center ">404</h1>
              </div>
              <div className="content_box_404">
                <h3 className="h2">{"Look like you're lost"}</h3>
                <p>the page you are looking for is not available!</p>
                <Link to={'/dashboard'} className="link_404">
                  Go to dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
