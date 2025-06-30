import { useState, useEffect } from "react";

export default function useSavedPeople() {
  const [savedPeople, setSavedPeople] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("savedPeople")) || [];
    setSavedPeople(stored);
  }, []);

  const isSaved = (uuid) => {
    return savedPeople.some(p => p.login.uuid === uuid);
  };

  const savePerson = (person) => {
    if (!isSaved(person.login.uuid)) {
      const updated = [...savedPeople, person];
      localStorage.setItem("savedPeople", JSON.stringify(updated));
      setSavedPeople(updated);
    }
  };

  const removePerson = (uuid) => {
    const updated = savedPeople.filter(p => p.login.uuid !== uuid);
    localStorage.setItem("savedPeople", JSON.stringify(updated));
    setSavedPeople(updated);
  };

  return { savedPeople, savePerson, removePerson, isSaved };
}