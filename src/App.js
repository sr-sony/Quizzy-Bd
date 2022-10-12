import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import About from './components/About/About';
import CourseDetails from './components/CourseDetails/CourseDetails';
import Blog from './components/Blog/Blog';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children:[
        {
          path:'/',
          loader: () =>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path:'/home',
          loader: () =>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path:'/statistics',
          element:<Statistics></Statistics>,
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          }
        },
        {
          path:'/course/:courseId',
          element:<CourseDetails></CourseDetails>,
          loader: async ({params}) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.courseId}`)
          }
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/about',
          element:<About></About>
        },
        { 
          path: '*',
          element: <div>This route is not found</div>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
