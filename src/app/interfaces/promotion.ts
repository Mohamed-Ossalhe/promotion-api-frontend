import { promotionStatus } from "../enums/promotionStatus";

export interface Promotion {
    id: string,
    startDate: string,
    endDate: string,
    percentage: number,
    promotionStatus: promotionStatus, // enum
    active: boolean
}
