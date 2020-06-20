import { InjectionToken } from '@angular/core';
import { Config } from './config';
import { environment } from '../../environments/environment';
export const CONFIG_TOKEN = new InjectionToken<Config>('config token');

export const CONFIG_VALUE: Config = {
  production:environment.production,
  apiEndpoint: environment.apiEndpoint
}
