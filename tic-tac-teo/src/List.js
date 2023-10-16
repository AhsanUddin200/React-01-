import React from "react";
import { Link } from "react-router-dom";


function List() {
  
  return (
    <div className=" mt-4text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400 ">
       
      <div className="flex items-center justify-between block rounded-lg bg-white p-6 shadow-md">
        
        <div className="flex items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiQI3KZbaArQIp8jmAcHd0kzVPB_dTcGx5jhuHJU8GCN5zYBUYp8m4vA5SxigAsArVnW8&usqp=CAU"
            alt="Logo"
            className="h-8 w-8 mr-2"
          />
          <h1 className="text-2xl font-bold mb-.5 text-black">Routes</h1>
        </div>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <nav
          
        >
          
          <ul className="flex list-none">
            {/* <li className="mr-6">
              <Link to="/profile" className="text-black hover:text-red-500">
                Profile
              </Link>
            </li> */}
            <li className="mr-6">
              <Link to="/app" className="text-black hover:text-red-600">
                App
              </Link>
            </li>
            <li className="mr-6">
              <Link to="/qa" className="text-black hover:text-red-700">
                Q.A
              </Link>
            </li>
            <li className="mr-6">
              <Link to="/quotes" className="text-black hover:text-red-500">
                Quotes
              </Link>
            </li>
            <li className="mr-6">
              <Link to="/table" className="text-black hover:text-red-600">
                Table
              </Link>
            </li>
            <li className="mr-6">
              <Link
                to="/users"
                className="text-black hover:text-red-700"
              >
                Users
              </Link>
            </li>
            <li className="mr-6">
              <Link
                to="/video"
                className="text-black hover:text-red-500"
              >
                Video
              </Link>
            </li>
            <li className="mr-6">
              <Link
                to="/github"
                className="text-black hover:text-red-600"
              >
                Github
              </Link>
            </li>
            <li className="mr-6">
              <Link to="/weather" className="text-black hover:text-red-700">
                Weather
              </Link>
            </li>
            <li className="mr-6">
              <Link to="/news" className="text-black hover:text-red-500">
                News
              </Link>
            </li>
            <li className="mr-6">
              <Link to="/todo" className="text-black hover:text-red-900">
                Todo
              </Link>
            </li>
             <li className="mr-6">
              <Link to="/book" className="text-black hover:text-red-900">
                Book
              </Link>
            </li>
         

            <li className="mr-6">
              <Link
                to="/logout"
                className="text-white hover:text-red-200 bg-black rounded p-0.1 "
              >
                Logout
              </Link>
              
            </li>
            <li className="mr-6">
  <Link to="/profile"> 
    <img
      className="w-6 h-6 rounded-full"
      src="https://scontent.fkhi16-1.fna.fbcdn.net/v/t39.30808-6/320711413_670005641446096_7031334688315553448_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG1eLH-0BBpg1ONCWV7GeCwJQ2GFBU6YTIlDYYUFTphMok6wjMf4LduZ5wvOuMTxWr77LRxQTsX0FJG5KMTbogE&_nc_ohc=WwIifGCoN1YAX8i7K-K&_nc_ht=scontent.fkhi16-1.fna&oh=00_AfCTXpnH8cmOJMwKCpReCzTGjEcmy9GliCGnse-6kTuT_w&oe=652D5A54"
      alt="Remote Image"
    />
  </Link>
</li>

      
          </ul>
        </nav>
      </div>
      {/* <div class="flex  ">
  <div class="w-2/3 p-9">
  <span
  className="bg-clip-text text-transparent bg-gradient-to-r from-black to-red-500"
  style={{ fontSize: '50px' }}
>
  Why we use routes in raect...
</span>

<br></br>
    <p className="bg-origin-content p-4 border-4 border-red-300 rounded-lg border-dashed ...">
      The primary goal of Router in React JS is to supply the browser with an
      asynchronous URL that corresponds to the data that will show on the web
      page. It is mainly used to create single-page web apps since it retains
      the application's regular structure and functionality. The Router in
      React JS is primarily used to create Single Page Web Apps. In the
      application, React Router is utilized to define various routes. When a
      user enters a URL into your browser and the URL route equals one of
      several 'pathways' as in the router folder, the user is sent to that
      route. One of the prominent front-end platforms is ReactJS. Thousands of
      developers have utilized it for various use cases and applications. One
      of the most excellent features of ReactJS is that We can use it with a
      wide range of other technologies, including routers.
    </p>
  </div>
</div> */}

    </div>
  );
}

export default List;
