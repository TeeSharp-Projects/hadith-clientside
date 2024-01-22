// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Item(props){
    return(
        <Card style={{ width: "34rem",margin:"20px" }}>
      <Card.Img style ={{height:"200px",}}variant="top" src="https://tse2.mm.bing.net/th?id=OIP.YXo5f7XYkYBGi5jCEVuRHQHaLJ&pid=Api&P=0" />
      <Card.Body>
      <Card.Title>Book Name: {props.item.book.bookName}</Card.Title>
      <Card.Title>Chapter: {props.item.chapter.chapterEnglish}</Card.Title>
      <Card.Title>Narrator: {props.item.englishNarrator}</Card.Title>
        <Card.Text className = "hadithScroll">{props.item.hadithEnglish}</Card.Text>
        {/* <Button  className="buttons"variant="primary" onClick={()=>{addToFav(props.item)}}>Add to favourite</Button> */}
      </Card.Body>
    </Card>
    );
}

export default Item;
