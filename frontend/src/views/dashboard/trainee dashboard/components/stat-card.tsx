import { BsGraphUp, BsBookmark, BsAward, BsGear } from "react-icons/bs";

type StatCardProps = {
    title: string;
    value: string | number;
    subtitle?: string;
    icon: React.ReactNode;
    progress?: number;
};

type StatCardsPops = {
    progressValue: number;
    coursesEnrolled: number;
    courseSubtitle: number;
    certificates: number;
    pendingAssignments: number;

}

const StatCard = ({
    title,
    value,
    subtitle,
    icon,
    progress,
}: StatCardProps) => {
    return (
        <div className="w-100 h-100 rounded border bg-white p-3 shadow-sm">
            <div className="d-flex align-items-center justify-content-between">
                <p className="small text-secondary mb-0">
                    {title}
                </p>
                <button className="btn">{icon}</button>
            </div>
            <p className="mt-2 fs-3 fw-semibold mb-0">
                {value}
            </p>
            {progress !== undefined && (
                <div className="progress mt-2" style={{ height: "6px" }}>
                    <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            )}
            {subtitle && (
                <p className="mt-1 small text-primary mb-0">
                    {subtitle}
                </p>
            )}
        </div>
    );
};

const StatCards = ({
    progressValue,
    coursesEnrolled,
    courseSubtitle,
    certificates,
    pendingAssignments,
}: StatCardsPops) => {
    const cards = [
        {
            title: "Learning Progress",
            value: `${progressValue}%`,
            progress: progressValue,
            icon: <BsGraphUp />,
        },
        {
            title: "Courses Enrolled",
            value: coursesEnrolled,
            subtitle: `+${courseSubtitle} this month`,
            icon: <BsBookmark />,
        },
        {
            title: "Certificates Earned",
            value: certificates,
            subtitle: "View all badges",
            icon: <BsAward />,
        },
        {
            title: "Pending Assignments",
            value: pendingAssignments,
            icon: <BsGear />,
        },
    ];
    return (
        <div className="row g-3">
            {cards.map((card) => (
                <div className="col-12 col-md-6 col-lg-3" key={card.title}>
                    <StatCard {...card} />
                </div>
            ))}
        </div>
    )
}

export default StatCards 