import { MainCard } from "../components/MainCard"
import { Schedule } from "../components/Schedule"

export const Dashboard = () => {
  return (
    <MainCard 
      content={
        <div className="shadow-sm-light bg-dark container-full">
          <Schedule />
        </div>
      }
    />
  )
}