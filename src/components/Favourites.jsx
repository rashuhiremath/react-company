import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";

import { removeFromFav } from "../store/actions";
import {useSelector,useDispatch } from "react-redux";


const Favourites=()=> {
  const favourites = useSelector(state => state.favourites.elements)
 const dispatch = useDispatch()
    return (
      <Container>
        <Row>
          <Col xs={12}>
            <ListGroup>
              {favourites.map((f) => (
                <ListGroupItem>
                  <StarFill onClick={() => dispatch(removeFromFav(f))} />
                  <span>{f}</span>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }


export default Favourites
