import { FaRegBell } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import StatCards from "./components/stat-card";
import ContinueLearningCard from "./components/continue-learning-card"

const TraineeDashboard = () => {

    const name = "Pranav";
    const progressValue = 15;
    const coursesEnrolled = 4;
    const courseSubtitle = 1;
    const certificates = 2;
    const pendingAssignments = 12;
    const pathName = "DATA SCIENCE PATH";
    const courseName = "Advanced Data Analytics";
    const trainerName = "Sarah Jenkins";
    const moduleNumber = 4;
    const moduleName = "Predictive Modeling";

    return (
        <div>
            <div>
                <div className="d-flex justify-content-between align-items-center p-4">
                    <div>
                        <h1>Good morning, {name} 👋 </h1>
                        <p className="mb-0" >Continue your learning journey and build your professional skills.</p>
                    </div>
                    <div className="d-flex gap-2">
                        <button className="btn rounded-circle border"> <FaRegBell /> </button>
                        <button className="btn rounded-circle border"> <IoSettingsOutline /> </button>
                    </div>
                </div>
                <div className="p-4">
                    <StatCards
                        progressValue={progressValue}
                        coursesEnrolled={coursesEnrolled}
                        courseSubtitle={courseSubtitle}
                        certificates={certificates}
                        pendingAssignments={pendingAssignments}
                    />
                </div>
            </div>
            <div className="p-4">
                <h3 className="mb-3" >Continue Learning</h3>
                <div>
                    <ContinueLearningCard
                    pathName={pathName}
                    courseName={courseName}
                    moduleNumber={moduleNumber}
                    moduleName={moduleName}
                    trainerName={trainerName}
                    progress={progressValue}
                    />
                </div>
            </div>
            <div>

            </div>
                
        </div>
    )
}

export default TraineeDashboard;