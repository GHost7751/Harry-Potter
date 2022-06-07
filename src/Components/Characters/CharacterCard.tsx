import React, { FC } from 'react';
import { Card } from 'react-bootstrap';
import CharacterProps from '../../Types/characters';

const Character:FC<CharacterProps> = (props) => {
    const {
        name,
        gender,
        house,
        dateOfBirth,
        actor,
        image
    } = props;
    return (
        <div>
            <Card style={{ width: '18rem'  }} >
            <Card.Img style={{height: '300px'}} variant="bottom" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Gender : {gender}
                        <br />
                        House : {house}
                        <br />
                        Date Of Birth : {dateOfBirth}
                        <br />
                        Actor : {actor}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export  {Character};