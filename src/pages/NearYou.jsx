import React from 'react';
import CourtCard from '../components/CourtCard.jsx';
import GroupItem from '../components/GroupItem.jsx';
import '../css/NearYou.css';

function NearYou() {
  return (
    <div className="content-wrapper">
      <h2>Find Pickleball Courts Near You</h2>
      <p>Discover local pickleball courts, community centers, and playing groups in your area. Join the pickleball community and start playing today!</p>
      
      <div className="near-you-layout">
        <div className="address-section">
          <div className="address-box">
            <h3>Popular Local Courts</h3>
            <div id="courts-container">
              <CourtCard 
                name="Community Recreation Center"
                address="123 Main Street"
                hours="Open: 6 AM - 10 PM Daily"
                courts="4 outdoor courts, 2 indoor courts"
                amenities="Equipment rental available"
              />
              <CourtCard 
                name="Riverside Park"
                address="456 Oak Avenue"
                hours="Open: Dawn to Dusk"
                courts="6 outdoor courts"
                amenities="Free to play, bring your own equipment"
              />
              <CourtCard 
                name="Sports Complex"
                address="789 Pine Street"
                hours="Open: 7 AM - 9 PM"
                courts="8 outdoor courts, 4 indoor courts"
                amenities="Lessons and tournaments available"
              />
            </div>
          </div>
        </div>
        
        <div className="map-section">
          <div className="map-container">
            <h3>Court Locations Map</h3>
            <div className="map-wrapper">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46454.44505772415!2d-81.22300744056702!3d33.9840968405181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f897904655ebd9%3A0x5bee2f04fb99468!2s24%20Hour%20Pickleball%20Club!5e1!3m2!1sen!2sus!4v1762129362922!5m2!1sen!2sus" 
                width="600" 
                height="450" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="24 Hour Pickleball Club Location"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="additional-info">
        <h3>Join Local Groups</h3>
        <p>Connect with other pickleball players in your area:</p>
        <ul id="groups-container">
          <GroupItem 
            name="Tuesday Night Pickleball"
            location="Community Center"
            time="6-8 PM"
            day="Tuesday"
            skillLevel="All Levels"
            description="Weekly community play"
          />
          <GroupItem 
            name="Weekend Warriors"
            location="Riverside Park"
            time="Saturday 9 AM"
            day="Saturday"
            skillLevel="Intermediate"
            description="Weekend morning games"
          />
          <GroupItem 
            name="Beginner's Club"
            location="Sports Complex"
            time="Thursday 7 PM"
            day="Thursday"
            skillLevel="Beginner"
            description="Perfect for new players"
          />
          <GroupItem 
            name="Senior Pickleball"
            location="Community Center"
            time="Monday/Wednesday 10 AM"
            day="Monday/Wednesday"
            skillLevel="All Ages"
            description="Senior-friendly games"
          />
        </ul>
      </div>
    </div>
  );
}

export default NearYou;

