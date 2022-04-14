                         (14) React Hook 


1. menggunakan useState()

Digunakan untuk membuat dan mengupdate state.

Pada class component membuat dan mengupdate state harus dilakukan seperti ini:

    import React from 'react';

    class App extends React.Component {
      state = {
        name: 'brachio'
      };

      handleChange = () => {
        this.setState({ name: 't-rex' });
      };

      render() {
        return (
          <div>
            <h1>Hello Devsaurus</h1>
            <p>My Name is {this.state.name}</p>
            <button onClick={this.handleChange}>Change Name</button>
          </div>
        );
      }
    }

    export default App;

Jika kita perhatikan code di atas terdapat tambahan keyword **this** untuk mengakses state dan menggunakan setState().

Keyword **this** kadang membuat bingung sebagian developer karena **this** pada JavaScript tidak selalu mengacu pada object dimana **this** digunakan.

Dengan menggunakan **useState** kita tidak perlu menambahkan keyword **this**.

    import React, { useState } from 'react';

    export default function App() {
      const [state, setState] = useState('brachio');

      const handleChange = () => {
        setState('t-rex');
      };

      return (
        <div>
          <h1>Hello Devsaurus</h1>
          <p>My Name is {state}</p>
          <button onClick={handleChange}>Change Name</button>
        </div>
      );
    }

2. menggunakan useEffect()

Memungkinkan untuk menambahkan **side effect** di function component dan juga bisa menjadi alternatif untuk lifecycle method **componentDidMount()** dan **componentDidUpdate()**.

**side effect** pada react adalah function yang dieksekusi setelah _render_.

Salah satu kondisi dimana kita bisa menggunakan **useEffect()** adalah pada saat _fetch_ data dari server.

    useEffect(() => {
        fetchData(https://server.somewhere);
      });


3. Macam-macam Hooks lain yang disediakan oleh React :

- useReducer
- useCallback
- useMemo
- useRef
- useImperativeHandle
- useLayoutEffect
- useDebugValue