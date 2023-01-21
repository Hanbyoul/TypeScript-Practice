function App() {
  interface SStorage<T> {
    [key: string]: T; //key 가 제한되지 않는 Object를 정의 할때 사용
  }
  class LocalStorage<T> {
    private storage: SStorage<T> = {};
    set(key: string, value: T) {
      this.storage[key] = value;
    }
    remove(key: string) {
      delete this.storage[key];
    }
    get(key: string): T {
      return this.storage[key];
    }
    clear() {
      this.storage = {};
    }
  }

  const stringStorage = new LocalStorage<string>();
  stringStorage.set("hello", "ggg");

  const booleanStorage = new LocalStorage<Boolean>();
  booleanStorage.set("sss", false);

  const numberStorage = new LocalStorage<number>();
  numberStorage.set("ggg", 22222);

  return <div></div>;
}

export default App;
