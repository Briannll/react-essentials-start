export default function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
//Can use props as the paramenter
//props.image, props.title, props.description can be used instead of destructuring
