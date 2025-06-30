import { useState } from "react";
import useSavedPeople from "../hooks/useSavedPeople";
import PersonCard from "../components/PersonCard";

export default function SavedPeople() {
  const { savedPeople, removePerson } = useSavedPeople();
  const [searchTerm, setSearchTerm] = useState("");

  // Filter saved people by first or last name (case-insensitive)
  const filteredPeople = savedPeople.filter((p) => {
    const fullName = `${p.name.first} ${p.name.last}`.toLowerCase();
    return fullName.includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <h1 className="text-xl mb-4">Saved People</h1>

      <input
        type="text"
        placeholder="Search saved people..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-6 px-3 py-2 border rounded w-full max-w-sm"
      />

      {filteredPeople.length === 0 ? (
        <p>No saved people found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPeople.map((p) => (
            <PersonCard
              key={p.login.uuid}
              person={p}
              onRemove={() => removePerson(p.login.uuid)}
            />
          ))}
        </div>
      )}
    </div>
  );
}