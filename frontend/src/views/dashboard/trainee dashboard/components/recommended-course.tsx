import { FaStar } from "react-icons/fa";
import CourseBanner from "../../../../assets/samplebanner.webp"

type RecommendedCourseCardProps = {
    title:string;
    ratings:number;
    reviews:number;
    duration:string;
}

const RecommendedCourseCard = ({
    title,
    ratings,
    reviews,
    duration,
}:RecommendedCourseCardProps ) => {

    return (
        <div className="w-100 rounded-3 border bg-white shadow-sm overflow-hidden">
            <div className="position-relative">
                <img
                    src={CourseBanner}
                    alt={title}
                    className="w-100"
                    style={{
                        height: "130px",
                        objectFit: "cover",
                    }}
                />

                <span
                    className="position-absolute bottom-0 end-0 bg-white px-2 py-1 small fw-semibold"
                >
                    {duration}
                </span>
            </div>
            <div className="p-3">
                <p className="fw-semibold mb-1">
                    {title}
                </p>
                <p className="small mb-2">
                    <FaStar className="me-1" /> 
                    {ratings} ({reviews} reviews) 
                </p>
                <button
                type='button'
                className="btn btn-light w-100"
                >
                    Enroll Now
                </button>
            </div>
        </div>
    )

}

const RecommendedCourseCards = () => {

    const cards = [
        {
            title:"Python for Machine Learning",
            ratings:4.8,
            reviews:124,
            duration:"3h 45m"
        },
        {
            title:"Cloud Architecture Fundamentals",
            ratings:4.9,
            reviews:89,
            duration:"5h 20m"
        },
    ];

    return(
        <div className="row g-3">
            {cards.map((card) => (
                <div className="col-12 col-md-6" key={card.title}>
                    <RecommendedCourseCard {...card} />
                </div>
            ))}
        </div>
    )
}



export default RecommendedCourseCards;