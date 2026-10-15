 import { BsAward, BsEye, BsDownload } from "react-icons/bs";
 
 type BadgeCardProps = {
    title: string;
    issuedDate: string;
    showActions?: boolean;
};

const BadgeCard = ({
    title,
    issuedDate,
    showActions = true,
}: BadgeCardProps) => {
    return (
        <div className="border rounded-3 p-2">
            <div className="d-flex align-items-center">

                {/* Badge icon */}
                <div
                    className="d-flex align-items-center justify-content-center bg-light rounded me-2"
                    style={{
                        width: "40px",
                        height: "40px",
                        flexShrink: 0,
                    }}
                >
                    <BsAward size={18} />
                </div>

                {/* Badge information */}
                <div className="flex-grow-1 overflow-hidden">
                    <p className="fw-semibold mb-0 text-truncate">
                        {title}
                    </p>

                    <p className="small text-secondary mb-0">
                        Issued: {issuedDate}
                    </p>
                </div>

                {/* Actions */}
                {showActions && (
                    <div className="d-flex align-items-center gap-2 ms-2">
                        <button className="btn btn-sm p-0">
                            <BsEye size={15} />
                        </button>

                        <button className="btn btn-sm p-0">
                            <BsDownload size={15} />
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
};

const BadgeCards = () =>{

    const cards = [
        {
            title:"Intro to Big Data",
            issuedDate:"Aug 2023"
        },
        {
            title:"Business Comms 101",
            issuedDate:"Aug 2023"
        }
    ]

    return(
        <div className="row g-3">
            {cards.map((card) => (
                <div className="col-12 col-md-6" key={card.title}>
                    <BadgeCard {...card} />
                </div>
            ))}
        </div>
    )
}

export default BadgeCards;