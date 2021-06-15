import React, { useState } from 'react';

const DropdownContent = () => {
  const [displayDropdown, updateDisplayDropdown] = useState(false);
  const toggleDropdownContent = () => {
    updateDisplayDropdown(!displayDropdown);
  };
  return (
    <div className="dropdownContainer">
      <button
        type="button"
        // className="dropdownButton"
        className="navigation__container--userLogo dropdownButton"
        onClick={toggleDropdownContent}
      >
        <div>
          {displayDropdown && (
            <>
              <div className="dropdownContent">
                <div>
                  <div className="dropdownContent--user"></div>
                  <p className="dropdownContent--user-text">Andres</p>
                </div>
                <div>
                  <div className="dropdownContent--user dropdownContent--user-2"></div>
                  <p className="dropdownContent--user-text">Tony</p>
                </div>
                <div>
                  <div className="dropdownContent--user dropdownContent--user-3"></div>
                  <p className="dropdownContent--user-text">Luis</p>
                </div>
                <p className="dropdownContent-text">Manage Profiles</p>
              </div>

              <div className="dropdownContent dropdownContent--2">
                <p className="dropdownContent-textOutside">Account</p>
                <p className="dropdownContent-textOutside">Help Center</p>
                <p className="dropdownContent-textOutside">
                  Sign out of Netflix
                </p>
              </div>
            </>
          )}
        </div>
      </button>
    </div>
  );
};

export default DropdownContent;
