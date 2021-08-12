import React, { useState } from "react";
import { Button, Row } from "reactstrap";
import _ from "lodash";
import deck from "./util/data";
import DeckCard from "./components/DeckCard";



function App() {

  const shuffledDeck = _.shuffle(deck);

  const [hand, setHand] = useState([]);
  const [message, setMessage] = useState("Click the button to deal a hand!");
  const [combo, setCombo] = useState("");

  function dealHand() {
    setHand(shuffledDeck.slice(0, 5).map(card => <DeckCard card={card} />));
  }

  return (
    <div className="App">
      <div className="h-100 w-100 p-5 d-flex align-items-center justify-content-center">
        <div class="w-100">
          <Row className="p-5">
            {hand}
          </Row>
          <div className="text-center">{message}</div>
          <div className="m-4 d-flex align-items-center justify-content-center">
            <Button size="lg" color="primary" onClick={dealHand}>Deal</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
