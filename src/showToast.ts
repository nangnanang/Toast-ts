import bus from "./EventBus.js";

// Toast 파일에서 저장한 SHOW_TOAST에 구독한 함수를 불러와서
// 매개변수message의 값을 넣어 실행시키도록 하는 함수
const showToast = (message:string) => {
  // Toast에서 구독으로 저장한 명령어들을
  // 첫번째 인자 "SHOW_TOAST"키를 통해 불러와서
  // 두번째 인자 message를 넣어 실행시킴
  // SHOW_TOAST 명렁어에 구독된 함수가 여러개면 여러 개가 실행됨
  bus.publish("SHOW_TOAST", { message });
};

const warningToast = (message:string) => {
  bus.publish("WARNING_TOAST", { message });
};

const errorToast = (message:string) => {
  bus.publish("ERROR_TOAST", { message });
};

const successToast = (message:string) => {
  bus.publish("SUCCESS_TOAST", { message });
};

export const ToastView = {
  showToast,
  warningToast,
  errorToast,
  successToast,
};
