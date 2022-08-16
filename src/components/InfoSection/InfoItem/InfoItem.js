import React from "react";
import "./InfoItem.css";

const InfoItem = (props) => {
    const { infoItem } = props;

    return (
        <div className="info-item">
            <img src={infoItem.icon} alt={infoItem.section_title} />
            <div className="ii-title">{infoItem.section_title}</div>
            <div className="ii-description">{infoItem.description}</div>
        </div>
    );
};

export default InfoItem;
