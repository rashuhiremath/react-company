import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { addToFav, removeFromFav } from "../store/actions";
import { useSelector,useDispatch } from "react-redux";




function JobResult({
  data,
  
}) {

  const favourites = useSelector(state=>state.favourites.elements)
  const dispatchToAdd = useDispatch()
  const dispatchToRemove = useDispatch()
  const isFav = favourites.includes(data.company_name);
  console.log(isFav, favourites);
  const toggleFavourite = () => {
    isFav
      ?  dispatchToRemove( removeFromFav(data.company_name))
      : dispatchToAdd(addToFav(data.company_name));
  };

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3} className="d-flex">
        {isFav ? (
          <HeartFill
            color="gold"
            size={16}
            className="me-4 my-auto"
            onClick={toggleFavourite}
          />
        ) : (
          <Heart
            color="gold"
            size={16}
            className="me-4 my-auto"
            onClick={toggleFavourite}
          />
        )}
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <Link to={{ pathname: data.url }} target="_blank">
          {data.title}
        </Link>
      </Col>
    </Row>
  );
}

export default JobResult
