import './info.css';

const Info = () => {

    let date = new Date();
    date.getTime();
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    let month =  months[date.getMonth()]; 
    let day = date.getDate()
    let year = date.getFullYear();
    let hours = date.getHours();
    let min = date.getMinutes();

    return(
        <div className='info'>
            <h1>Weather forecast</h1>
            <h5> {day} {month} {year}</h5>

            { `${min}` < 10  ? 
              <h5> {hours}:{`0${min}`}  </h5>
             : <h5> {hours}:{min}</h5>
            }
            
        </div>
    )
}

export default Info;