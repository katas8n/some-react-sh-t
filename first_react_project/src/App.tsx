import './App.css'
import { GoalCard } from './components/GoalCard'

// Functions return always must return a single element
function App() {
  const plans = [
    {
      img: {
        src: "https://upload.wikimedia.org/wikipedia/en/7/73/Trollface.png",
        alt: "Something went wrong, try again later!"
      },
      title: "Learn React in 30 days",
      description: "Here is a so-called children shift"
    },
    {
      img: {
        src: "https://upload.wikimedia.org/wikipedia/en/7/73/Trollface.png",
        alt: "Something went wrong, try again later!"
      },
      title: "Learn TS in 30 days",
      description: "Here is a so-called children shift"
    },
    {
      img: {
        src: "https://upload.wikimedia.org/wikipedia/en/7/73/Trollface.png",
        alt: "Something went wrong, try again later!"
      },
      title: "Learn SCSS in 30 days",
      description: "Here is a so-called children shift"
    },
  ]

  // JSX - is a simbious of JS and HTML 
  return (
      <div id='app'>
        {
          plans.map((plan, i) => <GoalCard img={plan.img} title={plan.title}> {plan.description} </GoalCard>)
        }
        {/* React gives us props as an instrument to share data */}
        {/* <GoalCard title='Learn React in 30 days!'> */}
          {/* Children of the tag */}
          {/* Here is a so-called children shift
        </GoalCard> */}
        {/* <article className='card h1-bold'>
          <span>Title</span>
          <p>Description</p>

          <button>Delete</button>
        </article> */}
      </div>
  )
}

export default App
