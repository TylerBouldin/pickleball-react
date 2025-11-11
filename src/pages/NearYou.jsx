
import React, { useState, useEffect } from 'react';
import CourtCard from '../components/CourtCard.jsx';
import GroupItem from '../components/GroupItem.jsx';
import Modal from '../components/Modal.jsx';
import '../css/NearYou.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

function NearYou() {
  const [courts, setCourts] = useState([]);
  const [groups, setGroups] = useState([]);
  const [selectedCourt, setSelectedCourt] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [isCourtModalOpen, setIsCourtModalOpen] = useState(false);
  const [isGroupModalOpen, setIsGroupModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [courtsResponse, groupsResponse] = await Promise.all([
        fetch(`${API_URL}/api/courts`),
        fetch(`${API_URL}/api/groups`)
      ]);

      if (!courtsResponse.ok || !groupsResponse.ok) {
        throw new Error('Failed to fetch data');
      }

      const courtsData = await courtsResponse.json();
      const groupsData = await groupsResponse.json();

      setCourts(courtsData);
      setGroups(groupsData);
      setError(null);
    } catch (err) {
      setError('Unable to load data. Please try again later.');
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCourtClick = (court) => {
    setSelectedCourt(court);
    setIsCourtModalOpen(true);
  };

  const handleGroupClick = (group) => {
    setSelectedGroup(group);
    setIsGroupModalOpen(true);
  };

  const closeCourtModal = () => {
    setIsCourtModalOpen(false);
    setSelectedCourt(null);
  };

  const closeGroupModal = () => {
    setIsGroupModalOpen(false);
    setSelectedGroup(null);
  };

  if (loading) {
    return (
      <div className="content-wrapper">
        <h2>Find Pickleball Courts Near You</h2>
        <p className="loading-message">Loading courts and groups...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="content-wrapper">
        <h2>Find Pickleball Courts Near You</h2>
        <p className="error-message">{error}</p>
      </div>
    );
  }

  return (
    <div className="content-wrapper">
      <h2>Find Pickleball Courts Near You</h2>
      <p>Discover local pickleball courts, community centers, and playing groups in your area. Join the pickleball community and start playing today!</p>
      
      <div className="near-you-layout">
        <div className="address-section">
          <div className="address-box">
            <h3>Popular Local Courts</h3>
            <div id="courts-container">
              {courts.map(court => (
                <div key={court.id} onClick={() => handleCourtClick(court)} className="clickable-item">
                  <CourtCard 
                    name={court.name}
                    address={court.address}
                    hours={court.hours}
                    courts={court.courts}
                    amenities={court.amenities}
                  />
                </div>
              ))}
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
          {groups.map(group => (
            <div key={group.id} onClick={() => handleGroupClick(group)} className="clickable-item">
              <GroupItem 
                name={group.name}
                location={group.location}
                time={group.time}
                day={group.day}
                skillLevel={group.skillLevel}
                description={group.description}
              />
            </div>
          ))}
        </ul>
      </div>

      <Modal isOpen={isCourtModalOpen} onClose={closeCourtModal} title={selectedCourt?.name || ''}>
        {selectedCourt && (
          <div>
            <div className="modal-info-grid">
              <div className="modal-info-item">
                <strong>Address</strong>
                <span>{selectedCourt.address}</span>
              </div>
              <div className="modal-info-item">
                <strong>Hours</strong>
                <span>{selectedCourt.hours}</span>
              </div>
              <div className="modal-info-item">
                <strong>Phone</strong>
                <span>{selectedCourt.phone}</span>
              </div>
              <div className="modal-info-item">
                <strong>Fees</strong>
                <span>{selectedCourt.fees}</span>
              </div>
            </div>
            <h3>Courts Available</h3>
            <p>{selectedCourt.courts}</p>
            <h3>Amenities</h3>
            <p>{selectedCourt.amenities}</p>
            <h3>Parking</h3>
            <p>{selectedCourt.parking}</p>
          </div>
        )}
      </Modal>

      <Modal isOpen={isGroupModalOpen} onClose={closeGroupModal} title={selectedGroup?.name || ''}>
        {selectedGroup && (
          <div>
            <div className="modal-info-grid">
              <div className="modal-info-item">
                <strong>Location</strong>
                <span>{selectedGroup.location}</span>
              </div>
              <div className="modal-info-item">
                <strong>Day</strong>
                <span>{selectedGroup.day}</span>
              </div>
              <div className="modal-info-item">
                <strong>Time</strong>
                <span>{selectedGroup.time}</span>
              </div>
              <div className="modal-info-item">
                <strong>Skill Level</strong>
                <span>{selectedGroup.skillLevel}</span>
              </div>
            </div>
            <h3>About</h3>
            <p>{selectedGroup.description}</p>
            <h3>Organizer</h3>
            <p><strong>{selectedGroup.organizer}</strong></p>
            <p>Contact: {selectedGroup.contactEmail}</p>
            <h3>Average Attendance</h3>
            <p>{selectedGroup.averageAttendance}</p>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default NearYou;


