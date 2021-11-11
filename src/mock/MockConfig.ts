export class MockConfig implements LightDM.GreeterConfig {
    
    get_bool(config_section: string, key: string): boolean {
        throw new Error("Method not implemented.");
    }
    
    get_num(config_section: string, key: string): number {
        throw new Error("Method not implemented.");
    }
    
    get_str(config_section: string, key: string): string {
        throw new Error("Method not implemented.");
    }
    
    branding: object;
    greeter: object;

}