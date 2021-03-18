import ContainerFlat from "../components/ContainerFlat";
import UserActivities from "../components/UserActivities";
import GroupActivities from "../components/GroupActivities";
import H3 from "../components/H3";

export default function Dashboard() {
  return (
    <ContainerFlat>
      <H3 text="gadgboard" />
      <UserActivities />
      <GroupActivities />
    </ContainerFlat>
  );
}
