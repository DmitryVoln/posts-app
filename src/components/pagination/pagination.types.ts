import React, { ReactNode } from "react";

export interface IPagination {
    handlePagination(value: number): void;
    countPages: number[];
}