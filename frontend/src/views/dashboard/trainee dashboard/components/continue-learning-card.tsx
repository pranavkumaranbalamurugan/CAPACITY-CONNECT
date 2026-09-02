import { IoPersonOutline } from "react-icons/io5";
import CourseBanner from "../../../../assets/samplebanner.webp"

type ContinueLearningCardProps = {
    pathName: string;
    courseName: string;
    trainerName: string;
    moduleNumber: number;
    moduleName: string;
    progress: number;
};

const ContinueLearningCard = ({
    pathName,
    courseName,
    trainerName,
    moduleNumber,
    moduleName,
    progress,
}: ContinueLearningCardProps) => {

    return (
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
                    <p className="small mb-1">{progress}%</p>
                </div>
                <div className="progress">
                    <div
                        className="progress-bar"
                        style={{ width: `${progress}%` }}
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
    );
};

export default ContinueLearningCard;