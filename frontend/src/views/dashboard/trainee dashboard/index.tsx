import StatCards from "./components/stat-card";
import RecommendedCourseCards from "./components/recommended-course";
import CourseBanner from "../../../assets/samplebanner.webp"
import { PiBatteryWarningVerticalLight } from "react-icons/pi";
import { IoPersonOutline, IoSettingsOutline } from "react-icons/io5"
import { FaRegBell } from "react-icons/fa";

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
    const assessmentName = "Python Fundamentals Quiz"
    const dueDays = 2;
    const assessmentModule = 3;
    const nextAssessment = "SQL Data Wrangling";
    const nextAssessmentDue = "NEXT WEEK";

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
                <div className="d-flex w-100 h-100 rounded border bg-white shadow-sm overflow-hidden">
                    <div>
                        <img
                            src={CourseBanner}
                            alt="Course Banner"
                            style={{
                                width: "170px",
                                height: "170px",
                                objectFit: "cover",
                            }}
                        />
                    </div>
                    <div className="flex-grow-1 p-3" >
                        <p className="small text-primary mb-0" >{pathName} PATH</p>
                        <p className="mb-2" >{courseName}</p>
                        <p className="small mb-3"><IoPersonOutline />Trainer: {trainerName}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <p className="small mb-1" >Module {moduleNumber}: {moduleName}</p>
                            <p className="small mb-1">{progressValue}%</p>
                        </div>
                        <div className="progress">
                            <div
                                className="progress-bar"
                                style={{ width: `${progressValue}%` }}
                            />
                        </div>
                        <div className="py-3">
                            <button
                                className="btn btn-primary"
                                type="button"
                            >
                                Continue Learning
                            </button>
                        </div>
                    </div>
                </div>
                <h3>Recommended Courses</h3>
                <RecommendedCourseCards/>
            </div>
            <div>
                <div className="d-flex w-100 h-100 rounded border bg-white shadow-sm overflow-hidden">
                    <p><PiBatteryWarningVerticalLight />Upcoming Assessments</p>
                    <div>
                        <div>
                            <p>{assessmentName}</p>
                            <p>Due in {dueDays} days</p>
                        </div>

                        <div>
                            <p>Module {assessmentModule} requries completion to unlock advanced topics</p>
                        </div>

                        <div>
                            <button
                                type='button'
                                className="btn"
                            >
                                Start Assessment
                            </button>
                        </div>

                        <div>
                            <p>{nextAssessment}</p>
                            <p>{nextAssessmentDue}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="d-flex w-100 h-100 rounded border bg-white shadow-sm overflow-hidden">
                        <p>Recent Certificates</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TraineeDashboard;