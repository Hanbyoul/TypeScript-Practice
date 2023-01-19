function App() {
  type Player = {
    hanbyoul: string;
    healthBar: number;
  };
  const hanbyoul: Player = {
    hanbyoul: "Hanbyoul",
    healthBar: 10,
  };

  type Team = "red" | "yellow" | "blue";
  // 단순히 string으로만 국한 시키는 것이 아닌, 선택을 명시

  type Health = 1 | 5 | 10;

  interface Player2 {
    hanbyoul: string;
    team: Team;
    health: Health;
  }

  const byoul: Player2 = {
    hanbyoul: "hanbyoul!!",
    team: "red",
    health: 1,
  };

  interface User {
    name: string;
  }

  interface Player3 extends User {
    //User interface를 상속 받을 수 있다
  }

  const han: Player3 = {
    name: "LHB",
  };

  type User2 = {
    name: string;
  };

  type Player4 = User2 & {};

  const byul: Player4 = {
    name: "hello",
  };

  interface User3 {
    name: string;
  }
  interface User3 {
    lastName: string;
  }
  interface User3 {
    Health: string;
  }

  const hanby: User3 = {
    name: "wow",
    Health: "oh!!",
    lastName: "Yeah",
  };

  // abstract class Person {
  //   constructor(protected firstName: string, protected lastName: string) {}
  //   abstract sayHi(name: string): string;
  //   abstract fullName(): string;
  // }

  // class PlayerUser extends Person {
  //   fullName(): string {
  //     return `${this.firstName} ${this.lastName}`;
  //   }
  //   sayHi(name: string): string {
  //     return `Hello ${name}. My name is ${this.fullName()}`;
  //   }
  // }

  // interface 를 class에 상속 , abstract Class 대신 활용 하기

  interface Person {
    firstName: string;
    lastName: string;
    sayHi(name: string): string;
    fullName(): string;
  }
  interface Human {
    health: number;
  }

  class PlayerUser implements Person, Human {
    // implements TypeScript용 언어. Js에서는 인식을 못한다.
    constructor(
      // 상속하는 interface 의 property는 접근권한을 설정 할 수 없기 때문에 public으로 진행한다.
      public firstName: string,
      public lastName: string,
      public health: number
    ) {}
    fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    sayHi(name: string): string {
      return `Hello ${name}. My name is ${this.fullName()}`;
    }
  }

  const mainByoul = new PlayerUser("LIM", "Hanbyoul", 999);
  console.log(mainByoul.fullName());
  console.log(mainByoul.sayHi("MINJI"));
  console.log(mainByoul);

  //이미 만든 interface를 Argument로 재사용 예시

  const makerPerson = (person: Person): Person => {
    //파라미터 , 리턴값 각각 interface 설정
    return {
      firstName: "Lim",
      lastName: "hanbyoul",
      fullName() {
        return "Hi";
      },
      sayHi() {
        return this.fullName();
      },
    };
  };

  console.log(
    makerPerson({
      firstName: "Lim",
      lastName: "hanbyoul",
      fullName() {
        return "Hi";
      },
      sayHi() {
        return this.fullName();
      },
    })
  );

  return <div></div>;
}

export default App;
