import React from 'react';
import './Packages.css';

const Packages = () => {
  const handleButtonClick = () => {
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSeZTbkLO_8_nD2ZciRj0TccZwbzjBEwmbcIqdggGD5CFOnfRQ/viewform?usp=sf_link';
  };

  return (
    <div className="packages-container">
      <h1 className="packages-title">Service Packages</h1>
      <p className="packages-description">
        DogePond offers a variety of different Services for individuals and Projects alike.
      </p>
      <div className="package">
        <h2 className="package-title">Rarity site</h2>
        <p className="package-description">
          We will build you a webpage for your project to check the rarity of your traits & individual inscriptions in your collection.
        </p>
        <button onClick={handleButtonClick} className="enquire-button">Enquire</button>
      </div>
      <div className="package">
        <h2 className="package-title">Inscription Services</h2>
        <div className="package-description">
          A full minting resource for your project from start to finish
          Offering
          <ul>
            <li>Resizing/Compression</li>
            <li>Etching Dunes</li>
            <li>Large file sizes</li>
            <li>Collection generation</li>
            <li>All Marketplace Metadata</li>
          </ul>
          <button onClick={handleButtonClick} className="enquire-button">Enquire</button>
        </div>
      </div>
      <div className="package">
        <h2 className="package-title">Advertising/Marketing</h2>
        <div className="package-description">
          <h3>Banner Ads</h3>
          <p>
            Banner Ads are a great way to get your project in front of the Doginal Community. Our Banner pool is front and centre of the Home page as users browse the site!
          </p>
          <h3>Promotions</h3>
          <p>
            We offer collaboration and engagement opportunities for projects looking for social media clout and growth.
          </p>
          <button onClick={handleButtonClick} className="enquire-button">Enquire</button>
        </div>
      </div>
      <h1>HOLDER DISCOUNTS </h1>
      <p>DoginalDuck holders will receive discounted rates for service packages per duck up to 5 ducks. Rates may vary per package/custom job.</p>
    </div>
  );
};

export default Packages;
