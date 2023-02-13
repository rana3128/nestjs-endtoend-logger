import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  data: T;
}

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    const req = context.switchToHttp().getRequest();
    const { statusCode } = context.switchToHttp().getResponse();
    const { originalUrl, method, params, query, body } = req;

    const reqMeta: any = {
      originalUrl,
      method,
      params,
      query,
      statusCode,
      body,
    };

    return next.handle().pipe(
      map((data) => {
        reqMeta.responseBody = data;
        console.log(reqMeta);
        return data;
      }),
    );
  }
}
