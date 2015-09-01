

interface ReactChartJS {
    Bar: any;
    Doughnut: any;
    Line: any;
    Pie: any;
    PolarArea: any;
    Radar: any;
}

declare var __ReactChartJS: ReactChartJS;
declare module 'react-chartjs' {
    export = __ReactChartJS;
}
