const DashBoard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 max-w-[90rem] mx-auto mt-5 gap-x-4 gap-y-6 relative h-[85vh]">
      <div className="dashboard-card">User Card </div>
      <div className="dashboard-card">Project in progress</div>
      <div className="dashboard-card">Problem of the Week</div>
      <div className="dashboard-card">Community Feed</div>
    </div>
  );
};

export default DashBoard;
