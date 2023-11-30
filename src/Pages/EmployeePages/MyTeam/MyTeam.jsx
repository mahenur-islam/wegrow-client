import TeamMember from "./TeamMember/TeamMember";
import UpcomingEvents from "./UpcomingEvents/UpcomingEvents";

const MyTeam = () => {
    return (
        <div className="space-y-10">
            <UpcomingEvents></UpcomingEvents>
            <TeamMember></TeamMember>
        </div>
    );
};

export default MyTeam;