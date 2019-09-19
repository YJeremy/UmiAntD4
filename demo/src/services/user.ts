import request from '@/utils/request';
//用户API 在这里设置封装，并且可以填写mock的地址

export async function query(): Promise<any> {
  return request('/api/users');
}

export async function queryCurrent(): Promise<any> {
  return request('/users/current');
}

export async function queryNotices(): Promise<any> {
  return request('/api/notices');
}
