import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// 全局注册模块
/**
 *
 *
 * @export
 * @interface Response
 * @template T
 * @todo
 *  - [ ] 怎么返回一个带有分页的列表
 */
export interface Response<T> {
    data: T;
}
@Injectable()
export class BaseInterceptor<T> implements NestInterceptor<T, Response<T>> {
    intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
        // next.handel() is called a Point cut
        return next.handle().pipe(map(data => ({ data })));
    }
}
