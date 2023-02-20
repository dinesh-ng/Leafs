import { useState } from "react";
import Leaf from "./Leaf";
import CreateLeaf from "./CreateLeaf";
import styles from "../css/landingPage.module.css";
import leafData from "../utils/leafData";

const Main = (props) => {
  const [allLeaves, setAllLeaves] = useState(leafData);
  const handleDelete = (id) => {
    console.log(id);
    setAllLeaves((prev) => {
      return allLeaves.filter((leaf) => {
        return id !== leaf.id;
      });
    });
  };
  const createLeaf = (newleaf) => {
    allLeaves.push(newleaf);
  };
  return (
    <>
      <div className={styles.leaves}>
        <CreateLeaf addLeaf={createLeaf} />
        {allLeaves.map((leaf) => (
          <Leaf
            key={leaf.id}
            id={leaf.id}
            title={leaf.title}
            content={leaf.content.substring(0, 60)}
            onDelete={handleDelete}
          />
        ))}
      </div>
      {/* <h1>{localtime}</h1> */}
    </>
  );
};
export default Main;
