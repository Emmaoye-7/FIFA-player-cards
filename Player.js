import React from 'react';
import { Card } from 'react-bootstrap';

function Player({
  name = 'Unknown player',
  team = 'Unattached',
  nationality = 'Unknown',
  jerseyNumber = 0,
  age = 0,
  imageUrl = 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=900&q=85',
}) {
  return (
    <Card
      className="h-100 border-0 shadow-sm overflow-hidden"
      style={{ borderRadius: '1rem' }}
    >
      <Card.Img
        variant="top"
        src={imageUrl}
        alt={`Football action representing ${name}`}
        style={{ height: '240px', objectFit: 'cover' }}
      />
      <Card.Body className="p-4">
        <div className="d-flex justify-content-between align-items-start gap-3 mb-3">
          <div>
            <Card.Title as="h2" className="h5 fw-bold mb-1">
              {name}
            </Card.Title>
            <Card.Subtitle className="text-secondary">{team}</Card.Subtitle>
          </div>
          <span
            className="badge rounded-pill text-bg-primary fs-6"
            aria-label={`Jersey number ${jerseyNumber}`}
          >
            #{jerseyNumber}
          </span>
        </div>
        <Card.Text className="mb-0 text-secondary">
          <span className="d-block">
            <strong className="text-dark">Nationality:</strong> {nationality}
          </span>
          <span className="d-block">
            <strong className="text-dark">Age:</strong> {age}
          </span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

Player.defaultProps = {
  name: 'Unknown player',
  team: 'Unattached',
  nationality: 'Unknown',
  jerseyNumber: 0,
  age: 0,
  imageUrl:
    'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=900&q=85',
};

export default Player;
