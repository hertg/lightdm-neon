import type { LightDMBattery } from "nody-greeter-types";

export class MockBattery implements LightDMBattery {
    name: string = "BAT0"; // ??
    level: number = 97; // ??
    status: string = "charging"; // ??
    ac_status: boolean = true;
    capacity: number = 100; // ??
    time: string = "20"; // ??
    watt: number = 250; // ??
}