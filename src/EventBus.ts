export type Message = {
  message:string
}
type Func = (toast:Message)=>void


// PUB/SUB 패턴
const EventBus = () => {
  // 명령어를 저장하는 곳
  const topics = new Map();

  const subscribe = (topic:string, listener:Func) => {
    // 가장 먼저 명령어를 저장함
    // 값을 배열로 줌으로써 명렁어를 입력하면 여러 개의 함수를 실행할 수 있도록 함
    if (!topics.has(topic)) {
      topics.set(topic, []);
    }
    // 구독을 통해 명령어에 함수를 저장함
    topics.get(topic).push(listener);

    // 구독해제 클린업 함수
    return () => {
      // 명령어 topic에 있는 구독되어 있는 함수들
      const listeners = topics.get(topic);
      // 나의 구독listener 취소
      listeners.splice(listeners.indexOf(listener), 1);
    };
  };

  // 명령어를 입력하여 해당 명령어에 구독된 함수들을 실행함
  const publish = (topic:string, data:Message) => {
    // 구독되어 있지 않으면 실행되지 않음
    if (!topics.has(topic)) return;
    // 구독되어 있는 경우
    // 명령어topic에 저장된 함수들listeners을 실행
    topics.get(topic).forEach((listener:Func) => listener(data));
  };

  return { subscribe, publish };
};

// subscribe함수와 publish함수가 담긴 객체
const bus = EventBus();
export default bus;
