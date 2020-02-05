link: https://viblo.asia/p/react-js-hieu-ve-functional-va-class-components-Qbq5QpkRlD8

React có 2 loại component: Funtional (Stateless) và Class (Stateful).

1. Functional (Stateless) Components

1 functional component là một hàm Javascript (hoặc ES6) trả về 1 phần tử/1 element React. Theo official docs của React, hàm dưới đây là một component React hợp lệ:
```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
```
Function này là một component React hợp lệ vì nó nhận một "props" (viết tắt của properties) làm tham số và trả về 1 React element 
```

2. Class (Stateful) Components
Các Class components là những class ES6. Chúng phức tạp hơn functional components ở chỗ nó còn có: phương thức khởi tạo, life-cycle, hàm render() và quản lý state (data). Ví dụ dưới đây là class component:

```
import React, {Component} from 'react';
class example extends Component {
  render() {
    return (
      <div>This is an example component.</div>
    );
  }
}
```

===> Vì vậy, một React class component là:

là một class ES6, nó sẽ là một component khi nó "kế thừa" React component.
có thể nhận props (trong hàm khởi tạo) nếu cần.
có thể maintain data của nó với state
phải có 1 method render() trả về 1 React element (JSX), or null