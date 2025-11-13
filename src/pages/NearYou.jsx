
import React, { useState, useEffect } from 'react';
import CourtCard from '../components/CourtCard.jsx';
import GroupItem from '../components/GroupItem.jsx';
import Modal from '../components/Modal.jsx';
import '../css/NearYou.css';

const API_URL = process.env.REACT_APP_API_URL;

function NearYou() {
  const [courts, setCourts] = useState([]);
  const [groups, setGroups] = useState([]);
  const [selectedCourt, setSelectedCourt] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [isCourtModalOpen, setIsCourtModalOpen] = useState(false);
  const [isGroupModalOpen, setIsGroupModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    hours: '',
    courts: '',
    amenities: '',
    phone: '',
    parking: '',
    fees: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [courtsResponse, groupsResponse] = await Promise.all([
        fetch("https://pickle-server.onrender.com/api/courts"),
        fetch("https://pickle-server.onrender.com/api/groups")
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

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Court name is required';
    }
    
    if (!formData.address.trim()) {
      errors.address = 'Address is required';
    }
    
    if (!formData.hours.trim()) {
      errors.hours = 'Hours are required';
    }
    
    if (!formData.courts.trim()) {
      errors.courts = 'Court information is required';
    }
    
    if (!formData.amenities.trim()) {
      errors.amenities = 'Amenities are required';
    }
    
    const phonePattern = /^[\d\s\-\(\)]+$/;
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!phonePattern.test(formData.phone)) {
      errors.phone = 'Phone number must contain only digits, spaces, dashes, and parentheses';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      errors.phone = 'Phone number must be at least 10 digits';
    }
    
    if (!formData.parking.trim()) {
      errors.parking = 'Parking information is required';
    }
    
    if (!formData.fees.trim()) {
      errors.fees = 'Fee information is required';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    if (submitStatus) {
      setSubmitStatus(null);
      setSubmitMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus('error');
      setSubmitMessage('Please fix the errors in the form before submitting.');
      return;
    }

    try {
      const response = await fetch("https://pickle-server.onrender.com/api/courts", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        mode: 'cors'
      });

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text();
        throw new Error(`Server returned HTML instead of JSON. This usually means the POST endpoint isn't deployed yet. Response: ${text.substring(0, 100)}`);
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.details ? data.details.join(', ') : data.error || 'Failed to add court');
      }

      setSubmitStatus('success');
      setSubmitMessage('Court added successfully! It will appear in the list below.');
      
      setFormData({
        name: '',
        address: '',
        hours: '',
        courts: '',
        amenities: '',
        phone: '',
        parking: '',
        fees: ''
      });
      
      fetchData();
      
      setTimeout(() => {
        setShowForm(false);
        setSubmitStatus(null);
        setSubmitMessage('');
      }, 3000);
      
    } catch (err) {
      setSubmitStatus('error');
      if (err.message.includes('fetch')) {
        setSubmitMessage('Network error: Unable to reach the server. Please check your connection and ensure the server is running.');
      } else {
        setSubmitMessage(err.message || 'Unable to add court. Please try again later.');
      }
      console.error('Form submission error:', err);
    }
  };

  const toggleForm = () => {
    setShowForm(!showForm);
    setFormErrors({});
    setSubmitStatus(null);
    setSubmitMessage('');
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

      <div className="add-court-section">
        <div className="add-court-header">
          <h3>Share Your Favorite Court</h3>
          <p>Know a great pickleball court? Help others discover it by adding it to our list!</p>
          <button onClick={toggleForm} className="toggle-form-btn">
            {showForm ? 'Cancel' : 'Add a Court'}
          </button>
        </div>

        {showForm && (
          <form className="court-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Court Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={formErrors.name ? 'error' : ''}
                />
                {formErrors.name && <span className="error-message">{formErrors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="address">Address *</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className={formErrors.address ? 'error' : ''}
                />
                {formErrors.address && <span className="error-message">{formErrors.address}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="hours">Hours *</label>
                <input
                  type="text"
                  id="hours"
                  name="hours"
                  value={formData.hours}
                  onChange={handleInputChange}
                  placeholder="e.g., Open: 6 AM - 10 PM Daily"
                  className={formErrors.hours ? 'error' : ''}
                />
                {formErrors.hours && <span className="error-message">{formErrors.hours}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone *</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="e.g., (555) 123-4567"
                  className={formErrors.phone ? 'error' : ''}
                />
                {formErrors.phone && <span className="error-message">{formErrors.phone}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="courts">Courts Available *</label>
                <input
                  type="text"
                  id="courts"
                  name="courts"
                  value={formData.courts}
                  onChange={handleInputChange}
                  placeholder="e.g., 4 outdoor courts, 2 indoor courts"
                  className={formErrors.courts ? 'error' : ''}
                />
                {formErrors.courts && <span className="error-message">{formErrors.courts}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="fees">Fees *</label>
                <input
                  type="text"
                  id="fees"
                  name="fees"
                  value={formData.fees}
                  onChange={handleInputChange}
                  placeholder="e.g., $5 per person per day"
                  className={formErrors.fees ? 'error' : ''}
                />
                {formErrors.fees && <span className="error-message">{formErrors.fees}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group full-width">
                <label htmlFor="amenities">Amenities *</label>
                <input
                  type="text"
                  id="amenities"
                  name="amenities"
                  value={formData.amenities}
                  onChange={handleInputChange}
                  placeholder="e.g., Equipment rental available"
                  className={formErrors.amenities ? 'error' : ''}
                />
                {formErrors.amenities && <span className="error-message">{formErrors.amenities}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group full-width">
                <label htmlFor="parking">Parking Information *</label>
                <input
                  type="text"
                  id="parking"
                  name="parking"
                  value={formData.parking}
                  onChange={handleInputChange}
                  placeholder="e.g., Free parking available"
                  className={formErrors.parking ? 'error' : ''}
                />
                {formErrors.parking && <span className="error-message">{formErrors.parking}</span>}
              </div>
            </div>

            {submitStatus && (
              <div className={`submit-message ${submitStatus}`}>
                {submitMessage}
              </div>
            )}

            <button type="submit" className="submit-btn">Submit Court</button>
          </form>
        )}
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


