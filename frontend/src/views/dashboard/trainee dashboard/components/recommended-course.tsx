import { FaStar } from "react-icons/fa";


type RecommendedCourseCardProps = {
    title:String;
    ratings:number;
    reviews:number;
    duration:String;
}

const RecommendedCourseCard = ({
    title,
    ratings,
    reviews,
    duration,
}:RecommendedCourseCardProps ) => {

    return (
        <div className="w-100 h-100 rounded border bg-white p-3 shadow-sm">
            <div>

            </div>
            <div>
                <p>{title}</p>
                <p><FaStar/> {ratings} ({reviews} reviews) </p>
                <button
                type='button'
                className="btn"
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
                <div className="col-12 col-md-6 col-lg-3" key={card.title}>
                    <RecommendedCourseCard {...card} />
                </div>
            ))}
        </div>
    )
}



export default RecommendedCourseCards;