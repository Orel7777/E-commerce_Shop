
import './NewsLetter.css'
import { toast } from 'react-toastify';

function NewsLetter() {

 
    const onSubmit = () => {
        toast.success('Thank you for signing up for our Newsletter');
      };

  return (
    <div className='newsLetter'>
        <h1>Get new offers directly to your inbox</h1>
        <p>Subscribe to our newsLetter</p>
        <div>
            <input type="email" placeholder='Email Address'/><br />
            <button onClick={()=>{
                onSubmit()
            }}>Submit</button>
        </div>
    </div>
  )
}

export default NewsLetter