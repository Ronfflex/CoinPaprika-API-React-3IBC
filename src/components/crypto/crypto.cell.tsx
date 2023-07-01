import "./crypto.cell.css";
import { CryptoDTO } from "../../dto";
import { Link } from "react-router-dom";

export interface PostCellProps {
  post: CryptoDTO;
}

function PostCell(props: PostCellProps) {
  return (
    <div>
      <h3>{props.post.name}</h3>
      <p>{props.post.symbol}</p>
      <p>{props.post.rank}</p>
      <Link to={"/crypto/" + props.post.id}>More detail</Link>
    </div>
  );
}

export default PostCell;
