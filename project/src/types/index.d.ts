/* eslint-disable @typescript-eslint/no-explicit-any */
// Так как мы на клиенте, а не nodejs то правим type для таймаута (сейчас на клиента подтягивается nodejs Timeout)
declare type TimeoutHack = any;
