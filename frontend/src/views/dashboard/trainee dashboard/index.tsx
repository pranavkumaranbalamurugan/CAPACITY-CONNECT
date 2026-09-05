import StatCards from "./components/stat-card";
import RecommendedCourseCards from "./components/recommended-course";
import CourseBanner from "../../../assets/samplebanner.webp"
import { PiBatteryWarningVerticalLight } from "react-icons/pi";
import { IoPersonOutline, IoSettingsOutline } from "react-icons/io5"
import { FaRegBell } from "react-icons/fa";
import BadgeCards from "./components/certificate_badge";

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
                        <p className="mb-0" >
                            Continue your learning journey and build your professional skills.
                        </p>
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
            <div className="px-4">
                <div className="row g-4">

                    {/* LEFT SIDE */}
                    <div className="col-12 col-lg-8">

                        {/* Continue Learning */}
                        <section className="mb-4">
                            <h3 className="mb-3">
                                Continue Learning
                            </h3>

                            <div className="d-flex w-100 rounded-3 border bg-white shadow-sm overflow-hidden">
                                <div>
                                    <img
                                        src={CourseBanner}
                                        alt="Course Banner"
                                        style={{
                                            width: "200px",
                                            height: "195px",
                                            objectFit: "cover",
                                        }}
                                    />
                                </div>

                                <div className="flex-grow-1 p-3">
                                    <p className="small text-primary mb-1">
                                        {pathName}
                                    </p>

                                    <h5 className="mb-2">
                                        {courseName}
                                    </h5>

                                    <p className="small mb-4">
                                        <IoPersonOutline className="me-1" />
                                        Trainer: {trainerName}
                                    </p>

                                    <div className="d-flex justify-content-between align-items-center">
                                        <p className="small mb-1">
                                            Module {moduleNumber}: {moduleName}
                                        </p>

                                        <p className="small mb-1">
                                            {progressValue}%
                                        </p>
                                    </div>

                                    <div
                                        className="progress"
                                        style={{ height: "5px" }}
                                    >
                                        <div
                                            className="progress-bar"
                                            style={{
                                                width: `${progressValue}%`,
                                            }}
                                        />
                                    </div>

                                    <button
                                        className="btn btn-primary mt-3"
                                        type="button"
                                    >
                                        Continue Learning
                                    </button>
                                </div>
                            </div>
                        </section>


                        {/* Recommended Courses */}
                        <section>
                            <h3 className="mb-3">
                                Recommended Courses
                            </h3>

                            <RecommendedCourseCards />
                        </section>

                    </div>


                    {/* RIGHT SIDE */}
                    <div className="col-12 col-lg-4">

                        {/* Upcoming Assessments */}
                        <div className="rounded-3 border bg-white shadow-sm p-3 mb-4">

                            <h4 className="mb-3">
                                <PiBatteryWarningVerticalLight className="me-2" />
                                Upcoming Assessments
                            </h4>

                            <div className="border rounded-3 p-3 mb-3">
                                <div className="d-flex justify-content-between">
                                    <p className="fw-semibold mb-1">
                                        {assessmentName}
                                    </p>

                                    <span className="badge text-bg-warning">
                                        DUE IN {dueDays} DAYS
                                    </span>
                                </div>

                                <p className="small text-secondary mb-3">
                                    Module {assessmentModule} requires completion
                                    to unlock advanced topics.
                                </p>

                                <button
                                    type="button"
                                    className="btn btn-outline-primary btn-sm w-100"
                                >
                                    Start Assessment
                                </button>
                            </div>

                            <div className="border rounded-3 p-3">
                                <div className="d-flex justify-content-between">
                                    <p className="fw-semibold mb-1">
                                        {nextAssessment}
                                    </p>

                                    <span className="badge text-bg-light">
                                        {nextAssessmentDue}
                                    </span>
                                </div>

                                <p className="small text-secondary mb-0">
                                    Covers JOINs and subqueries.
                                </p>
                            </div>

                        </div>


                        {/* Recent Certificates */}
                        <div className="rounded-3 border bg-white shadow-sm p-3">

                            <h4 className="mb-3">
                                Recent Certificates
                            </h4>

                            <BadgeCards />

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default TraineeDashboard;