import classNames from "classnames";
import moment from "moment";

export const cn = classNames;

export const calculateUnitPriceAfterDiscount = (price, discountType, discountAmount) => {
    let unitPriceAfterDiscount;
    if (discountType === "taka") {
        unitPriceAfterDiscount = price - discountAmount;
    } else if (discountType === "percentage") {
        unitPriceAfterDiscount = price - (price * (discountAmount / 100));
    }
    return unitPriceAfterDiscount;
}

export const getStringTimestamp = (timestamp) => {
    if (timestamp && !isNaN(Number(timestamp))) {
        const formattedDate = moment.unix(Number(timestamp)).format("D-MMMM-YYYY");
        return formattedDate;
    } else {
        return;
    }
};
