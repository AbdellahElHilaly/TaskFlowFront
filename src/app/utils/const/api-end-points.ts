export class ApiEndPoints {
  private static instance: ApiEndPoints;

  public baseUrl: string = 'http://localhost:8080/api/v1';
  public security: string = '/security';
  public login: string;
  public register: string;
  public logout: string;
  public refreshToken: string;

  public users: string;
  public profile: string;


  private constructor() {
    this.login = this.baseUrl + this.security + '/signin';
    this.register = this.baseUrl + this.security + '/signup';
    this.logout = this.baseUrl + this.security + '/logout';
    this.refreshToken = this.baseUrl + this.security + '/refresh'

    this.users = this.baseUrl + '/users';

    // this.users = this.baseUrl + this.security ;
    this.profile = this.baseUrl +this.security ;

  }

  public static getInstance(): ApiEndPoints {
    if (!ApiEndPoints.instance) {
      ApiEndPoints.instance = new ApiEndPoints();
    }
    return ApiEndPoints.instance;
  }
}
