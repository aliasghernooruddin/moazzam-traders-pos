export class PostResponse {
  status: Boolean;
  type: string;
  message: string;
  error: ErrorResponse;
}


export class ErrorResponse {
  type: string;
  message: string;
  status: string;
}