import "./header.css";
export default function Header(props) {
  return (
    <div className="header">
      <div className="header-container">
        <button onClick={props.onclickHome} className={props.clickedHome?"active  button":"button"}>Home</button>
        
        <input
          type="text"
          placeholder="Search"
          onChange={props.onSearch}
          className="input-filed"
        ></input>

        <button onClick={props.onclickTrash} className={props.clickedTrash?"active  button":"button"}>Trash</button>
      </div>
    </div>
  );
}
