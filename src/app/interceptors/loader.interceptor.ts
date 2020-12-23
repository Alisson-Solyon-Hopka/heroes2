import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { LoaderService } from './../shared/loaders/loader.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(public loaderService: LoaderService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Passou pelo Interseptor")
    this.loaderService.isLoading.next(true);
    return next.handle(req).pipe(
      finalize(
        () => {
          this.loaderService.isLoading.next(false)
        }
      )
    )
  }
}
