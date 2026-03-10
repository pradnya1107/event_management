function EventCard({event}) {
  return (
    <div style={{border:"1px solid gray",padding:"10px"}}>
      <h3>{event.title}</h3>
      <p>{event.date}</p>
    </div>
  );
}

export default EventCard;