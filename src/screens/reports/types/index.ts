interface ReportItem {
    name: string
    total: string
}

export interface Report {
    items: ReportItem[]
    fromTo: string
}