import "../components/Card.css";
import Card from "../components/Card";

function CardList(data) {
  const mydata = [...data.data];

  return (
    <ul>
      {mydata.map((item, index) => {
        return (
          <li key={index}>
            <Card data={item} />{" "}
          </li>
        );
      })}
    </ul>
  );
}

export default CardList;
