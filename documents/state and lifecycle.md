State and lifecycle
link: https://reactjs.org/docs/state-and-lifecycle.html

1. Adding Local State to a Class
Để sử dụng `state` trong `render()` thì ta chỉ định sử dụng `constructor` như sau:

class Something extend Component {
    constructor (props) {
        super(props); // ---> khai báo và xây dựng props được chỉ định công khai trong constructor.
        this.state = {
            something: 'value here'
        };
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.something}.</h2>
            </div>
        );
    }
}

Class Component sẽ được gọi thường xuyên trong constructor với props.

Để thiết lập trang thái của dữ liệu trước và sau khi được mounting (Gắn) ta có 2 keyword cho: this.state() và this.setState()

==> Thứ tự diễn ra của một phương thức được gọi: 
When <Clock /> is passed to ReactDOM.render(), React calls the constructor of the Clock component. Since Clock needs to display the current time, it initializes this.state with an object including the current time. We will later update this state.

React then calls the Clock component’s render() method. This is how React learns what should be displayed on the screen. React then updates the DOM to match the Clock’s render output.

When the Clock output is inserted in the DOM, React calls the componentDidMount() lifecycle method. Inside it, the Clock component asks the browser to set up a timer to call the component’s tick() method once a second.

Every second the browser calls the tick() method. Inside it, the Clock component schedules a UI update by calling setState() with an object containing the current time. Thanks to the setState() call, React knows the state has changed, and calls the render() method again to learn what should be on the screen. This time, this.state.date in the render() method will be different, and so the render output will include the updated time. React updates the DOM accordingly.

If the Clock component is ever removed from the DOM, React calls the componentWillUnmount() lifecycle method so the timer is stopped.
===================
Sử dụng state đúng với cú pháp như sau: 
Instead, use setState():
// Correct
this.setState({comment: 'Hello'});

3. State Updates May Be Asynchronous

React có thể có nhiều `setState()` được gọi với hiệu suất đơn lẻ (a single update for performance).
```Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state```
