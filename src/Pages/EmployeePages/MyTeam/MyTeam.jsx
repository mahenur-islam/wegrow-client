import TeamMember from "./TeamMember/TeamMember";
import UpcomingEvents from "./UpcomingEvents/UpcomingEvents";

const MyTeam = () => {
    return (
        <div>
            <UpcomingEvents></UpcomingEvents>
            <TeamMember></TeamMember>
        </div>
    );
};

export default MyTeam;