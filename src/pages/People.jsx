import { useRef, useState, useCallback } from "react";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import useSavedPeople from "../hooks/useSavedPeople";
import PersonCard from "../components/PersonCard";

export default function People() {
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  const loader = useRef(null);

  const { savePerson, isSaved } = useSavedPeople();

  const fetchMore = useCallback(() => {
    fetch(`https://randomuser.me/api/?page=${page}&results=10`)
      .then(res => res.json())
      .then(data => {
        setPeople(prev => [...prev, ...data.results]);
        setPage(prev => prev + 1);
      });
  }, [page]);

  useInfiniteScroll(fetchMore, loader);

  return (
    <div>
      <h1 className="text-xl mb-4">People</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {people.map(p => (
          <PersonCard
            key={p.login.uuid}
            person={p}
            onSave={savePerson}
            saved={isSaved(p.login.uuid)}
          />
        ))}
      </div>
      <div ref={loader} className="h-10"></div>
    </div>
  );
}