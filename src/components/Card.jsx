export default function Card({ data }) {
  return (
    <div>
      <p>data.title</p>
      <img src={data.img} alt="" />
    </div>
  );
}
