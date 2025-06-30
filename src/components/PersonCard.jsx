export default function PersonCard({ person, onSave, onRemove, saved }) {
  return (
    <div className="p-4 transition-colors rounded-md border-2 shadow text-center">
      <img src={person.picture.medium} alt="" className="rounded-full mx-auto mb-2" />
      <h2 className="font-bold">{person.name.first} {person.name.last}</h2>
      <p>{person.email}</p>

      {onSave && !saved && (
        <button
          className="mt-3 px-4 py-1 rounded text-white bg-blue-500 hover:bg-blue-600"
          onClick={() => onSave(person)}
        >
          Save
        </button>
      )}

      {onSave && saved && !onRemove && (
        <button
          className="mt-3 px-4 py-1 rounded text-white bg-green-500 cursor-default"
          disabled
        >
          Saved
        </button>
      )}

      {onRemove && (
        <button
          className="mt-3 px-4 py-1 rounded text-white bg-red-500 hover:bg-red-600"
          onClick={onRemove}
        >
          Remove
        </button>
      )}
    </div>
  );
}