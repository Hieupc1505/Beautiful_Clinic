import FeatureInfo from "../../components/FeatureInfo";
import ReviewItem from "./reviewItem";
import { v4 as uuidv4 } from "uuid";

const Review = () => {
    return (
        <div className="bg-thmgrey py-36">
            <div className="container max-w-screen-xl mx-auto">
                <FeatureInfo
                    title={
                        <>
                            Client <span className="text-primary">Review</span>
                        </>
                    }
                    sxTitle="text-28px text-thmTtile"
                    subtitle="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text"
                />
                <div className="grid grid-cols-2 gap-8 mt-32">
                    <ReviewItem key={uuidv4()} item={1} />
                    <ReviewItem key={uuidv4()} item={2} />
                </div>
            </div>
        </div>
    );
};

export default Review;
