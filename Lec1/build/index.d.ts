declare let x: boolean;
declare let z: number;
declare let y: number;
declare let firstname: string;
declare let c: null;
declare let list: number[];
declare let stringList: string[];
declare let aa: number[];
declare let boolList: Array<number>;
declare let tuple: [string, number];
declare enum color {
    Red = 0,
    Green = 2,
    Yellow = 3,
    Blue = "Blue"
}
declare let i: color;
declare let i1: color;
declare let u: undefined;
declare let n: null;
declare function l(): Function;
declare function sum(a: number, b: any): void;
declare let g: Record<string, number[]>;
interface IButton {
    label: string;
    onClick: Function;
}
declare let addFn: (x: number, y: number) => void;
interface Person {
    firstname: string;
    lastname: string;
    phn?: number | string;
}
declare function printName({ firstname, lastname }: Person): string;
declare let userType: "super-admin" | "admin" | "user";
declare let value: number | string | boolean | null;
declare type RequestLoading = {
    state: "loading";
};
declare type RequestFailed = {
    state: "failed";
    code: number;
};
declare type RequestSuccess = {
    state: "success";
    response: {
        title: string;
        status: boolean;
        id: string;
        count: number;
    };
};
declare type NetworkState = RequestLoading | RequestFailed | RequestSuccess;
interface ErrorInterface {
    status: boolean;
    error?: {
        message: string;
    };
}
interface CityData {
    cityname: {
        title: string;
    };
}
interface CountryData {
    details: {
        countOfCities: number;
        capital: string;
    };
}
declare type CityResponse = ErrorInterface & CityData;
declare type CountryResponse = ErrorInterface & CountryData;
declare let response: CityResponse;
interface Loading {
    a: string;
}
interface ErrorA {
    b: number;
}
declare let IState: Loading & ErrorA;
