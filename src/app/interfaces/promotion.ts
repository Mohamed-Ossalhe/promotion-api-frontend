import { promotionStatus } from "../enums/promotionStatus";

export interface Promotion {
    id: string,
    expiry: String,
    rate: number,
    promotionStatus: promotionStatus, // enum
}
