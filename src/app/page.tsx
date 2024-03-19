import EventInfo from "./eventInfo/page";
import GalleryItem, { GalleryItem2 } from "./galleryItem/page";

export default function Home() {
  // define an array of object which will represent our events
  const events = [
    {
      title: `The King's Jester`,
      price: "$100",
      id: "001",
    },
    {
      title: "Phantom of the Opera",
      price: "$200",
      id: "002",
    },
    {
      title: "Bear6",
      price: "$100,000",
      id: "003",
    },
  ];

  function alertEvent(thisEvent: string) {
    alert(`Hoorah! You're attending ${thisEvent}`)
  }

  return (
    <main>
      <h1>Working with some props!</h1>

      <section className="gallery">
        <ul>
          {/* how do you pass props? */}
          {/* define the name of the property you are passing and then pass the value using HTML attribute syntax */}
          <GalleryItem imageURL="http://placecorgi.com/250" imageAlt="corgi" />
          <GalleryItem imageURL="http://placekitten.com/250" imageAlt="kitten" />
          <GalleryItem imageURL="http://picsum.com/250" imageAlt="view" />
          <GalleryItem imageURL="http://bear.com/250/300" imageAlt="bear" />
          <GalleryItem2 imageURL="http://placecorgi.com/250" imageAlt="corgi" />
          <GalleryItem2 imageURL="http://placekitten.com/250" imageAlt="kitten" />
          <GalleryItem2 imageURL="http://picsum.com/250" imageAlt="view" />
          <GalleryItem2 imageURL="http://bear.com/250/300" imageAlt="bear" />
        </ul>
      </section>

      <section className="events">
        <h2>Upcoming Events!</h2>
        {/* render some events which will list the name price and also a button that the user can click on to attend the event */}

        <ul>
          {events.map(function (eachEvent) {
            return (
              <EventInfo eventTitle={eachEvent.title} eventPrice={eachEvent.price} handleClick={() => alertEvent(eachEvent.title)} key={eachEvent.id} />
            )
          })}
        </ul>
      </section>
    </main>
  )
}