const landing = "/images/landing";

const testimonials = [
    {
        name: "Sarah M.",
        role: "Enthusiastic Learner",
        image: `${landing}/human3.png`,
        quote:
            "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
    },
    {
        name: "James L.",
        role: "Lifelong Learner",
        image: `${landing}/human4.png`,
        quote:
            "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
    },
    {
        name: "Alex B.",
        role: "Inspired Creator",
        image: `${landing}/human5.png`,
        quote:
            "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
    },
] as const;

export default function CommunitySection() {
    return (
        <section className="community-section" aria-label="Community testimonials">
            <img className="community-blur community-blur-one" src={`${landing}/ellipse66.png`} alt="" aria-hidden="true" />
            <img className="community-blur community-blur-two" src={`${landing}/ellipse77.png`} alt="" aria-hidden="true" />
            <img className="community-blur community-blur-three" src={`${landing}/ellipse88.png`} alt="" aria-hidden="true" />

            <div className="w-314.5 mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-5 md:gap-10 mb-10 lg:mb-16">
                <div className="community-header">
                    <h2>
                        Discover What Our
                        <br />
                        Community Is Saying
                    </h2>
                </div>

                <div className="community-intro">
                    <p>
                        At ByteSpace, our vibrant community of learners and creators is at the
                        heart of what we do. Hear directly from those who have experienced the
                        transformative journey of learning and creating on our platform. Explore
                        testimonials that reflect the diverse perspectives of enthusiastic learners
                        and accomplished creators.
                    </p>
                </div>
            </div>

            <div className="community-inner">
                <div className="community-grid">
                    {testimonials.map(({ name, role, image, quote }) => (
                        <article className="community-card" key={name}>
                            <img className="community-avatar" src={image} alt={name} />

                            <div className="community-meta">
                                <h3>{name}</h3>
                                <p>{role}</p>
                            </div>

                            <blockquote>"{quote}"</blockquote>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
