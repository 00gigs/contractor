import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Qoute() {
 
  return (
    <div className="cta">
      <Link to="/book" className="d-grid gap-2" size="lg">
        <Button  type='submit'>
          Schedule your Consultation Here
        </Button>
      </Link>
    </div>
  );
}

export default Qoute;
