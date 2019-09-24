import React from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

const Account = () => {
 return(
   <div className="account-container">
   <h1>Welcome Username</h1>
   <Card className="account-card">
     <CardBody className="account-body">
       <CardTitle>Saved Comments</CardTitle>
       <CardText>Comments</CardText>
       <Button>Delete Favorite</Button>
     </CardBody>
   </Card>
 </div>          
 );
};

export default Account;


