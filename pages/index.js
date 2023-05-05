import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/event-list";

function HomePage(props) {
    return (
        <div>
            <EventList items={props.events} />
        </div>
    );
}

export async function getStaticProps() {
    const feautredEvents = await getFeaturedEvents();
    return {
        props: {
            events: feautredEvents,
        },
        revalidate: 1800,
    };
}

export default HomePage;
