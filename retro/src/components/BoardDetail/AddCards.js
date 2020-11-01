import React, { useState } from "react";
import { Textarea, Form, Button, Media } from "reactstrap";
import "./BoardDetail.css";
import PlusIcon from "../../icons/add.png";

export default function AddCard(props) {
  const [isAddCardClicked, setIsAddCardClicked] = useState(false);

  return (
    <>
      {isAddCardClicked && (
        <Form>
          <textarea className="add-card-input form-control" placeholder="Add a title for card..."></textarea>
          <Button type="submit" className="btn btn-success btn-sm mb-2">
            Add
          </Button>
        </Form>
      )}
      {!isAddCardClicked && (
        <div className="footer" onClick={() => setIsAddCardClicked(true)}>
          <Media>
            <Media left>
              <Media
                src={PlusIcon}
                style={{
                  width: 15,
                  height: 15,
                  display: "inline-block",
                  marginRight: 5,
                }}
              />
            </Media>
            <Media>Add card ...</Media>
          </Media>
        </div>
      )}
    </>
  );
}
