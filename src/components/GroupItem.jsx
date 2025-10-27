import React from 'react';
import '../css/GroupItem.css';

function GroupItem({ name, location, time, day, skillLevel, description }) {
  return (
    <li className="group-item">
      <strong>{name}</strong> - {location} | {day} at {time} | {skillLevel} | {description}
    </li>
  );
}

export default GroupItem;

