export class GetResponse {
  status: Boolean;
  data: [];
  error?: ErrorResponse;
}


export class ErrorResponse {
  type: string;
  message: string;
  status: string;
}