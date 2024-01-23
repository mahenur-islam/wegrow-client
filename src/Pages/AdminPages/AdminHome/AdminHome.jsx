import LimitedStockItmes from "./LimitedStockItmes";
import PendingRequest from "./PendingRequest";
import PieCharts from "./PieCharts";
import TopMostRequestItmes from "./TopMostRequestItmes";


const AdminHome = () => {
  return (
    <div>
      <PendingRequest></PendingRequest>
      <TopMostRequestItmes></TopMostRequestItmes>
      <LimitedStockItmes></LimitedStockItmes>
      <PieCharts></PieCharts>
    </div>
  );
};

export default AdminHome;
