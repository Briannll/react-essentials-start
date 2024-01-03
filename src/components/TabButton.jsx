export default function TabButton(props) {
  return (
    <li>
      <button
        className={props.isSelected ? "active" : null}
        onClick={props.onSelect}
      >
        {props.children}
      </button>
    </li>
  );
}
//destructuring can be used here by using children as a paramenter and getting rid of props.children
