import "./crypto.cell.css";
import { CryptoDTO } from "../../dto";
import { Link } from "react-router-dom";
import { ComparisonContext } from "../../context";
import { useContext } from "react";

export interface PostCellProps {
  post: CryptoDTO;
}

function PostCell(props: PostCellProps) {
  const { addToComparison } = useContext(ComparisonContext);

  return (
    <div>
      <h3>{props.post.name}</h3>
      <p>{props.post.symbol}</p>
      <p>{props.post.rank}</p>
      <div className="flex">
        <Link to={"/crypto/" + props.post.id}>More detail</Link>
        <button onClick={() => addToComparison(props.post)}>Compare</button>
      </div>
    </div>
  );
}

export default PostCell;
