import React from 'react';
import '../App.css';
import { 
  Button,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Badge,
  ButtonGroup,
 } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faStar, faVideo} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { isBodyOverflowing } from 'reactstrap/lib/utils';

function Movie(props) {

  const [likeMovie, setLikeMovie] = useState(false);
  const [watchMovie, setWatchMovie] = useState(false); 


  //attention!! erreur sur colorLike a cause mauvais scope variable
    var colorLike = {}
    if(likeMovie){
      var colorLike = {color: '#e74c3c',cursor:'pointer'}
    } else {
      var colorLike = {cursor:'pointer'}
    }
    
  

  var clickWatchMovie = ()=>{
    console.log('clic watch détecté')
  }
  /* 
 <p>Like <FontAwesomeIcon style={colorLike} icon={faHeart}  onClick={() => setLikeMovie(!likeMovie)}  /></p>
<p>Nombre de vues <FontAwesomeIcon style={colorWatch} onClick={() => setWatchMovie(!watchMovie)} icon={faVideo} />  */

  /* initialisation d'un tableau vide, puis la boucle, qui a besoin d'une couleur qu'on déclare, puis if en allant chercher la props
  concernant la note et on push dans la tableau l'étoile avec sont style in-line. gold si condition true, sinon couleur par défaut, 
  c'est pour ça qu'on a pas déclaré la couleur avant le if */ 
  var tabGlobalRating = []
  for(var i=0;i<10;i++){
      var color = {}
      if(i<props.globalRating){
          color = {color: '#f1c40f'}
      }
      tabGlobalRating.push(<FontAwesomeIcon style={color} icon={faStar} /> )
  }

  return (
    <Col xs="12" lg="6" xl="4">
    <Card style={{marginBottom:30}}>
    <CardImg top src={props.movieImg} alt={props.movieName} />
    <CardBody>
    <p>Like <FontAwesomeIcon style={colorLike} icon={faHeart} onClick={() => setLikeMovie(!likeMovie)} /></p>
        <p>Nombre de vues  <FontAwesomeIcon onClick={ ()=>clickWatchMovie() }icon={faVideo} /> <Badge color="secondary">2</Badge></p>
        <p>Mon avis 
        <FontAwesomeIcon icon={faStar} /> 
        <FontAwesomeIcon icon={faStar} /> 
        <FontAwesomeIcon icon={faStar} /> 
        <FontAwesomeIcon icon={faStar} /> 
        <FontAwesomeIcon icon={faStar} /> 
        <FontAwesomeIcon icon={faStar} /> 
        <FontAwesomeIcon icon={faStar} /> 
        <FontAwesomeIcon icon={faStar} /> 
        <FontAwesomeIcon icon={faStar} /> 
        <FontAwesomeIcon icon={faStar} /> 

        <ButtonGroup size="sm">
            <Button color="secondary">-</Button>
            <Button color="secondary">+</Button>
        </ButtonGroup>
        </p>
        <p>Moyenne {/* on affiche le table et en dessous on dynamise la valeur en allant chercherv la props */}
        {tabGlobalRating}
        ({props.globalCountRating})
        </p>
  <CardTitle>{props.movieName}</CardTitle>
        <CardText>{props.movieDesc}</CardText>
    </CardBody>
    </Card>
    </Col>


  );
}

export default Movie;
