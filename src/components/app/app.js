import "./app.css"

import AppInfo from "../app-info/app-info"
import SearchPanel from "../search-panel/search-panel"
import AppFilter from "../app-filter/app-filter"
import MovieList from "../movie-list/movie-list"
import MoviesAddForm from "../movies-add-form/movies-add-form"
const App = () => {
  const data =[
    {name: `Empire of osman`, viewers : 988, favourite: false, id: 1},
    {name: `Ertugrul`, viewers : 789, favourite: false, id: 2},
    {name: `Osman`, viewers : 1891, favourite: true, id: 3},
  ]
  return (
    <div className="app font-monospace">
        <div className="content">
           <AppInfo />
        </div>
        <div className="search-panel">
            <SearchPanel />
        </div>
        <div>
             <AppFilter />
        </div>
        <div>
        <MovieList data={data} />
        <MoviesAddForm />
         </div>     
    </div>
  )
}

export default App