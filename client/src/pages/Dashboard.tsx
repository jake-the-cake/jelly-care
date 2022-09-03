import { Schedule } from "../components/Schedule"

export const Dashboard = () => {
  return (
    <div className="container-90 flex-1 shadow-lg-light bg-darker">
      <div className="shadow-sm-light bg-dark container-full">
        <Schedule />
      </div>
    </div>
  )
}