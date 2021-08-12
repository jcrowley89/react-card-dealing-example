import React from 'react'
import { Card, Col } from "reactstrap";

const DeckCard = ({ card }) => {

    let color = "dark"
    if (card.suit.name === "Hearts" || card.suit.name === "Diamonds") {
        color = "danger";
    }

    return (
        <Col>
            <Card className={`shadow px-2 py-5 text-center text-${color}`} inverse>
                <h2>
                    {card.name === "10" ? card.name : card.name[0]}
                    <i className={`bi ${card.suit.symbol}`}></i>
                </h2>
            </Card>
        </Col>
    )
}

export default DeckCard;
