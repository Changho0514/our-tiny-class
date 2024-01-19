import { baseResponse } from "@/types/apiResponse";

export interface JoinFormProps {
  onSubmit: (
    id: string,
    password: string,
    name: string,
    email: string,
    birthday: string
  ) => void;
}

export interface JoinResponse extends baseResponse {
  data:
    | {
        memberId: string;
        name: string;
        email: string;
      }
    | undefined; // data 는 성공했을 때에만 있으며 실패했을 경우에는 undefined
}

export interface LoginFormProps {
  onSubmit: (id: string, password: string) => void;
}

export interface LoginResponse extends baseResponse {
  data: {
    accessToken: string;
    nickname: string;
    name: string;
  };
}
