/**
 * @param {JSX.Element} props.icon - The icon to be displayed alongside the title.
 * @param {string} props.title - The title of the topic.
 * @param {string} props.text - The text content of the topic.
 */

const Topic = ({ icon, title, text }) => {
  return (
    <article className="flex flex-col items-start gap-2">
      <section className="flex gap-2 items-center">
        <span className="w-5 lmd:w-[1.875rem]">{icon}</span>
        <h2>{title}</h2>
      </section>
      <p>{text}</p>
    </article>
  );
};

export default Topic;
