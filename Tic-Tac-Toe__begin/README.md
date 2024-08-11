- 틱택토 과제

> 1. 혼자서 초기세팅을 진행하려 했으나.. ESlint 버젼 오류로 5번정도 프로젝틀를 지웠다.. 해결하지 못해서 선생님께서 올려주신 파일로 과제를 진행하였습니다.

> 2. Sqaure 컴포넌트 분리 하였습니다.
>    9개의 빈배열을 만든뒤 해당 배열을 map으로 반복하여 Square 컴포넌트9개를 생성하였습니다. Square 컴포넌트의 key 값으로 index 를 주고 잘 출력되는지 확인하기 위해 자식으로 index를 주었습니다.
>    Board 컴포넌트에서 상태를 관리하여, Board 컴포넌트에서
>    `const initialSquares = Array(9).fill(null);` 로 디폴트 값을 설정해주고,
>    `const [square, setSquares] = useState(initialSquares);`
>    useState 로 상태를 관리하고 기본 상태로 빈배열 9개를 주었습니다.

> 3.  클릭함수

```js
const squareClick = (index) => () => {
  const nextSquares = [...squares];
  nextSquares[index] = nextPlayer;
  setSquares(nextSquares);
  setIsCircleNext(!isCircleNext);
  console.log(square);
};
```

> square 컴포넌트 클릭시, 해당 이벤트가 발생.
> index를 사용하기위해, 클로저로 함수 자체를 전달하였습니다.
> 기본 값을 복사한뒤, 클릭한 버튼의 인덱스값을 찾아, ` nextSquares[index]` 에
> `const nextPlayer = isCircleNext ? '⚫️' : '🟨';`
> 해당 플레이어의 값을 넣어주는 로직을 구현했습니다.
> ` const [isCircleNext, setIsCircleNext] = useState(true);` 유저의 상태를 변경하기위해
> 클릭시 setIsCircleNext 을 사용해서, isCircleNext 값을 반전시키도록 하였습니다.

> 4. 버튼을 클릭하면, 값이 들어간 버튼이 다시 클릭되지않도록 하기위해, `disabled={children}` 속성을 주었습니다. prop 으로 children 을 받아와, 해당값이 들어오면 true 로 활성화되어 값이 들어온 버튼은 다시 클릭되지 않습니다.

> 5. Squares 컴포넌트를 제작하여, 컴포넌트를 더 세분화 하였습니다. 기존 Board 에서 Square 로 바로 받던 state 를 Squares 컴포넌트에 전달하여 Square 로 또 전달하도록 하였습니다.

> 6. 게임의 승패 유무와 게임의 승자를 확인해주는 메세지를 띄우기위한 코드로직을 추가하였습니다.
>    Board 컴포넌트에서 상태를 관리하므로, 해당 컴포넌트 로직에 checkWinner 이라는 함수를 만들고, 해당함수에서 winner 가 있으면 true 없으면 False 값을 반환합니다.

```js
const checkWinner = (squares) => {
  for (const [x, y, z] of winnerCondition) {
    const xValue = squares[x];
    const yValue = squares[y];
    if (xValue && xValue === yValue && yValue === squares[z]) {
      return {
        player: xValue,
        pattern: [x, y, z],
      };
    }
  }
  return null;
};
```

> `for ~ of ` 문으로 승리조건을 순회하여, 해당 조건에 값이 모두 일치하면, 조건을 만족했을때 플레이어 이름과 만족한 패턴을 가진 객체를 반환시킵니다.
> 빙고판의 최신상태를 checkWinner 함수에 전달해주어, 불리언값응을 반환해 winner 변수에 할당해주었습니다.

- 해당 변수가 true 일경우, GameOver 이라는 alert 창을 띄우고

```js let statusMessage;
if (winner) {
  statusMessage = `승자!:${winner.player}`;
} else {
  statusMessage = `플레이어 ${nextPlayer}`;
}
```

> 상태 메세지를 Status 컴포넌트의 props 로 전달해주어, 만족한 조건이 되면 해당 메세지를 띄어주는 로직을 구현했습니다.

> 7. 무승부 일때 도 필요한 로직을 구현했습니다.
>    승리자가 없고, 배열이 가득 차있을경우,
>    메세지에 '비김' 이라는 메세지를 전달하는 로직을 구현했습니다.

> 8. 다만들고 시연해보니, 게임이 끝나도 멈추지 않아서 코드를 확인해보니 `if (winner) return alert('GAME OVER');` 클릭 했을때 winner 가 있으면 함수고 종료되는 코드가 지워져 있었습니다.... 그래서 다시 추가해주었습니다.

> 9. History를 제작해보려했는데.. 시간이 없어서 나중에 정리해주신 노션을 보고 state 끌어올리기 연습과, 다시 코드를 리펙토링 하는 연습을 진행하려 합니다.

느낀점

- ESlint 가 자꾸 9.0을 못쓴다고 화를냅니다.. 그래서 --force 도 해보고 다운그레이드도 해봤는데 자꾸 화를냅니다..
  혼자 초기설정 하는 연습이 더 필요하다고 느꼈습니다.

- 코드를 하나하나 천천히 보니 이제서야 이해가 되었습니다..
  수업시간에는 야무쌤께서 Square 부터 Game 까지 상태를 끌어올렸는데, 자신이 없었습니다.. 그래서 Board 에서 바로 내리는 로직으로 구현했습니다. 두려워 하면 안되는데 빨간불이 저를 두렵게합니다 ㅠㅠ..

- 수업시간에 사용했던 module css 를 사용하지 않은점이 아쉽습니다.

- 천천히 코드를 짜보니 재미있었습니다. 역시 코딩은 생각하면서 쳐봐야 실력이 향상되는거 같습니다.

항상 열정적인 수업 감사드립니다. 더운날씨 에 건강 조심하세요! 감사합니다.
