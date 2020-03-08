import React, { useState, useEffect } from 'react';

function useCompatLocalStorage(friendID) {
  const [isCompatible, setIsCompatible] = useState(null);

  useEffect(() => {
    try {
      const testData = "__useCompatLocalStorage__";
      storage = window.localStorage;
      storage.setItem(testData, testData);
      storage.removeItem(testData);
      setIsCompatible(true);
    } catch (e) {
      
      if (e.name === "SecurityError") {
        // SecurityError
        // The request violates a policy decision, or the origin is not a valid scheme/host/port tuple 
        // (this can happen if the origin uses the file: or data: scheme, for example). For example, the 
        // user may have their browser configured to deny permission to persist data for the specified origin.
        setIsCompatible(false);
      }

      // Catch all other errors and set the state.
      setIsCompatible(false);
    }
  });

  return isCompatible;
}

export default useCompatLocalStorage;