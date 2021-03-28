/* "Barrel" of Http Interceptors */
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { CustomHttpInterceptor } from './custom-interceptor';
import { JWTInterceptorService } from './jwt-interceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptorService, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi: true }, 
  
];