import type { ThemeUtils } from "nody-greeter-types";

export class MockThemeUtils implements ThemeUtils {
    bind_this(context: object): object {
        throw new Error("Method not implemented.");
    }
    dirlist(path: string, only_images: boolean, callback: (args: string[]) => void): void {
        throw new Error("Method not implemented.");
    }
    dirlist_sync(path: string, only_images?: boolean): string[] {
        throw new Error("Method not implemented.");
    }
    get_current_localized_date(): string {
        throw new Error("Method not implemented.");
    }
    get_current_localized_time(): string {
        throw new Error("Method not implemented.");
    }
}