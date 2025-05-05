import { Component, type ChangeEvent, type FormEvent, type ReactNode } from 'react';

import axios from 'axios';
import './App.css';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface AppState {
  posts: Post[];
  title: string,
  body: string;
  editingPostId: string | null; 
}

class App extends Component<{}, AppState> {
  state: Readonly<AppState> = {
    posts: [], 
    title: "",
    body: "",
    editingPostId: null
  };
  // constructor(props: {}) {
  //   super(props); 
   
  // }

  componentDidMount(): void {
    this.fetchPosts(); 
  }

  fetchPosts = async () => {
    try {
      const posts = await axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts?_limit=5");
      this.setState({
        posts: posts.data
      });
    } catch(error: string) {
      console.error("There is an error :", error)
    }
  }

  onFormHandler = async (e: FormEvent) => {
    e.preventDefault(); 

    const { title, body } = this.state; 

    if(title.length < 1 && body.length < 1) return; 

    try {
      const response = await axios.post<Post>("https://jsonplaceholder.typicode.com/posts", {
        title,
        body
      })

      this.setState((prevState) => ({
        title: "",
        body: "",
        posts: [response.data, ...prevState.posts]
      }))
    } catch(error: string) {
      console.error("Error during the posting process: ", error)
    }
  }

  onChangeHandler = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target; 

    this.setState({
      [name]: value
    })
    // this.setState({

    // })
  }

  render(): ReactNode {
    return (
      <section>
      <h1>CRUD project</h1>

      <form onSubmit={this.onFormHandler} style={{ marginBottom: "2rem" }}>
        <input onChange={this.onChangeHandler} type="text" name='title' placeholder='Title' value={this.state.title} />
        <br />
        <textarea value={this.state.body} onChange={this.onChangeHandler} name="body" placeholder='Write here your text to the post' required></textarea>

        <section>
          <button type='submit'>
            Send new post
          </button>
        </section>
      </form>

      <ul>
        {
          this.state.posts.map((post) => (
            <div key={post.id}>
              <h3>{post.title.slice(0,1).toUpperCase()}{post.title.slice(1)}</h3>
              <p>{post.body}</p>
            </div>
          ))
        }
      </ul>
   </section>
    )
   
  }
}

export default App
