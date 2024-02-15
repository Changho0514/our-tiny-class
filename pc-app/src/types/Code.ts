export const CODE = {
  // 커뮤니티 카테고리
  BOARD_TYPE: {
    SCHOOL: 0, // 학교 게시판
    CLASS: 1, // 학급 게시판
  },
  BOARD_CATEGORY: {
    NOTICE: 0, // 공지사항 게시판
    FREE: 1, // 자유게시판
    COUNSELING: 2, // 고민나눔 게시판
    HOBBY: 3, // 취미 공유 게시판
  },
  // LECTURE 카테고리
  LECTURE_CATEGORY: {
    MATH: 0,
    SCIENCE: 1,
    ART: 2,
    HEALTH: 3,
    READING: 4,
    FUTURE: 5,
    COMMUNICATION: 6,
    ETC: 7,
    ALL: 8,
  },
  // STATUE 코드
  HTTP_STATUS_CODE: {
    // 정보 응답
    CONTINUE: 100,
    SWITCHING_PROTOCOLS: 101,
    PROCESSING: 102,

    // 성공
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NON_AUTHORITATIVE_INFORMATION: 203,
    NO_CONTENT: 204,
    RESET_CONTENT: 205,
    PARTIAL_CONTENT: 206,

    // 리다이렉션
    MULTIPLE_CHOICES: 300,
    MOVED_PERMANENTLY: 301,
    FOUND: 302,
    SEE_OTHER: 303,
    NOT_MODIFIED: 304,
    USE_PROXY: 305,
    TEMPORARY_REDIRECT: 307,
    PERMANENT_REDIRECT: 308,

    // 클라이언트 오류
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    PAYMENT_REQUIRED: 402,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    NOT_ACCEPTABLE: 406,
    PROXY_AUTHENTICATION_REQUIRED: 407,
    REQUEST_TIMEOUT: 408,
    CONFLICT: 409,
    // ... 기타 클라이언트 오류 상태 코드

    // 서버 오류
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
    HTTP_VERSION_NOT_SUPPORTED: 505,
    VARIANT_ALSO_NEGOTIATES: 506,
    INSUFFICIENT_STORAGE: 507,
    LOOP_DETECTED: 508,
    NOT_EXTENDED: 510,
    NETWORK_AUTHENTICATION_REQUIRED: 511,
  },
  ROLE: {
    UNLOGIN: 0,
    NOMAL_MEMBER: 1,
    STUDENT_SELECT: 2,
    MENTOR_SELECT: 3,
    STUDENT_READY: 4,
    MENTOR_READY: 5,
    STUDENT: 6,
    MENTOR: 7,
    TEACHER: 8,
    MANAGER: 9,
  },
};
