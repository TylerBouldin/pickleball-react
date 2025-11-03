import React from 'react';
import ProductCard from '../components/ProductCard.jsx';
import '../css/Shop.css';

function Shop() {
  return (
    <div className="content-wrapper">
      <h2>Shop Pickleball Equipment</h2>
      <p>Find the perfect gear to improve your game. We offer high-quality paddles, balls, shoes, and accessories for players of all skill levels.</p>
      
      <div className="shop-grid">
        <ProductCard 
          name="Pro Paddle Set"
          imgName={`${process.env.PUBLIC_URL}/images/proPaddleSet.jpg`}
          price="$89.99"
          description="High-performance paddle set for competitive players"
          skillLevel="Advanced"
        />
        <ProductCard 
          name="Pickleball Balls (6-pack)"
          imgName={`${process.env.PUBLIC_URL}/images/pickleBallz.jpg`}
          price="$24.99"
          description="Durable outdoor pickleballs"
          skillLevel="All Levels"
        />
        <ProductCard 
          name="Beginner Paddle"
          imgName={`${process.env.PUBLIC_URL}/images/beginPaddle.webp`}
          price="$45.99"
          description="Perfect starter paddle for new players"
          skillLevel="Beginner"
        />
        <ProductCard 
          name="Court Shoes"
          imgName={`${process.env.PUBLIC_URL}/images/pickleShoes.webp`}
          price="$79.99"
          description="Comfortable court shoes with great traction"
          skillLevel="All Levels"
        />
        <ProductCard 
          name="Paddle Cover"
          imgName={`${process.env.PUBLIC_URL}/images/paddleCover.jpeg`}
          price="$19.99"
          description="Protective cover for your paddle"
          skillLevel="All Levels"
        />
        <ProductCard 
          name="Grip Tape"
          imgName={`${process.env.PUBLIC_URL}/images/pickleGrip.webp`}
          price="$12.99"
          description="Non-slip grip tape for better control"
          skillLevel="All Levels"
        />
        <ProductCard 
          name="Team Uniform"
          imgName={`${process.env.PUBLIC_URL}/images/pickleUni.jpg`}
          price="$39.99"
          description="Comfortable team uniform for tournaments"
          skillLevel="All Levels"
        />
        <ProductCard 
          name="Equipment Bag"
          imgName={`${process.env.PUBLIC_URL}/images/bagpick.webp`}
          price="$34.99"
          description="Spacious bag to carry all your gear"
          skillLevel="All Levels"
        />
      </div>
    </div>
  );
}

export default Shop;

