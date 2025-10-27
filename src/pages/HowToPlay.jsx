import React from 'react';
import InstructionCard from '../components/InstructionCard.jsx';
import '../css/HowToPlay.css';

function HowToPlay() {
  return (
    <div className="content-wrapper">
      <h2>How to Play Pickleball</h2>
      <p>Learn the basics of pickleball with our comprehensive guide. From court layout to scoring, we'll teach you everything you need to know to start playing this exciting sport.</p>
      
      <div className="how-to-play-sections">
        <InstructionCard 
          title="Court Layout"
          imgName="/images/courtdimensions.jpg"
          description="A pickleball court is 20 feet wide and 44 feet long, usually placed within a tennis court. The court is divided into right and left service areas by a center line, with a non-volley zone (kitchen) extending 7 feet from the net on each side. The net is 3 feet high and 7 feet wide."
          altText="Pickleball court layout"
        />
        <InstructionCard 
          title="Saying the Score"
          imgName="/images/cs1.webp"
          description="The player serving must always say the score before hitting the ball. The score is always three numbers. The first number is the serving team's score, the second number is the returning team's score, and the third number is the teammate who is serving the ball."
          altText="Pickleball score calling"
        />
        <InstructionCard 
          title="Point System"
          imgName="/images/pointsystem.jpg"
          description="Pickleball is either played to 11 or 21 points, and you must win by 2 points. Only the serving team can score points. If the team that did not serve wins the rally, then no point is awarded to either team and the next person in line serves."
          altText="Pickleball scoring system"
        />
        <InstructionCard 
          title="Serving and Returning Rules"
          imgName="/images/servingpickleball.webp"
          description="Teams get two chances to score except the first serve of the game where they only get one chance to score. The teammate on the right side of the court always serves first and continues serving until their team loses the rally. The other teammate then gets a chance to serve until the team loses a rally and the ball then goes to the opposing team. A serve must be completed in an underhand fashion with the paddle below the waist. The ball must travel over the net without hitting the closer side of the court or the kitchen and land in the opponents diagonal court. Both teams must let the ball bounce once on their side before hitting it. After each team has done this (one bounce per side), the ball can be hit either before or after it bounces."
          altText="Pickleball serving technique"
        />
        <InstructionCard 
          title="Teamwork"
          imgName="/images/teamworkpickle.webp"
          description="Pickleball is typically played as doubles. Good teamwork involves communication, positioning, and covering the court effectively. Partners should work together to control the net and force opponents into difficult shots."
          altText="Pickleball doubles strategy"
        />
        <InstructionCard 
          title="Kitchen Rules"
          imgName="/images/kitchenpickleball.webp"
          description="The non-volley zone (kitchen) is the 7-foot area on each side of the net. Players cannot volley (hit the ball in the air) while standing in this zone. You must let the ball bounce before hitting it if you're in the kitchen."
          altText="Pickleball kitchen rules"
        />
        <InstructionCard 
          title="Basic Strategy"
          imgName="/images/stratpickle.webp"
          description="Start with a good serve, move to the net when possible, and control the kitchen. Use dinks (soft shots) to keep opponents back, and look for opportunities to hit winners. Stay patient and wait for the right shot."
          altText="Pickleball strategy tips"
        />
      </div>
    </div>
  );
}

export default HowToPlay;

