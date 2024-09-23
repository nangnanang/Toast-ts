import Toast from "./Toast"
import { ToastView } from "./showToast";

function App() {
  return (
    <div className="App">
      <Toast />
      <h1>React Event Bus Toast Example</h1>
      <button onClick={() => ToastView.showToast("토스트 메시지입니다.")}>
        Show Toast
      </button>
      <button onClick={() => ToastView.warningToast("경고 메시지입니다.")}>
        Warning Toast
      </button>
      <button onClick={() => ToastView.errorToast("에러 메시지입니다.")}>
        Error Toast
      </button>
      <button onClick={() => ToastView.successToast("성공 메시지입니다.")}>
        Success Toast
      </button>
    </div>
  );
}

export default App;
