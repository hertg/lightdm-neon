export class MockUser implements LightDM.User {
    display_name: string;
    language: string;
    layout: string;
    image: string;
    home_directory: string;
    username: string;
    logged_in: boolean;
    session: string;
    name: string;
    real_name: string;

    public static newMock(displayname: string, username: string): LightDM.User {
        let user = new MockUser();
        user.display_name = displayname;
        user.username = username;
        return user;
    }
}