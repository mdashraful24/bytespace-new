import { creatorAssets } from "./assets";

const creatorShapes = [
    { src: creatorAssets.shape15, slot: "left-top" },
    { src: creatorAssets.shape2, slot: "left-mid-top-top" },
    { src: creatorAssets.shape13, slot: "left-mid-top" },
    { src: creatorAssets.shape12, slot: "left-bottom" },
    { src: creatorAssets.shape10, slot: "right-top" },
    { src: creatorAssets.shape11, slot: "right-mid" },
    { src: creatorAssets.shape14, slot: "right-bottom" },
] as const;

export default function CreatorSection() {
    return (
        <section className="creator-section" aria-label="Creator section">
            <div className="creator-grid" aria-hidden="true" />

            {creatorShapes.map(({ src, slot }) => (
                <img
                    key={src}
                    className={`creator-shape creator-shape--${slot}`}
                    src={src}
                    alt=""
                    aria-hidden="true"
                />
            ))}

            <div className="creator-content">
                <h2>Unlock Your Potential as a Creator with ByteSpace</h2>
                <p>
                    Experience the collaboration of numerous creators and an expanding
                    selection of courses. Register now and become a part of a community
                    comprising over 10,000 local and international creators. Utilize our
                    Course Editor, and showcase your expertise by publishing your finest
                    course on the ByteSpace Course Library.
                </p>
                <button type="button">Join as Creator</button>
            </div>
        </section>
    );
}
