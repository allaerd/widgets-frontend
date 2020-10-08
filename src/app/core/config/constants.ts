import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';

@Injectable()
export class Constants {
    public readonly API_ENDPOINT: string = environment.apiUrl;
    public readonly AUTH_ENDPOINT: string = environment.authUrl;
    public readonly CLIENT_ID: number = environment.clientID;
    public readonly CLIENT_SECRET: string = environment.clientSecret;

}
