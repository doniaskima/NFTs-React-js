import React from "react";
import { INFO_DATA } from "../../data/infoItem";
import InfoItem from "./InfoItem/InfoItem";
import "./InfoSection.css";

const InfoSection = () => {
    return (
        <div className="info-section">
            <div className="is-heading">
                <span className="heading-gradient">Create and sell your NFTs</span>
            </div>
            <div className="is-items-container">
                {INFO_DATA.map((_infoItem) => (
                    <InfoItem infoItem={_infoItem} />
                ))}
            </div>
        </div>
    );
};

export default InfoSection;
