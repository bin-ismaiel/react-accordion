export default function Question({ id, title, info, activeId, toggle }) {
  const isActive = id === activeId;

  let toggler = <button onClick={() => toggle(id)}>+</button>;
  if (isActive) {
    toggler = <button onClick={() => toggle(id)}>-</button>;
  }

  return (
    <li>
      <div>
        <h3>{title}</h3>
        {toggler}
      </div>
      {isActive && <p>{info}</p>}
    </li>
  );
}
